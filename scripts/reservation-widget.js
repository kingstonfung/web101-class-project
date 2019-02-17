const toggleReservationWidget = () => {
  const mobileNav = document.querySelector('.flyout-reservation-form');
  if (mobileNav.className.match(/active/)) {
    mobileNav.className = 'flyout-reservation-form';
  } else {
    mobileNav.className += ' active';
  }

  const siteContainer = document.querySelector('.container');
  if (siteContainer.className.match(/active/)) {
    siteContainer.className = 'container';
  } else {
    siteContainer.className += ' active';        
  };
};

const generateDaysDropdownSelection = () => {
  const oneDayInMilliseconds = 86400000;
  let day;
  let dayObj;
  let dayLabel;
  let optionElement;
  for (let i = 1; i < 6; i++) {
    day = +new Date() + (i * oneDayInMilliseconds);
    dayObj = new Date(day);
    dayLabel = dayObj.toString().substr(0, 10);
    optionElement = document.createElement('option');
    optionElement.value = dayLabel;
    optionElement.text = dayLabel;
    document.querySelector('.day-selector').appendChild(optionElement);
  }
}

const submitReservation = () => {
  const headCount = document.querySelector("#headCountSelector").value;
  const day = document.querySelector("#daySelector").value;
  const time = document.querySelector("#timeSelector").value;
  const email = document.querySelector("#reservationEmail").value;
  const reservationPayload = {headCount, day, time, email };

  fetch("https://reqres.in/api/create", {
    body: JSON.stringify(reservationPayload),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector('#reservationForm').className = 'hide';
      document.querySelector('.reservation-widget .thank-you').className = 'thank-you';
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.dot-button').addEventListener('click', toggleReservationWidget);
  document.querySelector('.flyout-reservation-form .close-button').addEventListener('click', toggleReservationWidget);
  generateDaysDropdownSelection();

  document.querySelector('.submit-reservation').addEventListener('click', submitReservation);
});

