// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken = "pk.eyJ1IjoiMjc2MDkzM3oiLCJhIjoiY2xjcWFpeHUwMDB1eDNvcDBueGlzZmdtNCJ9.rrux8Oe7m-dpg8lESD67xw";

// Define a map object by initialising a Map from Mapbox
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: "mapbox://styles/2760933z/cld0bvajz003214qm0s568psn"
});

map.on("mousemove", (event) => {
   const dzone = map.queryRenderedFeatures(event.point, {
     layers: ["glasgow-simd"]
   });
   document.getElementById("pd").innerHTML = dzone.length
     ? `<h3>${dzone[0].properties.DZName}</h3><p>Rank: <strong>${dzone[0].properties.Percentv2}</strong> %</p>`
     : `<p>Hover over a data zone!</p>`;
});





map.on('load',() =>{
  
const layers = [
   "<10",
   "20 ",
   "30 ",
   "40 ",
   "50 ",
   "60 ",
   "70 ",
   "80 ",
   "90 ",
   "100"
 ];
 const colors = [
   "#67001f",
   "#b2182b",
   "#d6604d",
   "#f4a582",
   "#fddbc7",
   "#d1e5f0",
   "#92c5de",
   "#4393c3",
   "#2166ac",
   "#053061"
 ];
 
 // create legend
 const legend = document.getElementById("legend");
 
layers.forEach((layer, i) => {
   const color = colors[i];
const key = document.createElement("div");
//place holder
   key.className = "legend-key";
   key.style.backgroundColor = color;
   key.innerHTML = `${layer}`;
 
   legend.appendChild(key);
  
     if (i <= 1 || i >= 8) {
     key.style.color = "white";
   }
  
 });

 
  
  
  


map.addControl(
 new mapboxgl.GeolocateControl({
   positionOptions: {
     enableHighAccuracy: true
   },
   trackUserLocation: true,
   showUserHeading: true
 }),
 "top-left"
);

 
const geocoder = new MapboxGeocoder({
 // Initialize the geocoder
 accessToken: mapboxgl.accessToken, // Set the access token
 mapboxgl: mapboxgl, // Set the mapbox-gl instance
 marker: false, // Do not use the default marker style
 placeholder: "Search for places in Glasgow", // Placeholder text for the search bar
 proximity: {
   longitude: 55.8642,
   latitude: 4.2518
 } // Coordinates of Glasgow center
});
 
map.addControl(geocoder, "top-left")




  
  
  
  
  
  
  
  
  
});