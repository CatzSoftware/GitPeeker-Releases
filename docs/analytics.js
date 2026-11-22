// 三頁共用的流量統計同意：訪客按下同意後才載入 Google Analytics，拒絕或還沒選時不載入、不放 Cookie。選擇記在瀏覽器裡，頁尾的「Cookie 設定」可以重選。
(function () {
  var ID = 'G-WJEBBVJM6R';
  var STORE = 'gitpeeker-site-analytics';
  var privacyUrl = new URL('privacy/', document.currentScript.src).href;
  var t = window.t || function (key) { return key; };
  var loaded = false;
  var banner = null;

  function saved() {
    try { var value = localStorage.getItem(STORE); return value === 'granted' || value === 'denied' ? value : null; } catch (error) { return null; }
  }

  function load() {
    window['ga-disable-' + ID] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ID);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(script);
  }

  // 停止送出統計，並刪掉先前同意時留下的 Cookie
  function unload() {
    window['ga-disable-' + ID] = true;
    document.cookie.split(';').forEach(function (pair) {
      var name = pair.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      ['', '; domain=' + location.hostname, '; domain=.' + location.hostname].forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + domain;
      });
    });
  }

  function choose(value) {
    try { localStorage.setItem(STORE, value); } catch (error) {}
    if (value === 'granted') load(); else unload();
    if (banner) { banner.remove(); banner = null; }
  }

  function button(label, value) {
    var element = document.createElement('button');
    element.type = 'button';
    element.textContent = t(label);
    element.dataset.consent = value;
    element.addEventListener('click', function () { choose(value); });
    return element;
  }

  function ask() {
    if (banner) return;
    banner = document.createElement('section');
    banner.className = 'consent';
    banner.setAttribute('aria-label', t('Cookie 同意'));
    var message = document.createElement('p');
    message.textContent = t('本網站想用 Google Analytics 統計瀏覽人數與來源。同意後才會在你的瀏覽器存放 Cookie；拒絕不影響使用。') + ' ';
    var link = document.createElement('a');
    link.href = privacyUrl;
    link.textContent = t('隱私權政策');
    message.appendChild(link);
    var actions = document.createElement('div');
    actions.appendChild(button('拒絕', 'denied'));
    actions.appendChild(button('同意', 'granted'));
    banner.appendChild(message);
    banner.appendChild(actions);
    document.body.appendChild(banner);
  }

  var footer = document.querySelector('footer nav');
  if (footer) {
    var settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'consent-settings';
    settings.textContent = t('Cookie 設定');
    settings.addEventListener('click', ask);
    footer.appendChild(settings);
  }

  var choice = saved();
  if (choice === 'granted') load();
  // 瀏覽器已送出「不要追蹤」的全域設定時當成拒絕，不再跳出詢問
  else if (!choice && navigator.globalPrivacyControl !== true) ask();
})();
