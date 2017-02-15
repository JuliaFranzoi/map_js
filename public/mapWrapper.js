var MapWrapper = function(coords, zoom, container){
   
   this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
   });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map:this.googleMap
    });
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {lat: event.latLng.lat(), lng:event.latLng.lng()}
      this.addMarker(position);//this is refering to fucntion event
    }.bind(this));

  },
  addInfoWindow: function(){
    var contentString = '<div> hello</div>';
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
      })
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      infoWindow.open(this.googleMap, marker);
    })

  }
}


