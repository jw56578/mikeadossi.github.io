module.exports = {

getLocationFromAddress:function(address,done){ // our argument'done' is just a variable that will receive in it a function, the function is taken from the MapComponent 
	var geocoder  = new google.maps.Geocoder(); // we need the Geocoder blueprint which will travel to the google servers and get info we need with help of our function
	var argument1 = { 'address': address}; // our created object must have a property called 'address'
	var functionToCallWhenDone = function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        done(results);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }; // Remember up till this point we've only just created variables, the code below performs the first action in this function.

   geocoder.geocode( argument1, functionToCallWhenDone); 
 },
  putInfoWindowOnMarker :function(marker,html){ // (InfoW #2) our content data (or html code) is passed into this function inside the second parameter, so in a way content is being renamed as html here.
  
  var infowindow = new google.maps.InfoWindow({content: html}); // (InfoW #3) content as its used here is GOOGLE SPECIFIC, it must say content.

 //infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
 
  // assuming you also want to hide the infowindow when user mouses-out
  google.maps.event.addListener(marker, 'mouseout', function() {
     infowindow.close();
  });
},
addMarker:function(map,location,content,barberShop){ // (InfoW #4) Here we continue using the same html data in our third passed in argument. // (routing #2)- here we pass in barberShop as a fourth parameter, and this represents the business object. This business object will help us identify the specific identity of the business without us needing to know its ID.
  
  var marker = new google.maps.Marker({
          position: location,
          map: map,
           icon: 'http://icons.iconarchive.com/icons/matthew-kelleigh/mac-town-vol3/32/Barber-shop-icon.png'
        });  
        //markers.push(marker);
        
        //do something when the marker is clicked on 
        google.maps.event.addListener(marker, 'click', markerClicked);
        function markerClicked(){
         //do something else besides showing the info window
         window.currentBarberShop = barberShop; // (routing #3)- Here we use the window object. The window object can be used as a global storage, so we give the window object the property and a value, and we'll be able to use this combination later on.
         window.location.href = '#selectedShop'; // (routing #4)- Here we finalize our function so in the end our browser listens for a click on the marker and once it hears a click it changes the url and then the router triggers the function and the function sends user to the appropriate page. IN NORMAL JAVASCRIPT this "window.location.href = '#selectedShop'" is the usual way to change the url, remember that all this line of code does is change the address bar, it's up to the router we set up to send the user to a component page or anything else. // Note that this is the usual pure JS way of changing the url, this: this.props.router.navigate('', {trigger: true}), would be the backbone way of doing the exact same thing. Just two different ways of doing the same thing. 
        }
      
        this.putInfoWindowOnMarker(marker,content); 
  return marker;
  
},
zoomMaptoFitAllMarkers:function(markers,map){
  
  var bounds = new google.maps.LatLngBounds();
  for(var i=0;i<markers.length;i++) {
   bounds.extend(markers[i].getPosition());
  }
  
  map.fitBounds(bounds);
},
 findPlacesByText:function(map, address, text,done){ 
  
  this.getLocationFromAddress(address,function(loc){
    
     var request = { 
      location: loc[0].geometry.location,
      radius: '5000',
      query:text
    };
  
    var placesService = new google.maps.places.PlacesService(map); // this is a google Tool that does a lot of important work for us.
    placesService.textSearch(request,whatever); // The request is the info we need from google. The textSearch() allows you to search for any word.
    
    
  })
 	var self = this;
  
  function whatever(results, status) { 
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var businesses = results.map(function(b){
        return {id:b.id,name:b.name,address:b.formatted_address};
      });
      done(businesses);
      var markers = [];
      for (var i = 0; i < results.length; i++) { // results is an ARRAY!
        var business = results[i]; // we put inside our variable the indexed parts of our array
        var name = business.name; // we put the names of the businesses and put them in a variable
        var address = business.formatted_address; // we get the address into a variable
        
        var content = '<div>' + name + '</div><div>' + address + '</div>'; 
        
        var marker = self.addMarker(map,business.geometry.location,content,businesses[i]); // (routing #1- sending user by onclick of marker to selectedShops page) We currently don't know how to use the id to send user to next page using id. Here we include the specific business object as we loop through results.
        markers.push(marker);
      }
      self.zoomMaptoFitAllMarkers(markers,map);
    }
  }
  
}

}  