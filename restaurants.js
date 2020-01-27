$.getJSON("https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json", function(data) {
	const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');
	const lon = urlParams.get('lon');
	const lat = urlParams.get('lat');
    console.log(data.restaurants)
    
    let restaurants = data.restaurants.filter( function(r) {
    	return r.name.toLowerCase().includes(keyword.toLowerCase()) & getDistanceFromLatLonInKm(lat, lon, r.location[1], r.location[0])
    })
    $('#json').append(JSON.stringify(restaurants, null, 4))
    console.log(restaurants)
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}