/**
 * Lovable Interactive Links System
 * Automatically enhances specified keywords in headers/footers with preview links
 */

class LovableLinks {
  constructor(config = {}) {
    this.config = {
      keywords: [],
      replaceStrategy: 'first-occurrence',
      previewSource: 'mapping-or-server',
      serverPreviewEndpoint: null,
      previewDelay: 200,
      mobileBreakpoint: 768,
      ...config
    };
    
    this.processedNodes = new Set();
    this.activePreview = null;
    this.previewTimeout = null;
    
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.processPage());
    } else {
      this.processPage();
    }
  }

  processPage() {
    const targetSelectors = 'header, footer, [data-site-header], [data-site-footer]';
    const containers = document.querySelectorAll(targetSelectors);
    
    containers.forEach(container => {
      this.processContainer(container);
    });
    
    this.setupGlobalEventListeners();
  }

  processContainer(container) {
    this.config.keywords.forEach(keywordConfig => {
      const { keyword, url, openInNewTab, utm_campaign, preview } = keywordConfig;
      
      if (this.config.replaceStrategy === 'first-occurrence') {
        this.replaceFirstOccurrence(container, keyword, keywordConfig);
      } else {
        this.replaceAllOccurrences(container, keyword, keywordConfig);
      }
    });
  }

  replaceFirstOccurrence(container, keyword, config) {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          return this.shouldProcessTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      if (this.replaceKeywordInTextNode(node, keyword, config)) {
        break; // Only replace first occurrence
      }
    }
  }

  replaceAllOccurrences(container, keyword, config) {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          return this.shouldProcessTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodesToProcess = [];
    let node;
    while (node = walker.nextNode()) {
      nodesToProcess.push(node);
    }

    nodesToProcess.forEach(textNode => {
      this.replaceKeywordInTextNode(textNode, keyword, config);
    });
  }

  shouldProcessTextNode(node) {
    // Skip if already processed
    if (this.processedNodes.has(node)) return false;
    
    // Skip if inside existing link
    if (node.parentElement.closest('a')) return false;
    
    // Skip script, style, code, pre elements
    const skipTags = ['SCRIPT', 'STYLE', 'CODE', 'PRE'];
    if (skipTags.includes(node.parentElement.tagName)) return false;
    
    return true;
  }

  replaceKeywordInTextNode(textNode, keyword, config) {
    const text = textNode.textContent;
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const match = text.match(regex);
    
    if (!match) return false;
    
    const parts = text.split(regex);
    const parent = textNode.parentNode;
    
    // Create document fragment for efficient DOM manipulation
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        // Add the link for matched keyword
        const link = this.createLovableLink(match[0], config);
        fragment.appendChild(link);
      }
      
      if (parts[i]) {
        fragment.appendChild(document.createTextNode(parts[i]));
      }
    }
    
    parent.replaceChild(fragment, textNode);
    this.processedNodes.add(textNode);
    
    return true;
  }

  createLovableLink(matchedText, config) {
    const { url, openInNewTab, utm_campaign, preview } = config;
    
    const link = document.createElement('a');
    link.href = this.buildUrl(url, utm_campaign);
    link.textContent = matchedText;
    link.className = 'lovable-link';
    
    // Data attributes for analytics
    link.setAttribute('data-lovable-keyword', config.keyword);
    link.setAttribute('data-utm-campaign', utm_campaign || '');
    link.setAttribute('data-source', this.getSourceType(link));
    
    if (openInNewTab) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    
    // Accessibility
    link.setAttribute('aria-label', `${matchedText}: ${preview?.title || 'Learn more'}`);
    
    // Preview data attributes
    if (preview) {
      link.setAttribute('data-preview-title', preview.title || '');
      link.setAttribute('data-preview-text', preview.text || '');
      link.setAttribute('data-preview-image', preview.image || '');
    }
    
    // Event listeners
    this.attachLinkEvents(link, config);
    
    return link;
  }

  buildUrl(baseUrl, utmCampaign) {
    const url = new URL(baseUrl);
    url.searchParams.set('utm_source', 'lovable_link');
    if (utmCampaign) {
      url.searchParams.set('utm_campaign', utmCampaign);
    }
    return url.toString();
  }

  getSourceType(linkElement) {
    const header = linkElement.closest('header, [data-site-header]');
    const footer = linkElement.closest('footer, [data-site-footer]');
    return header ? 'header' : footer ? 'footer' : 'unknown';
  }

  attachLinkEvents(link, config) {
    // Mouse events for desktop
    link.addEventListener('mouseenter', (e) => this.showPreview(e, config));
    link.addEventListener('mouseleave', () => this.hidePreview());
    
    // Focus events for keyboard navigation
    link.addEventListener('focus', (e) => this.showPreview(e, config));
    link.addEventListener('blur', () => this.hidePreview());
    
    // Mobile touch events
    link.addEventListener('touchstart', (e) => this.handleMobileTouch(e, config));
    
    // Click events for analytics
    link.addEventListener('click', (e) => this.handleLinkClick(e, config));
  }

  showPreview(event, config) {
    if (this.isMobile()) return;
    
    clearTimeout(this.previewTimeout);
    
    this.previewTimeout = setTimeout(() => {
      this.createPreviewCard(event.target, config);
    }, this.config.previewDelay);
  }

  hidePreview() {
    clearTimeout(this.previewTimeout);
    
    if (this.activePreview) {
      this.activePreview.remove();
      this.activePreview = null;
    }
  }

  createPreviewCard(linkElement, config) {
    this.hidePreview(); // Remove any existing preview
    
    const preview = config.preview;
    if (!preview) return;
    
    const card = document.createElement('div');
    card.className = 'lovable-preview-card';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'false');
    card.setAttribute('aria-labelledby', 'preview-title');
    card.setAttribute('aria-describedby', 'preview-description');
    
    card.innerHTML = `
      ${preview.image ? `<img src="${preview.image}" alt="" class="lovable-preview-image">` : ''}
      <div class="lovable-preview-content">
        <h4 id="preview-title" class="lovable-preview-title">${preview.title || ''}</h4>
        <p id="preview-description" class="lovable-preview-text">${preview.text || ''}</p>
      </div>
    `;
    
    // Position the card
    this.positionPreviewCard(card, linkElement);
    
    document.body.appendChild(card);
    this.activePreview = card;
    
    // Trigger analytics
    this.triggerAnalytics('onPreviewOpen', config.keyword, config.url);
  }

  positionPreviewCard(card, linkElement) {
    const rect = linkElement.getBoundingClientRect();
    const cardWidth = 320;
    const cardHeight = 200;
    const padding = 10;
    
    let left = rect.left + (rect.width / 2) - (cardWidth / 2);
    let top = rect.bottom + padding;
    
    // Adjust if card goes off screen
    if (left < padding) left = padding;
    if (left + cardWidth > window.innerWidth - padding) {
      left = window.innerWidth - cardWidth - padding;
    }
    
    if (top + cardHeight > window.innerHeight - padding) {
      top = rect.top - cardHeight - padding;
    }
    
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  }

  handleMobileTouch(event, config) {
    if (!this.isMobile()) return;
    
    event.preventDefault();
    
    if (this.activePreview) {
      // Second tap - navigate
      window.open(config.url, config.openInNewTab ? '_blank' : '_self');
    } else {
      // First tap - show preview as modal
      this.createMobilePreview(config);
    }
  }

  createMobilePreview(config) {
    const preview = config.preview;
    if (!preview) {
      window.open(config.url, config.openInNewTab ? '_blank' : '_self');
      return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'lovable-mobile-preview';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    
    modal.innerHTML = `
      <div class="lovable-mobile-preview-content">
        <button class="lovable-mobile-preview-close" aria-label="Close preview">×</button>
        ${preview.image ? `<img src="${preview.image}" alt="" class="lovable-mobile-preview-image">` : ''}
        <div class="lovable-mobile-preview-text">
          <h4>${preview.title || ''}</h4>
          <p>${preview.text || ''}</p>
        </div>
        <div class="lovable-mobile-preview-actions">
          <button class="lovable-mobile-preview-go">Visit Page</button>
        </div>
      </div>
    `;
    
    // Event listeners
    modal.querySelector('.lovable-mobile-preview-close').addEventListener('click', () => {
      modal.remove();
      this.activePreview = null;
    });
    
    modal.querySelector('.lovable-mobile-preview-go').addEventListener('click', () => {
      window.open(config.url, config.openInNewTab ? '_blank' : '_self');
      modal.remove();
      this.activePreview = null;
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
        this.activePreview = null;
      }
    });
    
    document.body.appendChild(modal);
    this.activePreview = modal;
  }

  handleLinkClick(event, config) {
    this.triggerAnalytics('onLinkClick', config.keyword, config.url);
  }

  triggerAnalytics(eventType, keyword, url) {
    if (window.lovableLinkEvents && typeof window.lovableLinkEvents[eventType] === 'function') {
      window.lovableLinkEvents[eventType](keyword, url);
    } else {
      console.debug(`Lovable Link ${eventType}:`, { keyword, url });
    }
  }

  isMobile() {
    return window.innerWidth < this.config.mobileBreakpoint;
  }

  setupGlobalEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activePreview) {
        this.hidePreview();
      }
    });
    
    // Close preview on scroll
    document.addEventListener('scroll', () => {
      if (this.activePreview) {
        this.hidePreview();
      }
    });
  }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LovableLinks;
} else if (typeof define === 'function' && define.amd) {
  define(() => LovableLinks);
} else {
  window.LovableLinks = LovableLinks;
}