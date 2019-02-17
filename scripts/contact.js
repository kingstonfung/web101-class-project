function initMap () {
  const coffeeShop = {
    lat: 53.541107,
    lng: -113.501928
  };

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 16,
      center: coffeeShop
    }
  );

  const marker = new google.maps.Marker(
    {
      position: coffeeShop,
      map: map
    }
  );
}