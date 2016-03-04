//include all the things you need to use
var React = require('react');
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
	componentWillMount: function() {
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	render: function(){
		var _this = this;
		//this is where you will put the html to make the page look how you want
		return(
			<div className="container">
				<div className="contentContainer">
					<h1 className="headerH1">About</h1>
					<p className="text">
					<p className="homeSection">
					Barbers Chair makes it easy for users to cut down on wait time at their favorite barber shops and allows for free and convenient scheduling in real time. 
					</p>
				<h4 className="titleH4">Introducing HOT SEAT</h4>
				<p className="homeSection">
					HOT SEAT, Barber Chairs unique feature that displays the occupied barber chairs and waiting chairs at your favorite shop in real time. With BarberChairs pressure sensor technology barbershops can display how many seats are occupied and how many customers are in queue for a haircut at any given time of day, giving you, the potential customer, a peek into how busy a barbershop is right from your internet connected device.
				</p>
				<h4 className="titleH4">Scheduling that benefits owners and customers</h4>
				<p className="homeSection">
					With our website owners can handle their appointments through the website as well as set work schedules that automatically sync up with Barber Chairs HOT SEAT feature to show users when their favorite barber is available days before the visit or even seconds before.
				</p>
					</p>
					<p className="text">Designed by Mike Adossi</p>
				</div>
			</div>
		)
	},
});