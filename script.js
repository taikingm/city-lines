/* global L */
var mapOne = L.map('mapOne').setView([35.709970, 139.733128], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 13,
    minZoom: 11,
  }).addTo(mapOne);
fetch('https://raw.githubusercontent.com/taikingm/SAVI780Final/master/allfiles/TokyoMetro.geojson')
  .then(function (response){
    return response.json();
  })
  .then(function (data){
  var lineInfo = L.geoJson(data);
    lineInfo.bindPopup(function (layer){
      return layer.feature.properties['Name (eng)']+ '<br> Created In: ' + layer.feature.properties['commencement'] + '<br> Number of Stations: ' + layer.feature.properties['stations'] + '<br> How long is the line? ' + layer.feature.properties['distant'] + 'km';
    });
    lineInfo.addTo(mapOne);
  });
var mapTwo = L.map('mapTwo').setView([48.853259,2.347954], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 13,
    minZoom: 11,
  }).addTo(mapTwo);
  fetch('https://raw.githubusercontent.com/taikingm/SAVI780Final/master/allfiles/ParisMetro.geojson')
    .then(function (response){
      return response.json();
    })
    .then(function (data){
    var lineInfo = L.geoJson(data);
    lineInfo.bindPopup(function (layer){
      return layer.feature.properties['name'] + '<br> Created In: ' + layer.feature.properties['Commencement'] + '<br> Number of Stations: ' + layer.feature.properties['Stations'] + '<br> How long is the line? ' + layer.feature.properties['Length'] + 'km';
    });
    lineInfo.addTo(mapTwo);
  });

var mapThree = L.map('mapThree').setView([31.237840, 121.463265], 12);
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 13,
    minZoom: 11,
  }).addTo(mapThree);
  fetch('https://raw.githubusercontent.com/taikingm/SAVI780Final/master/allfiles/ShanghaiMetro.geojson')
    .then(function (response){
      return response.json();
    })
    .then(function (data){
    var lineInfo = L.geoJson(data);
    lineInfo.bindPopup(function (layer){
      return layer.feature.properties['name'] + '<br> Created In: ' + layer.feature.properties['Commencement'] + '<br> Number of Stations: ' + layer.feature.properties['Stations'] + '<br> How long is the line? ' + layer.feature.properties['Length'] + 'km';
    });
    lineInfo.addTo(mapThree);
  });


var mapFour = L.map('mapFour').setView([40.725957, -73.975436], 12);
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 13,
    minZoom: 11,
  }).addTo(mapFour);
  fetch('https://raw.githubusercontent.com/taikingm/SAVI780Final/master/allfiles/NewYorkMetro.geojson')
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    var lineInfo = L.geoJson(data);
    lineInfo.bindPopup(function (layer){
      return layer.feature.properties['name'] + ' train<br> Created In: ' + layer.feature.properties['Commencement'] + '<br> Number of Stations: ' + layer.feature.properties['Stations'] + '<br> How long is the line? ' + layer.feature.properties['Length'] + 'km';
    });
    lineInfo.addTo(mapFour);
  });
