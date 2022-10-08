//mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHp6ZW1iZXIiLCJhIjoiY2w4eWEwaTF1MGFmbjN2cDI4cGU1djFjYiJ9.HwVQ6bpWVO8wCEKsA2FC7A";

//creates new Map using mapbox library
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.091542, 42.358862],
  zoom: 12,
});

async function run() {
  // get bus data
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);
  
  //create realTime busMarker of all busses on route and add to map (using mapbox library mapboxgl)
  for (let i = 0; i < locations.length; i++) {
    let busMarker = new mapboxgl.Marker()
        .setLngLat([
        locations[i].attributes.longitude, 
        locations[i].attributes.latitude,
        ])
        .addTo(map);
    }
  // timer
  setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url); //await the data to be fetched
  const json = await response.json(); //extract the data from the response
  return json.data; //return the data to the calling function
}

run();
