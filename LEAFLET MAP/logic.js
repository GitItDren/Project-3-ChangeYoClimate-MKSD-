// Creating our initial map object with the desired configurations:
let map = L.map("map", {
  center: [20, 0], // Initial position
  zoom: 2,         // Initial zoom level
  minZoom: 2,      // Minimum zoom level
  maxZoom: 3,      // Maximum zoom level (same as minZoom, so zooming is effectively disabled)
  zoomControl: false  // Remove the zoom UI from the map
});

// Adding a tile layer (the background map image) to our map:
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

// Disable mouse/touch interactions for zooming
map.touchZoom.disable();
map.doubleClickZoom.disable();

// Fetch the GeoJSON file and then add to the map
fetch('World_Continents.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'black',
                weight: 2,
                fillOpacity: 0.3, // Set some fill opacity to see the continents
                fillColor: '#EFEFEF' // Fill color
            }
        }).addTo(map);
    });

    // Define the geographical bounds the map will be restricted to
let southWest = L.latLng(-90, -180);
let northEast = L.latLng(90, 180);
let bounds = L.latLngBounds(southWest, northEast);

// Set the max bounds
map.setMaxBounds(bounds);