// The start button is disabled when you click on it!
let startButtonOff = document.getElementById("start");

startButtonOff.addEventListener("click", () => {

    document.getElementById("start").disabled = true;
    document.getElementById("quit").disabled = false;

})

// When you click the "I give up" button, the start button is enabled again!
let startButtonRefresh = document.getElementById("quit");

startButtonRefresh.addEventListener("click", () => {

    document.getElementById("quit").disabled = true;
    document.getElementById("start").disabled = false;

})

// The polygon shape that defines Vermont, but leaves out a couple of NH-border towns.
let vermontPolygon = L.geoJSON(border_data);

let vermontBounds = vermontPolygon.getBounds();

let vermontCenter = vermontBounds.getCenter();

// var map = L.map("map").setView(vermontCenter, 16.5); - was supposed to set the view so I can see the whole polygon, but not necessary for game overall.

// Sets the map layer - specifically satellite, in this case.
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {

    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'

}).addTo(map);

// Adding the Vermont polygon to the map itself!
vermontPolygon.addTo(map);

let boundingBox = {
    maxLon: -73.3654,
    minLon: -71.5489,
    maxLat: 45.0065,
    minLat: 42.7395
};

// Set map zoom - to give them hope, muahahahaha
map.setMaxZoom(18);
map.setMinZoom(16);

// You wanted dragging? You did not get it. You poor bastard.
map.dragging.disable();