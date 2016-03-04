//include all the things you need to use
var React = require('react');
var googleMapTools = require('../services/googlemaptools'); // we require in our module in which we created several useful functions!
//var QuizModel = require('../models/QuizModel');
//var StudentAnswerModel = require('../models/StudentAnswerModel');
//var QuestionModel = require('../models/QuestionModel');
//var _ = require('backbone/node_modules/underscore');
//var moment = require('moment');



module.exports = React.createClass({
	getInitialState: function(){
		return{
			
		}
	},
	getBarbers:function(){
		var self = this;
		var query= new Parse.Query("BarberShop");
		query.find({
			success:function(shops){
				self.setState({myBarbers:shops});
			}

		});
	},
	componentDidMount:function(){
		var myZipCode = this.props.zip;
        var self = this;
        // Below is one of several very important data flow type concepts you'll have to master. This is a modularity concept, everything is borken down into its simplest form and is used and reused when needed. We required the googleMapTools above into our MapComponent because we need a function we created in it, that function is the getLocationFromAddress(), and when we use it below we pass in 2 arguments in place of the parameters in our original function. 
		googleMapTools.getLocationFromAddress(myZipCode,function(results){
	        var mapOptions = {
	          center: results[0].geometry.location,
	          zoom: 15
	        };
	        window.map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	        googleMapTools.findPlacesByText(window.map,myZipCode, 'barber',function(businesses){ // we give our variable a name of businesses.
	        	self.setState({barberz:businesses}); // we give the businesses value a new name as we set State. setState is react specific and everythng we set state we rerender the page.
	         	self.getBarbers();
	         });
		});

		 
	},
	componentWillMount: function() {
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	chooseBarberShops:function(barberShop){
		// empty function that would send users to the next page after clicking 'View'
		// (Step #2 in sending data) Components can't talk to one another, so we put our object (the one specific barbershop we want) on the window object to make the object globally accessible. Now on to the next component to pull the data object down.
		window.currentBarberShop = barberShop;
		this.props.router.navigate("selectedShop",{trigger:true});
	},

	// ******This code doesn't work, why? ********
	// refreshMap:function(){
	// 	var mapZip = this.refs.mapZipCode.value;
	// 	this.props.router.navigate('map/'+mapZip,{trigger:true});
	// },

	render: function(){
		var _this = this;
		var barberList = "";
		if(this.state.barberz){ // Note- We're checking at first if this state has any value(s) to loop through. The if statement code ultimately helps us target the individual barber shops printed to the screen by creating a new loop, the map loop, below. The map loop is unrelated to googleMaps. We find every single location and we make a div for every single location.
			barberList = this.state.barberz.map(function(barberShop){
				var check = false;
				if(_this.state.myBarbers){
					_this.state.myBarbers.forEach(function(b){
						if(b.get("name") == barberShop.name){
							check = true;
						}
					});

				}
				// (Step #1 in sending data to selectedShopComponent) the click below calls the function chooseBarberShops().
				if(check){
					return (

						<div onClick={_this.chooseBarberShops.bind(this,barberShop)} className="barberSections">
							{barberShop.name}
							<a href={'#selectedShop/' + barberShop.id}> - View</a>
							{check}
						</div>

						)
				}else{
					return (

						<div  className="barberSections">
							{barberShop.name}

						</div>

						)
				}
			})

		}
		//this is where you will put the html to make the page look how you want
				// <span id="searchStates">
				// 	<p> Search for local Barbershops: <br/>
				// 	<input ref="mapZipCode" className="input" placeholder="enter your zipcode"></input><span><button onClick={this.refreshMap} className= "spacedButton findButton" type="submit">Find</button></span>
				// 	</p>
				// </span>
		return(
			<div className="container">
			  <div className="contentContainer">
			  	<h1 className="headerH1">
					Barber Shops in Area
				</h1>
				<div id="map-canvas"></div>
				{barberList}
			  </div>
			</div>
		)
	},
});
	      
