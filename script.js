let startButtonOff = document.getElementById("start");

startButtonOff.addEventListener("click", () => {

    document.getElementById("start").disabled = true;
    document.getElementById("quit").disabled = false;

})

let startButtonRefresh = document.getElementById("quit");

startButtonRefresh.addEventListener("click", () => {

    document.getElementById("quit").disabled = true;
    document.getElementById("start").disabled = false;

})

let vermontPolygon = L.geoJSON(border_data);

let vermontBounds = vermontPolygon.getBounds();

let vermontCenter = vermontBounds.getCenter();

var map = L.map("map").setView(vermontCenter, 7);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');

vermontPolygon.addTo(map);

