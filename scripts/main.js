const subscribeNewsletter = (evt) => {
  const email = document.querySelector("#newsletterEmail").value;
  const reservationPayload = { email };

  fetch("https://reqres.in/api/create", {
    body: JSON.stringify(reservationPayload),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector('.newsletter-wrapper form').className = 'hide';
      document.querySelector('.newsletter-thank-you').className = 'newsletter-thank-you';
      document.querySelector('.newsletter-thank-you').innerHTML += 'We will send updates to ' + data.email;
    })
    .catch(error => console.error(error));

  evt.preventDefault();
};

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

  document.querySelector('#submitForNewsletter').addEventListener('click', subscribeNewsletter);
});