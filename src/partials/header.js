/* =========================================================
   SHARED SITE HEADER — used by design1.html & about.html
   Edit this file (and layout.css) to change the header everywhere.

   Usage:
   <script src="/src/partials/header.js" data-active="design1"></script>
   data-active: "design1" (home page) or "about" — controls which
   nav link gets the "active" state and whether in-page section
   links point to "#section" (on design1 itself) or "/design1#section".
   ========================================================= */
(function(){
  var thisScript = document.currentScript;
  var active = (thisScript && thisScript.getAttribute('data-active')) || 'design1';
  var isHome = active === 'design1';
  var prefix = isHome ? '' : '/design1';
  var aboutActive = active === 'about' ? ' class="active"' : '';

  var html =
    '<div class="utility">' +
      '<div class="wrap utility-row">' +
        '<div class="utility-links">' +
          '<a class="utility-btn" href="https://www.apmiindia.org/apmi/DistributorLogin.htm" target="_blank" rel="noopener">Distributor Login</a>' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/Registration.htm?action=registration" target="_blank" rel="noopener">Member Registration</a>' +
          '<a class="utility-btn utility-btn-accent" href="https://www.apmiindia.org/apmi/DistributorOnBoarding.htm?action=nismconsentregister" target="_blank" rel="noopener">Distributor Registration</a>' +
        '</div>' +
        '<div class="lang-toggle" role="group" aria-label="Language">' +
          '<button type="button" class="lang-btn active" data-lang="en">EN</button>' +
          '<button type="button" class="lang-btn" data-lang="hi">HIN</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<header id="site-header">' +
      '<div class="wrap header-row">' +
        '<a class="logo" href="/design1">' +
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
          '<a class="btn-primary" href="https://www.apmiindia.org/apmi/login.htm" target="_blank" rel="noopener">Member login</a>' +
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
})();
