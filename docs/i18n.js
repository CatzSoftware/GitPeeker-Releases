// 首頁、隱私權政策、服務條款三頁共用的語系切換：頁面原文的繁體中文就是鍵，英文對照都在這個檔；選英文時把畫面上的文字與說明屬性換掉。
(function () {
  // 純文字與屬性的對照。鍵是去掉頭尾空白後的原文
  var text = {
    'GitPeeker：不用 clone，就能在同一個桌面視窗預覽 GitHub 儲存庫裡的文件、網站與影音。提供 Windows、macOS 與 Linux 版本，以及 Google Drive 備份說明。': 'GitPeeker previews the documents, websites and media in a GitHub repository in one desktop window, with no clone. Available for Windows, macOS and Linux, with Google Drive backup.',
    'GitPeeker 首頁': 'GitPeeker home',
    '頁首連結': 'Header links',
    '頁尾連結': 'Footer links',
    '語言': 'Language',
    '隱私權政策': 'Privacy Policy',
    '服務條款': 'Terms of Service',
    '下載': 'Download',
    'GitPeeker 是 CodingCatz 製作的桌面工具，可瀏覽 GitHub 儲存庫及預覽文件。登入、選一個儲存庫，文件、網站與影音就在同一個視窗裡打開；不用 clone，私人儲存庫也不必公開。': 'GitPeeker is a desktop tool by CodingCatz for browsing GitHub repositories. Sign in, pick a repository, and its documents, websites and media open in one window. No clone, and private repositories stay private.',
    '下載 GitPeeker': 'Download GitPeeker',
    '看看能做什麼': 'See what it does',
    'GitPeeker 視窗示範': 'GitPeeker window demo',
    '儲存庫裡的檔案': 'Files in the repository',
    '專案手冊': 'Project handbook',
    '這份文件說明怎麼把專案在自己的電腦上跑起來。': 'This document explains how to run the project on your own computer.',
    '安裝需求': 'Requirements',
    '啟動步驟': 'Getting started',
    '常見問題': 'FAQ',
    '文件': 'Docs',
    '五分鐘上手': 'Up and running in five minutes',
    '樣式、圖片和腳本都照原本的路徑載入，整個資料夾當成網站執行。': 'Styles, images and scripts load from their original paths, so the whole folder runs as a website.',
    '開始': 'Start',
    '流程圖：選檔、讀取、預覽': 'Flowchart: pick, fetch, preview',
    '選檔': 'Pick',
    '讀取': 'Fetch',
    '預覽': 'Preview',
    '文件裡的 Mermaid 區塊直接畫成圖表。': 'Mermaid blocks in a document are drawn as diagrams.',
    '00:42 / 02:10　拖進度條就能跳播。': '00:42 / 02:10  Drag the bar to seek.',
    '點左邊的檔案試試。GitPeeker 也是這樣：點到哪個檔，才讀哪個檔。': 'Try the files on the left. GitPeeker works the same way: it fetches a file only when you open it.',
    '想看一眼，不必整包搬回家': 'Take a look without bringing it all home',
    '只是要看一份文件或一個頁面，卻得先 clone、切分支、開伺服器。GitPeeker 把這三步都省了。': 'To read one document or see one page, you have to clone, switch branches and start a server. GitPeeker skips all three.',
    '點到哪個檔，才讀哪個檔': 'Only what you open',
    '內容直接向 GitHub 按需讀取，不會先把整個儲存庫下載下來。再大的專案，打開就能看。': 'Content is fetched from GitHub on demand, never the whole repository. Big projects open right away.',
    '你點的': 'You open',
    '只有這一個檔': 'Only this one file',
    '畫面上': 'On screen',
    '排好版的文件': 'A formatted document',
    '網站直接跑起來': 'Websites just run',
    '靜態網站的 HTML、CSS、JS 與圖片照原本的路徑載入，在視窗裡就是一個能操作的網站，不需要另外架站或開 GitHub Pages。': 'A static site loads its HTML, CSS, JS and images from their own paths and runs right in the window.',
    '跟著載入': 'Loaded with it',
    'style.css、app.js': 'style.css, app.js',
    '可以操作的網站': 'A working website',
    '分支用選的，不用 checkout': 'Branches, no checkout',
    '工具列選一個分支，檔案清單和預覽就換成那個分支的內容。你電腦上的工作目錄完全不受影響。': 'Choose a branch in the toolbar and the files and preview follow. Your working directory is untouched.',
    '原本': 'Before',
    '選單選': 'You pick',
    '那個分支的版本': 'That branch\'s version',
    '同一個檔，三種看法': 'One file, three views',
    'Markdown 排版成文件，HTML 當成網站，程式碼帶行號。想看它原本長什麼樣，工具列按一下就切過去，不用離開視窗去找編輯器。': 'Markdown is laid out as a document, HTML runs as a website, and code gets line numbers. To see the file as it really is, switch with one click in the toolbar instead of opening an editor.',
    '選擇呈現方式': 'Choose a view',
    '原始碼': 'Source',
    '原始檔': 'Raw',
    '切換只改變呈現方式，檔案內容不會被改寫。': 'Switching only changes how the file is shown. Its content is never modified.',
    '安裝指南': 'Installation guide',
    '下載專案': 'Download the project',
    '# 安裝指南': '# Installation guide',
    '先確認電腦有 **Node.js 22**。': 'Make sure you have **Node.js 22**.',
    '- 下載專案': '- Download the project',
    '- 執行 `npm ci`': '- Run `npm ci`',
    '# 安裝指南\n\n先確認電腦有 **Node.js 22**。\n\n- 下載專案\n- 執行 `npm ci`': '# Installation guide\n\nMake sure you have **Node.js 22**.\n\n- Download the project\n- Run `npm ci`',
    '讀長文件、看圖表，也都顧到了': 'Long reads and diagrams',
    '文件大綱': 'Document outline',
    '打開 Markdown，側欄就換成可搜尋、可收合的標題大綱；捲動時會標出目前讀到哪一節。': 'The sidebar becomes a searchable, collapsible outline that marks the section you are reading.',
    '多份文件分頁': 'Document tabs',
    '開過的文件留在上方分頁列，切回去時回到上次讀到的位置。': 'Opened documents stay in the tab bar and reopen where you left off.',
    'Mermaid 圖表': 'Mermaid diagrams',
    '流程圖、時序圖在你的電腦上畫出來，不連外部繪圖服務；點一下圖框就能拖曳、縮放、單張放大。': 'Flowcharts and sequence diagrams are drawn on your computer. Click one to drag, zoom or view it alone.',
    '影音可以跳播': 'Seekable media',
    '儲存庫裡的影片和音訊直接播放，進度條隨意拖。單一檔案上限 16 MiB。': 'Video and audio play directly with free seeking. Up to 16 MiB per file.',
    '只看內容的全螢幕': 'Content-only full screen',
    '程式內更新': 'In-app updates',
    'Windows 版可在程式裡檢查更新，驗證簽章後於背景換版，登入與開著的分頁都保留。': 'The Windows version verifies and installs updates in the background, keeping your sign-in and open tabs.',
    '放心用': 'Safe to use',
    '只要唯讀權限': 'Read-only access',
    '登入 GitHub 只要求讀取內容的權限，而且只看得到你自己選擇開放的儲存庫。': 'Sign-in asks only to read, and only the repositories you choose.',
    '不經第三方伺服器': 'No third-party servers',
    '內容由你的電腦直接向 GitHub 讀取，私人儲存庫不會被上傳到別的地方。': 'Your computer reads straight from GitHub. Private repositories go nowhere else.',
    '預覽頁被隔開': 'Previews are isolated',
    '儲存庫裡的網頁在隔離的框內執行，碰不到你的登入憑證，也不能自己開視窗或下載檔案。': 'Repository pages run isolated: no access to credentials, new windows or downloads.',
    '連同歷史，備份到自己的 Drive': 'Back up to your own Drive, history included',
    'Google Drive 備份功能（Beta）可將你選取的儲存庫及其 Git 歷史備份到自己的 Drive，並從 Drive 還原到本機新目錄。': 'Google Drive backup (Beta) saves the repositories you select, with their Git history, to your own Drive, and restores them from Drive into a new local folder.',
    '資料': 'Data',
    '備份範圍': 'What is backed up',
    '分支、標籤與歷史': 'Branches, tags and history',
    '完整保存，可還原成新的本機儲存庫': 'Kept in full and restorable as a new local repository',
    'Git LFS 大檔': 'Git LFS files',
    '一併保存，相同的檔案不重複上傳': 'Included; identical files are not uploaded twice',
    '子模組': 'Submodules',
    '保留引用；內容需個別加入備份': 'References are kept; add their content to the backup separately',
    'Issues、PR、Wiki、Releases': 'Issues, PRs, wikis, releases',
    '不包含，須另行保存': 'Not included; keep them separately',
    '只下載自己平台的那一個檔就好，不需要另外安裝 Node.js、Rust 或 Git。介面有繁體中文與英文，GitHub 與 GitLab.com 的儲存庫都能看。': 'One file for your platform, nothing else to install. In Traditional Chinese and English, for GitHub and GitLab.com.',
    '平台': 'Platform',
    '建議格式': 'Recommended',
    '另一種格式': 'Alternative',
    'Windows 10／11 x64': 'Windows 10/11 x64',
    'Setup.exe 安裝版': 'Setup.exe installer',
    'Portable.exe 免安裝版': 'Portable.exe',
    '（Ubuntu 24.04 實測）': ' (tested on Ubuntu 24.04)',
    '前往下載頁': 'Go to the download page',
    '安裝檔尚未簽章：Windows 可能顯示發行者未驗證，macOS 第一次開啟要到「隱私權與安全性」允許。不提供 Intel Mac 版。': 'The installers are not code-signed yet: Windows may warn about an unverified publisher, and macOS needs approval under Privacy & Security on first launch. No Intel Mac version.',
    '到 GitHub 發布頁看所有檔案與校驗碼': 'See all files and checksums on the GitHub release page',
    'GitPeeker · CodingCatz 製作': 'GitPeeker · Made by CodingCatz',
    'GitPeeker 隱私權政策 · CatzSoftware': 'GitPeeker Privacy Policy · CatzSoftware',
    'GitPeeker 服務條款 · CatzSoftware': 'GitPeeker Terms of Service · CatzSoftware',
    'GitPeeker 桌面版下載與 Google Drive 備份說明': 'GitPeeker desktop downloads and Google Drive backup information',
    'GitPeeker 隱私權政策': 'GitPeeker Privacy Policy',
    'GitPeeker 服務條款': 'GitPeeker Terms of Service',
    '首頁': 'Home',
    '你選取的儲存庫及 Git 歷史會暫存在本機，接著由桌面程式直接上傳到你擁有且未共用的 Google Drive 資料夾。備份紀錄包含儲存庫識別資訊、Git refs、時間、檔案大小與校驗值。還原時，程式從 Drive 下載資料，在你指定的位置建立新的本機目錄。備份資料與授權憑證不經 CodingCatz 的伺服器。備份檔案未由 GitPeeker 另行加密，程式也不會新增共用權限。': 'The repositories you select and their Git history are staged on your computer, then uploaded by the desktop app directly to a Google Drive folder that you own and have not shared. Backup records include repository identifiers, Git refs, timestamps, file sizes and checksums. When restoring, the app downloads the data from Drive and creates a new local folder at the location you specify. Backup data and authorization credentials do not pass through CodingCatz servers. GitPeeker does not additionally encrypt backup files, and the app does not add sharing permissions.',
    'Drive 備份會保留在你的 Google Drive，直到你透過 Drive 移除它們。解除連線或撤銷授權不會刪除先前的備份。還原到本機的資料由你管理。': 'Drive backups remain in your Google Drive until you remove them through Drive. Disconnecting or revoking authorization does not delete earlier backups. Data restored to your computer is managed by you.',
    '你可以使用 GitPeeker 預覽及備份你有權存取和複製的儲存庫。請遵守該儲存庫的授權條款，以及你使用的 GitHub 和 Google 服務條款。': 'You may use GitPeeker to preview and back up repositories that you have the right to access and copy. Please comply with the license of each repository and with the terms of service of the GitHub and Google services you use.',
    '備份與還原由你選擇的 Google 帳號和本機位置執行。Git 備份包含可由備份 refs 到達的 Git 歷史。Git LFS 大檔、子模組內容及 GitHub 的 Issues、PR、Wiki、Releases 和設定須另行保存。你可使用還原功能確認備份是否涵蓋所需資料。': 'Backup and restore run with the Google account and local location you choose. A Git backup contains the Git history reachable from the backed-up refs. Git LFS files, submodule content, and GitHub issues, pull requests, wikis, releases and settings must be kept separately. You can use the restore feature to confirm that a backup covers the data you need.',
    '你的電腦': 'Your computer',
    '下載 {0} 版': 'Download for {0}',
    '即將推出': 'Coming soon',
    '正式版即將推出 · ': 'Release coming soon · ',
    '目前版本 {0} · ': 'Version {0} · '
  };

  // 句子裡夾著標籤的段落，中英語序不同，整段替換。鍵是標了 data-i18n-html 的元素內容
  var html = {
    '本網站使用 Google Analytics 統計瀏覽人數與來源，會在瀏覽器存放 Cookie，記錄造訪的頁面、來源網站、裝置類型與大略地區，不記錄姓名或電子郵件。這只涉及網站，GitPeeker 桌面程式不使用 Google Analytics。你可以在瀏覽器封鎖 Cookie，或安裝 <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics 停用外掛</a>。': 'This website uses Google Analytics to count visits and where they come from. It stores cookies in your browser and records the pages you visit, the referring site, your device type and approximate region, but not your name or email address. This applies only to the website; the GitPeeker desktop app does not use Google Analytics. You can block cookies in your browser or install the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out add-on</a>.',
    '使用 Google Drive 備份時，GitPeeker 透過 Google Drive API 取得帳號顯示名稱、電子郵件和 Drive 權限識別碼，用於顯示已連接的帳號並核對備份位置。程式以 <code>drive.file</code> 權限存取個別檔案與資料夾。': 'When you use Google Drive backup, GitPeeker uses the Google Drive API to obtain your account display name, email address and Drive permission ID, in order to show the connected account and verify the backup location. The app accesses individual files and folders with the <code>drive.file</code> scope.',
    'Google 授權憑證在本機使用。若作業系統提供安全的加密儲存，GitPeeker 會加密保存更新憑證及相關帳號資訊。沒有安全的加密儲存時，憑證只保留在記憶體。你可在 GitPeeker 解除連線以移除本機授權憑證，或從 <a href="https://myaccount.google.com/connections">Google 帳戶的第三方連線</a>撤銷 Google 授權。': 'Google authorization credentials are used on your computer. If the operating system provides secure encrypted storage, GitPeeker stores the refresh token and related account information encrypted. Without secure encrypted storage, credentials are kept in memory only. You can disconnect in GitPeeker to remove the local credentials, or revoke the Google authorization from <a href="https://myaccount.google.com/connections">third-party connections in your Google Account</a>.',
    'GitPeeker 對 Google API 資料的使用與移轉遵循 <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>，包括 Limited Use 要求。隱私問題可寄至 catz.software@gmail.com。': 'GitPeeker\'s use and transfer of Google API data adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. Privacy questions can be sent to catz.software@gmail.com.',
    '服務問題可寄至 catz.software@gmail.com。<a href="../privacy/">隱私權政策</a>': 'Service questions can be sent to catz.software@gmail.com. <a href="../privacy/">Privacy Policy</a>',
    '換個方式，<br><em>看見專案</em>。': 'See your projects<br><em>differently</em>.',
    '先確認電腦有 <strong>Node.js 22</strong>。': 'Make sure you have <strong>Node.js 22</strong>.',
    '執行 <code>npm ci</code>': 'Run <code>npm ci</code>',
    '按 <kbd>F11</kbd> 收起側欄與工具列，整個螢幕留給正在讀的內容。': 'Press <kbd>F11</kbd> to hide the sidebar and toolbar and leave the whole screen to the content.',
    '只有連接備份功能時，GitPeeker 才會請求 Google 授權。它使用 <code>drive.file</code> 權限存取程式在 Drive 建立或取得個別授權的檔案與資料夾。Google Drive 的授權與 GitHub 的授權分開處理。': 'GitPeeker asks for Google authorization only when you connect the backup feature. It uses the <code>drive.file</code> scope to access files and folders that the app created in Drive or was individually granted. Google Drive authorization is handled separately from GitHub authorization.'
  };

  var STORE = 'gitpeeker-site-language';
  // 訪客選過就用選的；沒選過時，瀏覽器語言是中文就顯示繁體中文，其餘顯示英文
  function pickLocale() {
    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (error) {}
    if (saved === 'zh-Hant' || saved === 'en') return saved;
    return /^zh\b/i.test(navigator.language || '') ? 'zh-Hant' : 'en';
  }
  var locale = pickLocale();
  var english = locale === 'en';

  // 給頁面腳本用：回傳目前語言的字串，{0}、{1} 依序換成 values
  window.t = function (key, values) {
    var message = english && Object.prototype.hasOwnProperty.call(text, key) ? text[key] : key;
    return message.replace(/\{(\d+)\}/g, function (whole, index) { return values && values[index] != null ? values[index] : whole; });
  };

  function lookup(table, key) { return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : null; }

  function translatePage() {
    document.documentElement.lang = 'en';
    var title = lookup(text, document.title.trim());
    if (title !== null) document.title = title;
    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
      var found = lookup(html, element.innerHTML.trim());
      if (found !== null) element.innerHTML = found;
    });
    // 標了 lang 的元素（語言名稱）與整段替換過的元素不逐字翻
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    for (var node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.parentElement.closest('[lang]:not(html), [data-i18n-html], script, style')) nodes.push(node);
    }
    nodes.forEach(function (node) {
      var found = lookup(text, node.nodeValue.trim());
      if (found === null) return;
      var edges = node.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
      node.nodeValue = edges[1] + found + edges[2];
    });
    document.querySelectorAll('[aria-label], [title], meta[name="description"]').forEach(function (element) {
      ['aria-label', 'title', 'content'].forEach(function (name) {
        var found = element.hasAttribute(name) ? lookup(text, element.getAttribute(name).trim()) : null;
        if (found !== null) element.setAttribute(name, found);
      });
    });
  }
  if (english) translatePage();

  // 切換後記住選擇並重新載入，讓下載按鈕這些由腳本填的字一起換
  document.querySelectorAll('.lang button').forEach(function (button) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === locale));
    button.addEventListener('click', function () {
      if (button.dataset.lang === locale) return;
      try { localStorage.setItem(STORE, button.dataset.lang); } catch (error) {}
      location.reload();
    });
  });
})();
