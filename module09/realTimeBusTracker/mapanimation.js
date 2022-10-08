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

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');




async function run1() {
  // get bus data
  const locations = await getBusLocations1();
  console.log(new Date());
  console.log(locations);

  //console.log(locationsOld);

  //create realTime busMarker of all busses on route and add to map (using mapbox library mapboxgl)
  for (let i = 0; i < locations.length; i++) {
    let busMarker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([
        locations[i].attributes.longitude,
        locations[i].attributes.latitude,
      ]).addTo(map);
  }

  const span1 = document.getElementById('span1');
  span1.innerHTML = "   Currently are " + locations.length + " busses operating for route 1      "
  
  

 
  // timer
  setTimeout(run1, 15000);
}

async function run11() {
  // get bus data
  const locations = await getBusLocations11();
  console.log(new Date());
  console.log(locations);

  //console.log(locationsOld);

  //create realTime busMarker of all busses on route and add to map (using mapbox library mapboxgl)
  for (let i = 0; i < locations.length; i++) {
    let busMarker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([
        locations[i].attributes.longitude,
        locations[i].attributes.latitude,
      ]).addTo(map);
  }

  
  const span11 = document.getElementById('span11');
  span11.innerHTML = "   Currently are " + locations.length + " busses operating for route 1      "
  
  // timer
  setTimeout(run11, 15000);
}

// Request bus data from MBTA
async function getBusLocations1() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url); //await the data to be fetched
  const json = await response.json(); //extract the data from the response
  return json.data; //return the data to the calling function
}


async function getBusLocations11() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=11&include=trip";
  const response = await fetch(url); //await the data to be fetched
  const json = await response.json(); //extract the data from the response
  return json.data; //return the data to the calling function
}


