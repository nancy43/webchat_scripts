(function () {
  var BASE_URL = "https://app.chatwoot.com";
  window.chatwootSettings = {
    position: "right",
    type: "standard",
    launcherTitle: "Chat with us",
    hideMessageBubble: true,
  };

  // Load Chatwoot SDK
  var g = document.createElement("script"),
    s = document.getElementsByTagName("script")[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: "M5F94gbwLpMwKjfRQWHXsMbi",
      baseUrl: BASE_URL,
    });
  };

  // Inject CSS
  var css =
    ".artie-bubble{position:fixed;bottom:16px;right:16px;z-index:9999;width:56px;height:56px;background:#E8927C;border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;transition:transform .2s}.artie-bubble:hover{transform:scale(1.05)}.artie-modal{position:fixed;bottom:96px;right:16px;z-index:9999;width:320px;background:#fff;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.15);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:none}.artie-modal.show{display:block}.artie-hdr{padding:20px 20px 16px;display:flex;align-items:flex-start;gap:12px}.artie-avatar{width:48px;height:48px;border-radius:50%;border:2px solid #E8927C;flex-shrink:0;background:#f3f4f6}.artie-title{font-size:18px;font-weight:600;color:#111827;margin:0;flex:1}.artie-close{background:none;border:none;color:#9CA3AF;cursor:pointer;padding:4px;line-height:0}.artie-close:hover{color:#4B5563}.artie-desc{padding:0 20px 20px;color:#374151;font-size:15px;line-height:1.5;margin:0}.artie-btns{padding:0 20px 20px;display:flex;gap:12px}.artie-btn{flex:1;padding:10px 16px;border-radius:9999px;font-size:14px;font-weight:500;cursor:pointer;transition:background .2s}.artie-primary{background:#E8927C;color:#fff;border:1px solid #E8927C}.artie-primary:hover{background:#d9836d}.artie-secondary{background:#fff;color:#374151;border:1px solid #D1D5DB}.artie-secondary:hover{background:#F9FAFB}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  // Avatar/logo
  var logo =
    "https://i.ibb.co/5hBS5Yxk/Screenshot-2025-12-05-at-10-01-06-AM.png";

  // HTML template
  var html =
    '<div id="artie-modal" class="artie-modal">' +
    '<div class="artie-hdr">' +
    '<img src="' +
    logo +
    '" alt="Artie" class="artie-avatar"/>' +
    "<h3 class='artie-title'>Hi! I'm Artie, Your AI Assistant!</h3>" +
    "<button class='artie-close' onclick=\"document.getElementById('artie-modal').classList.remove('show')\">" +
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
    "</button>" +
    "</div>" +
    "<p class='artie-desc'>I can help with community questions, HOA rules, and more. Chat with me!</p>" +
    "<div class='artie-btns'>" +
    "<button class='artie-btn artie-primary' onclick=\"document.getElementById('artie-modal').classList.remove('show');if(window.$chatwoot)window.$chatwoot.toggle('open')\">Start Chat</button>" +
    "<button class='artie-btn artie-secondary' onclick=\"document.getElementById('artie-modal').classList.remove('show')\">Maybe Later</button>" +
    "</div>" +
    "</div>" +
    '<button class="artie-bubble" onclick="if(window.$chatwoot&&window.$chatwoot.isOpen){window.$chatwoot.toggle()}else{document.getElementById(\'artie-modal\').classList.add(\'show\')}">' +
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
    "</button>";

  document.body.insertAdjacentHTML("beforeend", html);
})();
