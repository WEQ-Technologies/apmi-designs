/* =========================================================
   SHARED SITE FOOTER — used by design1.html & about.html
   Edit this file (and layout.css) to change the footer everywhere.

   Usage: <script src="/src/partials/footer.js"></script>
   ========================================================= */
(function(){
  var html =
    '<footer>' +
      '<div class="wrap">' +
        '<div class="footer-grid" data-reveal data-stagger>' +
          '<div class="footer-brand">' +
            '<img class="logo-img" src="/src/assets/images/apmi-logo.png" alt="APMI - Association of Portfolio Managers in India">' +
            '<p>Association of Portfolio Managers in India — the SEBI-recognised supervisory body for the portfolio management industry.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>About</h5>' +
            '<a href="/about">About APMI</a>' +
            '<a href="/about#charter">Charter</a>' +
            '<a href="/about#board">Board of directors</a>' +
            '<a href="/about#committees">Working committees</a>' +
            '<a href="/about#documents">Annual reports</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>Regulatory</h5>' +
            '<a href="#">SEBI circulars</a>' +
            '<a href="#">APMI circulars</a>' +
            '<a href="#">Consultation papers</a>' +
            '<a href="#">Compliance Sutra</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>Membership</h5>' +
            '<a href="#">Become a member</a>' +
            '<a href="#">Fee structure</a>' +
            '<a href="#">Distributor registration</a>' +
            '<a href="#">Member dashboard</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>Contact</h5>' +
            '<a href="#">Get in touch</a>' +
            '<a href="#">Portal help</a>' +
            '<a href="#">Grievance redressal</a>' +
            '<a href="#">LinkedIn</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div>&copy; 2026 APMI. All rights reserved.</div>' +
          '<div>' +
            '<a href="/src/assets/pdf/Terms-and-conditions/Privacy_policy_apmi.pdf" target="_blank" rel="noopener">Privacy notice</a>' +
            '<a href="/src/assets/pdf/Terms-and-conditions/Terms_of_use_apmi.pdf" target="_blank" rel="noopener">Terms of use</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  document.write(html);
})();
