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
		//THIS PAGE WOULD SHOW UP UNDERNEATH THE MAP ON THE MAPCOMPONENT. It would hold a brief summary of the barbershop businesses that have barbers chair memberships as well as those who aren't members.
		return(
			<div className="container">
			  <div className="contentContainer">
				<img src=""> 
				<p id="bizName"><p>
				<p id="address"></p>
			  </div>
			</div>
		)
	},
});