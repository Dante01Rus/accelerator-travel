import leaflet from '../../vendor/leaflet';

let map = document.querySelector('.contacts__map');


if (map) {
  let map = L.map('map').setView([55.7753572, 37.6300319], 17);
  let d2gIcon = L.icon({
    iconUrl: './img/sprite.svg#pin-filled',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });
  let marker = L.marker([55.7753572, 37.6300319], {icon: d2gIcon}).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?{foo}', {foo: 'bar'}).addTo(map);
}

