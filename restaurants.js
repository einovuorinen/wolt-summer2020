var restaurants = [];
$.getJSON("https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json", function(json) {
    restaurants = json;
    console.log(restaurants); 
});

const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');
const lonlat = [urlParams.get('lon'), urlParams.get('lat')];

console.log(keyword);
console.log(lonlat)