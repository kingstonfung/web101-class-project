document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger-menu-wrapper').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-flyout-nav');
    if (mobileNav.className.match(/nav-opened/)) {
      mobileNav.className = 'mobile-flyout-nav';
    } else {
      mobileNav.className += ' nav-opened';        
    }

    const siteContainer = document.querySelector('.container');
    if (siteContainer.className.match(/nav-opened/)) {
      siteContainer.className = 'container';
    } else {
      siteContainer.className += ' nav-opened';        
    }
  });
});