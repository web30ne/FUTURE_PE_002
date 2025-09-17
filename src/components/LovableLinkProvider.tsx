import React, { useEffect } from 'react';

// Import the CSS and JS files
import '../styles/lovable-links.css';

interface LovableLinkConfig {
  keyword: string;
  url: string;
  openInNewTab?: boolean;
  utm_campaign?: string;
  preview?: {
    title: string;
    text: string;
    image?: string;
  };
}

interface LovableLinksConfig {
  keywords: LovableLinkConfig[];
  replaceStrategy?: 'first-occurrence' | 'all';
  previewSource?: 'mapping-or-server';
  serverPreviewEndpoint?: string;
  previewDelay?: number;
  mobileBreakpoint?: number;
}

interface Props {
  config?: LovableLinksConfig;
  children: React.ReactNode;
}

const defaultConfig: LovableLinksConfig = {
  keywords: [
    {
      keyword: "Careers",
      url: "https://example.com/careers",
      openInNewTab: false,
      utm_campaign: "site_header_links",
      preview: {
        title: "Careers at RenderWeb",
        text: "Join a team building modern AI-powered web experiences. See open roles and benefits.",
        image: "/assets/careers-thumb.jpg"
      }
    },
    {
      keyword: "Community",
      url: "https://community.example.com",
      openInNewTab: true,
      utm_campaign: "site_header_links",
      preview: {
        title: "RenderWeb Community",
        text: "Connect with other developers, share ideas, and get help from our community.",
        image: "/assets/community-thumb.jpg"
      }
    },
    {
      keyword: "Start free trial",
      url: "#contact",
      openInNewTab: false,
      utm_campaign: "trial_cta",
      preview: {
        title: "Start Your Free Trial",
        text: "Get started with RenderWeb AI automation. No credit card required.",
        image: "/assets/trial-thumb.jpg"
      }
    },
    {
      keyword: "Contact",
      url: "#contact",
      openInNewTab: false,
      utm_campaign: "contact_cta",
      preview: {
        title: "Get in Touch",
        text: "Ready to transform your content workflow? Let's talk about how RenderWeb can help.",
        image: "/assets/contact-thumb.jpg"
      }
    }
  ],
  replaceStrategy: 'first-occurrence',
  previewSource: 'mapping-or-server',
  previewDelay: 200,
  mobileBreakpoint: 768
};

const LovableLinkProvider: React.FC<Props> = ({ config = defaultConfig, children }) => {
  useEffect(() => {
    // Dynamically import and initialize the LovableLinks system
    const initializeLovableLinks = async () => {
      try {
        // Import the LovableLinks class
        const LovableLinksModule = await import('../lib/lovable-links.js');
        const LovableLinks = LovableLinksModule.default || LovableLinksModule;
        
        // Initialize with merged config
        const finalConfig = { ...defaultConfig, ...config };
        new LovableLinks(finalConfig);
        
        // Setup analytics hooks
        if (!window.lovableLinkEvents) {
          window.lovableLinkEvents = {
            onPreviewOpen: (keyword: string, url: string) => {
              console.debug('Lovable Link Preview Opened:', { keyword, url });
              // Add custom analytics tracking here
              if (window.gtag) {
                window.gtag('event', 'lovable_link_preview', {
                  event_category: 'engagement',
                  event_label: keyword,
                  value: url
                });
              }
            },
            onLinkClick: (keyword: string, url: string) => {
              console.debug('Lovable Link Clicked:', { keyword, url });
              // Add custom analytics tracking here
              if (window.gtag) {
                window.gtag('event', 'lovable_link_click', {
                  event_category: 'navigation',
                  event_label: keyword,
                  value: url
                });
              }
            }
          };
        }
      } catch (error) {
        console.error('Failed to initialize Lovable Links:', error);
      }
    };

    initializeLovableLinks();
  }, [config]);

  return <>{children}</>;
};

export default LovableLinkProvider;

// Type declarations for global objects
declare global {
  interface Window {
    lovableLinkEvents?: {
      onPreviewOpen: (keyword: string, url: string) => void;
      onLinkClick: (keyword: string, url: string) => void;
    };
    gtag?: (...args: any[]) => void;
  }
}