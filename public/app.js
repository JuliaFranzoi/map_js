var initialize = function(){
  var center = {lat: 51.5074, lng: -0.1278};
  var zoom = 10;
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoom, container);
  mainmap.addMarker(center);
  mainmap.addClickEvent();
  mainmap.addInfoWindow();
}

window.onload = initialize;