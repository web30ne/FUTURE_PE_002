(function() {
  // Inject styles (keeps component self-contained but honors CSS custom properties if present)
  var style = document.createElement('style');
  style.innerHTML = `
    :root {
      --lovable-main-color: var(--rw-main-color, #4f8cff);
      --lovable-question-size: 1.1rem;
      --lovable-answer-size: 0.95rem;
    }
    .lovable-chat-bubble {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      background: var(--lovable-main-color, #4f8cff);
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      transition: box-shadow 0.2s, transform 0.12s;
      border: none;
    }
    .lovable-chat-bubble:active { transform: scale(0.98); }
    .lovable-chat-bubble:focus {
      outline: 3px solid rgba(0,0,0,0.08);
      box-shadow: 0 0 0 4px rgba(0,120,255,0.12);
    }
    .lovable-chat-bubble svg {
      width: 28px;
      height: 28px;
      fill: #fff;
    }

    .lovable-faq-box {
      position: fixed;
      bottom: 90px;
      right: 24px;
      width: 340px;
      max-width: 90vw;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.18);
      font-family: inherit;
      z-index: 10000;
      display: none;
      flex-direction: column;
      padding: 0;
      animation: lovable-fade-in 0.18s ease;
    }
    @keyframes lovable-fade-in {
      from { opacity: 0; transform: translateY(10px);}
      to { opacity: 1; transform: translateY(0);}
    }
    .lovable-faq-header {
      padding: 16px 20px 8px 20px;
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--lovable-main-color, #4f8cff);
      border-bottom: 1px solid #f0f0f0;
    }
    .lovable-faq-list { margin: 0; padding: 0; list-style: none; }
    .lovable-faq-item { border-bottom: 1px solid #f0f0f0; }

    .lovable-faq-question {
      background: none;
      border: none;
      width: 100%;
      text-align: left;
      padding: 14px 20px;
      font-size: var(--lovable-question-size, 1.1rem);
      color: var(--lovable-main-color, #4f8cff);
      font-weight: 600;
      cursor: pointer;
      outline: none;
      transition: background 0.12s;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lovable-faq-question:focus { background: #f5faff; }
    .lovable-faq-question .lovable-chevron {
      transition: transform 0.18s;
      color: rgba(0,0,0,0.6);
      margin-left: 12px;
      font-size: 0.95rem;
    }
    .lovable-faq-question[aria-expanded="true"] .lovable-chevron {
      transform: rotate(180deg);
    }

    .lovable-faq-answer {
      padding: 0 20px 14px 20px;
      font-size: var(--lovable-answer-size, 0.95rem);
      color: #444;
      display: none;
    }
    .lovable-faq-answer[aria-hidden="false"] { display: block; }

    .lovable-faq-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.25rem;
      color: #777;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: background 0.12s;
    }
    .lovable-faq-close:focus {
      background: #f0f0f0;
      outline: 3px solid rgba(0,120,255,0.12);
    }

    /* small responsive tweak */
    @media (max-width: 420px) {
      .lovable-faq-box { right: 12px; left: 12px; bottom: 84px; width: auto; max-width: calc(100% - 24px); }
      .lovable-chat-bubble { right: 12px; bottom: 18px; }
    }
  `;
  document.head.appendChild(style);

  // FAQ Data (as provided)
  var faqs = [
    {
      q: "What service does renderweb offer?",
      a: "We specialize in AI content Creation & Alert Automation to implement web strategy and boost your brand efficiency."
    },
    {
      q: "How can renderweb improve my business?",
      a: "Through tailored prompt engineering and cloud solutions, we enhance your online presence and operational scalability."
    },
    {
      q: "How do I get started with Renderweb?",
      a: "Contact us via the contact page to discuss your needs and explore how our services can benefit your business."
    }
  ];

  // Create Chat Bubble
  var bubble = document.createElement('button');
  bubble.className = 'lovable-chat-bubble';
  bubble.setAttribute('aria-label', 'Renderweb FAQ');
  bubble.setAttribute('title', 'Renderweb FAQ');
  bubble.type = 'button';
  bubble.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.1.88 4.02 2.33 5.44L5 21l4.05-1.6C10.03 19.6 11 19.75 12 19.75c4.97 0 9-3.58 9-8.75S16.97 3 12 3zm-.25 13h-.01C9.8 16 8 14.2 8 12s1.8-4 3.99-4S16 9.8 16 12c0 2.2-1.8 4-4.25 4z"/></svg>';

  // Create FAQ Box
  var faqBox = document.createElement('div');
  faqBox.className = 'lovable-faq-box';
  faqBox.setAttribute('role', 'dialog');
  faqBox.setAttribute('aria-modal', 'true');
  faqBox.setAttribute('aria-label', 'Frequently Asked Questions');
  faqBox.setAttribute('tabindex', '-1');
  faqBox.style.display = 'none';

  // Header
  var header = document.createElement('div');
  header.className = 'lovable-faq-header';
  header.textContent = 'Frequently Asked Questions';
  faqBox.appendChild(header);

  // Close button
  var closeBtn = document.createElement('button');
  closeBtn.className = 'lovable-faq-close';
  closeBtn.setAttribute('aria-label', 'Close FAQ');
  closeBtn.type = 'button';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function() { hideFaq(); });
  closeBtn.addEventListener('keydown', function(e){
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); hideFaq(); }
  });
  faqBox.appendChild(closeBtn);

  // FAQ list
  var faqList = document.createElement('ul');
  faqList.className = 'lovable-faq-list';
  faqList.setAttribute('role', 'list');
  faqBox.appendChild(faqList);

  // Build items
  faqs.forEach(function(faq, i) {
    var item = document.createElement('li');
    item.className = 'lovable-faq-item';

    var questionBtn = document.createElement('button');
    questionBtn.className = 'lovable-faq-question';
    questionBtn.setAttribute('aria-expanded', 'false');
    questionBtn.setAttribute('aria-controls', 'lovable-faq-answer-' + i);
    questionBtn.id = 'lovable-faq-question-' + i;
    questionBtn.type = 'button';

    var qSpan = document.createElement('span');
    qSpan.textContent = faq.q;

    var chevron = document.createElement('span');
    chevron.className = 'lovable-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    chevron.innerHTML = '▾';

    questionBtn.appendChild(qSpan);
    questionBtn.appendChild(chevron);

    // Answer panel
    var answer = document.createElement('div');
    answer.className = 'lovable-faq-answer';
    answer.id = 'lovable-faq-answer-' + i;
    answer.setAttribute('aria-hidden', 'true');
    answer.setAttribute('role', 'region');
    answer.setAttribute('aria-labelledby', questionBtn.id);
    answer.textContent = faq.a;

    // Event handlers
    questionBtn.addEventListener('click', function() {
      var expanded = questionBtn.getAttribute('aria-expanded') === 'true';
      // Close others (only one open at a time)
      closeAll();
      if (!expanded) {
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
        questionBtn.focus();
        // analytics hook
        var ev = new CustomEvent('lovable:faq:open', { detail: { index: i, question: faq.q }});
        window.dispatchEvent(ev);
      }
    });

    questionBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        questionBtn.click();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var next = item.nextElementSibling;
        if (next) next.querySelector('.lovable-faq-question').focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = item.previousElementSibling;
        if (prev) prev.querySelector('.lovable-faq-question').focus();
      }
    });

    item.appendChild(questionBtn);
    item.appendChild(answer);
    faqList.appendChild(item);
  });

  function closeAll() {
    var qs = faqBox.querySelectorAll('.lovable-faq-question');
    qs.forEach(function(btn){
      btn.setAttribute('aria-expanded', 'false');
    });
    var ans = faqBox.querySelectorAll('.lovable-faq-answer');
    ans.forEach(function(a){ a.setAttribute('aria-hidden', 'true'); });
  }

  // Show / hide
  function showFaq() {
    faqBox.style.display = 'flex';
    setTimeout(function(){ faqBox.style.opacity = 1; }, 10);
    // focus first question for keyboard users
    var firstQ = faqBox.querySelector('.lovable-faq-question');
    if (firstQ) firstQ.focus();
    document.addEventListener('keydown', onKeydown);
  }
  function hideFaq() {
    faqBox.style.display = 'none';
    bubble.focus();
    closeAll();
    document.removeEventListener('keydown', onKeydown);
  }

  function onKeydown(e) {
    if (e.key === 'Escape') hideFaq();
  }

  // Toggle via bubble
  bubble.addEventListener('click', function() {
    if (faqBox.style.display === 'flex') hideFaq(); else showFaq();
  });
  bubble.addEventListener('keydown', function(e){
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); bubble.click(); }
  });

  // Close if clicking outside
  document.addEventListener('click', function(e){
    if (!faqBox.contains(e.target) && !bubble.contains(e.target) && faqBox.style.display === 'flex') {
      hideFaq();
    }
  }, true);

  // Append to DOM
  document.body.appendChild(bubble);
  document.body.appendChild(faqBox);

  // Expose a small API for customization
  window.lovableFAQ = {
    open: showFaq,
    close: hideFaq,
    toggle: function(){ if (faqBox.style.display === 'flex') hideFaq(); else showFaq(); },
    on: function(eventName, handler){ window.addEventListener(eventName, handler); },
    setColor: function(color){
      document.documentElement.style.setProperty('--lovable-main-color', color);
    }
  };

  // helpful note: if site defines --rw-main-color or --primary, the component will pick that up
})();