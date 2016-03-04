'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize("CKo05MhMwPBIhtDVEPXIkPSdbEgeP66R6nm2HUjm", "DTN20m4e87Tffl5XmCXAjRMphFlikfqNhmTyU3Bq");

var RegisterComponent = require('./components/RegisterComponent');
var NavigationComponent = require('./components/NavigationComponent');
var LoginComponent = require('./components/LoginComponent');
var QuizListComponent = require('./components/QuizListComponent');
var CreateQuizComponent = require('./components/CreateQuizComponent');
var EditQuizComponent = require('./components/EditQuizComponent');
var PostQuestionComponent = require('./components/PostQuestionComponent');
var AttendanceComponent = require('./components/AttendanceComponent');
var QuizResultsComponent = require('./components/QuizResultsComponent');
var HomeComponent = require('./components/HomeComponent');
var ClassAnalyticsComponent = require('./components/ClassAnalyticsComponent');
var DashboardComponent = require('./components/DashboardComponent');
var StudentAnalyticsComponent = require('./components/StudentAnalyticsComponent');
var QuizDetailsComponent = require('./components/QuizDetailsComponent');
var CreateCohortComponent = require('./components/CreateCohortComponent');
var FooterComponent = require('./components/FooterComponent');
var CreditsComponent = require('./components/CreditsComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register',
		'cohortRegister/:id': 'cohortRegister',
		'quizList': 'quizList',
		'createQuiz': 'createQuiz',
		'editQuiz/:id':'editQuiz',
		'editQuiz/:id/postQuestion':'postQuestion',
		'logout': 'logout',
		'classAnalytics': 'classAnalytics',
		'quizResults/:userId/:quizId': 'quizResults',
		'studentAnalytics': 'studentAnalytics',
		'quizDetails/:id':'quizDetailsPage',
		'attendance': 'attendance',
		'createCohort': 'createCohort',
		'credits': 'credits'
	},
	quizDetailsPage: function(id){
		ReactDOM.render(<QuizDetailsComponent quizId={id} name={"hell"} stuf={"whatever"}/>, app);
	}, // Above we send DYNAMIC information into the Component upon rendering! React maniputes the DOM and enters in data using the special React syntax {id}. The route handles pulling the id from the address bar and pulling it into the variable {id}, so when on the quizList page you click the button titled 'takeQuiz', the anchor tag on the button changes whats in the address bar. When the address bar changes nothing happens, HOWEVER the backbone router listens for the any address bar changes, and when there is a change our router TRIGGERS a function, the router does NOT simply send users to another page, the function would have to do that. In our quizDetails function we then pass in the unique {id} and then we display the Component.  
	createCohort: function() {
		var currentUser = Parse.User.current();
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<CreateCohortComponent router={r}/>, app)
		} else {
			ReactDOM.render(<a className="moveAlong404"href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a>, app);
		}
	},
	home: function() {
		ReactDOM.render(<HomeComponent />, app);
	}, // this function does NOT need a {r} or {id} or any other data because it's only showing static html content.
	login: function() {
		ReactDOM.render(<LoginComponent router={r} />, app);
	}, // this function above uses the {r} reference because it wants to reroute users back to another page, ex- the Home page.
	register: function() {
		ReactDOM.render(<RegisterComponent router={r} />, app);
	},
	cohortRegister: function(cohortId) {
		ReactDOM.render(<RegisterComponent router={r} cohortId={cohortId} />, app);
	},
	createQuiz: function() {
		var currentUser = Parse.User.current();
		console.log('post question',currentUser.id);
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<CreateQuizComponent router={r}/>, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	editQuiz:function(id){
		var currentUser = Parse.User.current();
		console.log('post question',currentUser.id);
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<EditQuizComponent quizId={id} router={r}/>, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	postQuestion: function(id) {
		var currentUser = Parse.User.current();
		console.log('post question',currentUser.id);
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<PostQuestionComponent quizId={id} router={r}/>, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	quizResults: function(userId, quizId) {
		var currentUser = Parse.User.current();
		if(currentUser) {
			ReactDOM.render(<QuizResultsComponent userId={userId} quizId={quizId} router={r} />, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	logout: function() {
		Parse.User.logOut();
		this.navigate('', {trigger: true});
	},
	attendance: function() {
		var currentUser = Parse.User.current();
		if(currentUser.get('teacher')) {
			ReactDOM.render(<AttendanceComponent/>, app);
		} else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	quizList: function() {
		var currentUser = Parse.User.current();
		if(currentUser) {
			ReactDOM.render(<QuizListComponent />, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	classAnalytics: function() {
		var currentUser = Parse.User.current();
		console.log('post question',currentUser.id);
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<ClassAnalyticsComponent router={r}/>, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	studentAnalytics: function() {
		var currentUser = Parse.User.current();
		console.log('post question',currentUser.id);
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<StudentAnalyticsComponent />, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	dashboard: function() {
		var currentUser = Parse.User.current();
		if(currentUser && currentUser.get('teacher') === true) {
			ReactDOM.render(<DashboardComponent />, app);
		}
		else {
			ReactDOM.render(<div className="moveAlong404"><a href=""><img src="images/move-along-404.jpg"/><p>Moving Along</p></a></div>, app);
		}
	},
	credits: function() {
		ReactDOM.render(<CreditsComponent />, app);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);

ReactDOM.render(
	<FooterComponent router={r} />,
	document.getElementById('footer')
);
