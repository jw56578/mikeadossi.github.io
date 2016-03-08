'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


Parse.initialize("yxKGqSKGlbsCXEX90nf1lXX4Twfa1AtLniLZr5Yo", "FaM9upcr17VhQJ1Nxy43iAffUUiN5Ba4KZBscUb3");

var TemplateComponent = require('./components/TemplateComponent');
var NavigationComponent = require('./components/NavComponent');
var FooterComponent = require('./components/FooterComponent');
var HomeComponent = require('./components/HomeComponent');
var AboutComponent = require('./components/AboutComponent');
var ContactComponent = require('./components/ContactComponent');
var LogInComponent = require('./components/LogInComponent');
var SignUpComponent = require('./components/SignUpComponent');
var ForgotPasswordComponent = require('./components/ForgotPasswordComponent');
var MapComponent = require('./components/MapComponent');
var SelectedShopComponent = require('./components/SelectedShopComponent');
var BarbersPageComponent = require('./components/BarbersPageComponent');
var OwnersPageComponent = require('./components/OwnersPageComponent');
var OwnerSignUpComponent = require('./components/OwnerSignUpComponent');
var OwnerAccountComponent = require('./components/OwnerAccountComponent');
var BarberSignUpComponent = require('./components/BarberSignUpComponent');
var SetAppointmentComponent = require("./components/SetAppointmentComponent");
var OwnerAccountComponent = require("./components/OwnerAccountComponent");
var UserAccountComponent = require("./components/UserAccountComponent");
var EditOwnerAccountComponent = require("./components/EditOwnerAccountComponent");
var SchedulingComponent = require("./components/SchedulingComponent");
var ManagePersonnelComponent = require("./components/ManagePersonnelComponent");
var ManagePricingComponent = require("./components/ManagePricingComponent");
var StaffDetailsComponent = require("./components/StaffDetailsComponent");
var AddPersonnelComponent = require("./components/AddPersonnelComponent");
var ArduinoCommComponent = require("./components/ArduinoCommComponent");
var app = document.getElementById('app');

function refreshNav(){
	ReactDOM.render(
		 <NavigationComponent router={r} />,
		document.getElementById('nav')
	);
}
var Router = Backbone.Router.extend({ // represented below are the routes or the dynamic url names and the functions they trigger when they appear in our address bar. Below are the functions that when fired will render the Components from their locations in our directory as well as other things (such as the logInFunction).
	routes: {
		'': 'home',
		'example':'exampleFunction',  
		'about':'aboutFunction',
		'contact':'contactFunction',
		'logIn':'logInFunction',
		'signUp':'signUpFunction',
		'forgotPassword':'forgotPasswordFunction',
		'map/:zipcode':'mapFunction',
		'selectedShop':'selectedShopFunction',
		'barbersPage':'barbersPageFunction',
		'ownersPage':'ownersPageFunction',
		'ownerSignUp':'ownerSignUpFunction',
		'barberSignUp':'barberSignUpFunction',
		'logOut':'logout',
		'setappointment':'setAppointment',
		'ownerAccount':'ownerAccountFunction', 
		'userAccount':'userAccountFunction',
		'editOwnerAccount':'editOwnerAccountFunction',
		'scheduling':'schedulingFunction',
		'managePersonnel':'managePersonnelFunction',
		'managePricing':'managePricingFunction',
		'staffDetails/:id':'staffDetailsFunction',
		'addPersonnel':'addPersonnelFunction',
		'editPersonnel/:id':'editPersonnelFunction',
		'favoriteShop/:id':'favoriteShopFunction',
		'arduinoComm':'arduinoCommFunction'
	},
	setAppointment:function(){
		ReactDOM.render(<SetAppointmentComponent router={r}/>, app);
	},
	home:function(){
		ReactDOM.render(<HomeComponent router={r}/>, app);
	},
	exampleFunction:function(){
		ReactDOM.render(<TemplateComponent/>, app);	
	},
	aboutFunction:function(){
		ReactDOM.render(<AboutComponent/>, app);	
	},
	contactFunction:function(){
		ReactDOM.render(<ContactComponent/>, app);	
	},
	logInFunction:function(){
		ReactDOM.render(<LogInComponent loggedIn={refreshNav} router={r}/>, app); // Note we include a loggedIn attribute here that will refreshNav, this loggedIn attribute is used in our LogInComponent in our boiler plate code for every time we have a successful login. Successful log ins navigates users to home page AND triggers this attribute which refreshes the Nav.
	},
	signUpFunction:function(){
		ReactDOM.render(<SignUpComponent router={r} />, app);	// components can not see the router, or use the router instance we created on this page with variable name r, this is our way of passing into the SignUpComponent the instance or router in a variable named 'router'. So when on our SignUpComponent we try to navigate the user to any other page using router.navigate the user will be routed! 
	},
	forgotPasswordFunction:function(){
		ReactDOM.render(<ForgotPasswordComponent/>, app);	
	},
	mapFunction:function(zipcode){
		ReactDOM.render(<div></div>,app); // this code solves the problem of react ignoring our zipcode search in the navComponent. Everytime we're on the mapComponent page and use the navComponents find search bar the code above ensures that the page will render an empty div at first, to clear ay current map on the page, and then rerender whatever the url told it to, which would be a new zipcode/map.
		ReactDOM.render(<MapComponent zip={zipcode} router={r}/>, app);
	},
	selectedShopFunction:function(id){
		ReactDOM.render(<SelectedShopComponent barberShopId={id}/>, app);
	},
	favoriteShopFunction:function(id){
		ReactDOM.render(<SelectedShopComponent barberShopId={id}/>, app);
	},
	barbersPageFunction:function(){
		ReactDOM.render(<BarbersPageComponent/>, app);
	},
	ownersPageFunction:function(){
		ReactDOM.render(<OwnersPageComponent/>, app);
	},
	ownerSignUpFunction:function(){
		ReactDOM.render(<OwnerSignUpComponent router={r}/>, app);
	},
	barberSignUpFunction:function(){
		ReactDOM.render(<BarberSignUpComponent/>, app);
	},
	logout:function(){
		Parse.User.logOut(); // logout() is Parse specific
		this.navigate('', {trigger: true});
		refreshNav(); 
	},
	ownerAccountFunction:function(){
		ReactDOM.render(<OwnerAccountComponent/>, app);
	},
	editOwnerAccountFunction:function(){
		ReactDOM.render(<EditOwnerAccountComponent router={r}/>, app);
	},
	schedulingFunction:function(){
		ReactDOM.render(<SchedulingComponent/>, app);
	},
	managePersonnelFunction:function(){
		ReactDOM.render(<ManagePersonnelComponent/>, app);
	},
	managePricingFunction:function(){
		ReactDOM.render(<ManagePricingComponent/>, app);
	},
	staffDetailsFunction:function(id){
		ReactDOM.render(<StaffDetailsComponent id={id}/>, app);
	},
	addPersonnelFunction:function(){
		ReactDOM.render(<AddPersonnelComponent/>, app);
	},
	editPersonnelFunction:function(id){
		ReactDOM.render(<AddPersonnelComponent id={id}/>, app); // note we use the same component for oue Edit page!
	},
	arduinoCommFunction:function(id){
		ReactDOM.render(<ArduinoCommComponent/>, app); 
	}
});

var r = new Router();
Backbone.history.start();

r.on("route",function(route,params){
	$("body").scrollTop(0);
	refreshNav();
})

ReactDOM.render(
	 <NavigationComponent router={r} />,
	document.getElementById('nav')
);

ReactDOM.render(
	<FooterComponent router={r} />,
	document.getElementById('footer')
);





