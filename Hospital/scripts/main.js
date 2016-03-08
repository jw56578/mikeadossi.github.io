'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var NavComponent = require('./components/NavComponent');
var FooterComponent = require('./components/FooterComponent');
var HomeComponent = require('./components/HomeComponent');
var AboutComponent = require('./components/AboutComponent');
var ProgramsAndServicesComponent = require('./components/ProgramsAndServicesComponent');
var AdmissionsComponent = require('./components/AdmissionsComponent');
var ContactComponent = require('./components/ContactComponent');
var NewsAndEventsComponent = require('./components/NewsAndEventsComponent');
var SiteMapComponent = require('./components/SiteMapComponent');
var CareersComponent = require('./components/CareersComponent');
var SearchResultsComponent = require('./components/SearchResultsComponent');
var PhysiciansComponent = require('./components/PhysiciansComponent');

ReactDOM.render(
	 <NavComponent/>,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({ 

	routes: {
		'': 'home',
		'about':'aboutFunction',
		'programsAndServices':'programsAndServicesFunction',
		'admissions':'admissionsFunction',
		'contact':'contactFunction',
		'newsAndEvents':'newsAndEventsFunction',
		'siteMap':'siteMapFunction',
		'careers':'careersFunction',
		'searchResults':'searchResultsFunction',
		'physicians':'physiciansFunction'

	},
	home:function(){
		ReactDOM.render(
		 <HomeComponent/>,
		document.getElementById('app')
		);
	},
	aboutFunction:function(){
		ReactDOM.render(
		 <AboutComponent/>,
		document.getElementById('app')
		);
	},
	programsAndServicesFunction:function(){
		ReactDOM.render(
		 <ProgramsAndServicesComponent/>,
		document.getElementById('app')
		);
	},
	admissionsFunction:function(){
		ReactDOM.render(
		 <AdmissionsComponent/>,
		document.getElementById('app')
		);
	},
	contactFunction:function(){
		ReactDOM.render(
		 <ContactComponent/>,
		document.getElementById('app')
		);
	},
	newsAndEventsFunction:function(){
		ReactDOM.render(
		 <NewsAndEventsComponent/>,
		document.getElementById('app')
		);
	},
	siteMapFunction:function(){
		ReactDOM.render(
		 <SiteMapComponent/>,
		document.getElementById('app')
		);
	},
	careersFunction:function(){
		ReactDOM.render(
		 <CareersComponent/>,
		document.getElementById('app')
		);
	},
	searchResultsFunction:function(){
		ReactDOM.render(
		<SearchResultsComponent/>,
		document.getElementById('app')
		);
	},
	physiciansFunction:function(){
		ReactDOM.render(
		<PhysiciansComponent/>,
		document.getElementById('app')
		);
	}

});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<FooterComponent router={r} />,
	document.getElementById('footer')
);

console.log(FooterComponent)

$(document).ready(function(){

	r.on("route",function(data){
		$(document).scrollTop(0);
	})

})
