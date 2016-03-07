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
			<div id="footerContainer">
				<p id="footerText">
					Copyright &copy; Mike Adossi, 2016
				</p>
			</div>
		)
	},
});