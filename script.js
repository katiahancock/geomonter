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

console.log("Center IS:")
console.log({vermontCenter});

let map = L.map("map").setView([vermontCenter.lat, vermontCenter.lng], 7);

map.zoomControl.disable();
map.dragging.disable();
map.setMaxZoom(7);
map.setMinZoom(7);
console.log("Map IS:")
console.log({map})

vermontPolygon.addTo(map);

// Sets the map layer - specifically satellite, in this case.
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'

}).addTo(map);

let boundingBox = {
    maxLon: -73.3654,
    minLon: -71.5489,
    maxLat: 45.0065,
    minLat: 42.7395
};

let randomLon = 0;
let randomLat = 0;
let marker;

function setToRandom() {
    
    let loops = 0;

    while (leafletPip.pointInLayer([randomLon, randomLat], vermontPolygon).length === 0) {
        pickRandomPoint(); 
        console.log({loops});
        loops += 1;  
    }

    marker = L.marker([randomLat, randomLon]).addTo(map);
    let randomCoords = [randomLon, randomLat];
    console.log({randomCoords})

    return randomCoords
}

function pickRandomPoint () {
    randomLat = Math.random() * (boundingBox.maxLat - boundingBox.minLat) + boundingBox.minLat;
    randomLon = Math.random() * (boundingBox.maxLon - boundingBox.minLon) + boundingBox.minLon; 
}

function setCoords() {

    map.setView([randomLat, randomLon], 16);
    return map;
}

function latLonAreZero () {
    randomLat === 0 && randomLon === 0
}

let startButton = document.getElementById("start");

startButton.addEventListener("click", () => {

    map.setMaxZoom(16);
    map.setMinZoom(16);   
    // You wanted dragging? You did not get it. You poor bastard. 
    map.dragging.disable();

    if (!latLonAreZero()) {
        pickRandomPoint();
    }
    setToRandom();
    setCoords();
})
