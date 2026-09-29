/* =========================================================
   SHARED SITE HEADER — used by index.html & about.html
   Edit this file (and layout.css) to change the header everywhere.

   Usage:
   <script src="/src/partials/header.js" data-active="home"></script>
   data-active: "home" (home page) or "about" — controls which
   nav link gets the "active" state and whether in-page section
   links point to "#section" (on the home page itself) or "/#section".
   ========================================================= */
(function(){
  var thisScript = document.currentScript;
  var active = (thisScript && thisScript.getAttribute('data-active')) || 'home';
  var isHome = active === 'home';
  var prefix = isHome ? '' : '/';
  var aboutActive = active === 'about' ? ' class="active"' : '';

  var html =
    '<div class="utility">' +
      '<div class="wrap utility-row">' +
        '<div class="utility-links">' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/login.htm" target="_blank" rel="noopener">Member Login</a>' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/DistributorLogin.htm" target="_blank" rel="noopener">Distributor Login</a>' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/Registration.htm?action=registration" target="_blank" rel="noopener">Member Registration</a>' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/DistributorOnBoarding.htm?action=nismconsentregister" target="_blank" rel="noopener">Distributor Registration</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<header id="site-header">' +
      '<div class="wrap header-row">' +
        '<a class="logo" href="/">' +
          '<img class="logo-img" src="/src/assets/images/apmi-logo.png" alt="APMI - Association of Portfolio Managers in India">' +
        '</a>' +
        '<nav class="primary">' +
          '<a href="/about"' + aboutActive + '>About Us</a>' +
          '<a href="' + prefix + '#regulatory">Regulatory &amp; Circulars</a>' +
          '<a href="' + prefix + '#membership">Membership</a>' +
          '<a href="#">Compliance &amp; NISM</a>' +
          '<div class="nav-dropdown">' +
            '<a href="' + prefix + '#reports">Reports &amp; Insights <svg class="caret" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
            '<div class="dropdown-menu">' +
              '<div class="dropdown-menu-inner">' +
                '<a href="https://insights.apmiindia.org/dashboard" target="_blank" rel="noopener">APMI Insights</a>' +
                '<a href="https://www.apmiindia.org/apmi/welcomeiaperformance.htm?action=PMSmenu" target="_blank" rel="noopener">IA Performance Report</a>' +
                '<a href="https://www.apmiindia.org/apmi/IATurnoverReportUtility.htm?action=loadIATurnoverPage" target="_blank" rel="noopener">IA Turnover Report</a>' +
                '<a href="https://www.apmiindia.org/apmi/IACompare.htm?action=iacomaprepage" target="_blank" rel="noopener">IA Comparison Report</a>' +
                '<a href="https://www.apmiindia.org/apmi/WSIAConsolidateReport.htm?action=showReportMenu" target="_blank" rel="noopener">Consolidated IA Performance Report</a>' +
                '<a href="https://www.apmiindia.org/apmi/pmsdistributordetailsweb.htm" target="_blank" rel="noopener">APRN Holder Details</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<a href="' + prefix + '#events">Events</a>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<div class="lang-toggle" role="group" aria-label="Language">' +
            '<button type="button" class="lang-btn active" data-lang="en">EN</button>' +
            '<button type="button" class="lang-btn" data-lang="hi">HIN</button>' +
          '</div>' +
          '<button type="button" class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">' +
            '<span class="menu-toggle-bar"></span><span class="menu-toggle-bar"></span><span class="menu-toggle-bar"></span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</header>';

  document.write(html);

  var langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      langBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  /* ---- mobile hamburger menu ---- */
  var menuToggle = document.querySelector('.menu-toggle');
  var navPrimary = document.querySelector('nav.primary');
  var navDropdown = document.querySelector('.nav-dropdown');
  var navDropdownToggle = navDropdown && navDropdown.querySelector(':scope > a');
  var siteHeader = document.getElementById('site-header');

  function closeMobileMenu(){
    if(navPrimary) navPrimary.classList.remove('mobile-open');
    if(menuToggle){ menuToggle.classList.remove('active'); menuToggle.setAttribute('aria-expanded', 'false'); }
    if(navDropdown) navDropdown.classList.remove('dropdown-open');
    if(siteHeader) siteHeader.classList.remove('menu-open');
  }

  if(menuToggle && navPrimary){
    menuToggle.addEventListener('click', function(){
      var open = navPrimary.classList.toggle('mobile-open');
      menuToggle.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if(siteHeader) siteHeader.classList.toggle('menu-open', open);
      if(!open && navDropdown) navDropdown.classList.remove('dropdown-open');
    });
  }

  if(navDropdownToggle && navDropdown){
    navDropdownToggle.addEventListener('click', function(e){
      if(window.innerWidth <= 980){
        e.preventDefault();
        navDropdown.classList.toggle('dropdown-open');
      }
    });
  }

  if(navPrimary){
    navPrimary.querySelectorAll('a').forEach(function(a){
      if(a === navDropdownToggle) return;
      a.addEventListener('click', closeMobileMenu);
    });
  }

  window.addEventListener('resize', function(){
    if(window.innerWidth > 980) closeMobileMenu();
  });
})();
