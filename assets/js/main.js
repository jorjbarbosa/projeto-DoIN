var mymap = L.map('map').setView([-3.104891, -60.006464], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker([-3.104891, -60.006464]).addTo(mymap);
