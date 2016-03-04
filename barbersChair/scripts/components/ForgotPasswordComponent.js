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
				<h1 className="headerH1">
					Forgotten Password
				</h1>
				<p>
					Forgot your password? No problem.
				</p>
				<p>
					Enter your account email address below and we will send you a way to change your password
				</p>
				<br/>
				<h4>
					Email Address
				</h4>
				<input className="input" placeholder="email address"></input>
				<br/>
				<br/>
				<button className="submitButton" type="button">Submit</button>
			  </div>
			</div>
		)
	},
});