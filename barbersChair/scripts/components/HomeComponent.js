//include all the things you need to use
var React = require('react');
var Backbone = require('backbone');
//var QuizModel = require('../models/QuizModel');
//var StudentAnswerModel = require('../models/StudentAnswerModel');
//var QuestionModel = require('../models/QuestionModel');
//var _ = require('backbone/node_modules/underscore');
//var moment = require('moment');
window.Backbone =Backbone;
module.exports = React.createClass({
	getInitialState: function(){
		return{
			
		}
	},
	componentWillMount: function() {
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	goToMap:function(){
		var zip = this.refs.txtZipcode.value;
		this.props.router.navigate('map/' + zip,{trigger:true});
		//change the url
	},
	render: function(){
		var _this = this;
		//this is where you will put the html to make the page look how you want
		var zipInput = "";
		

			zipInput = (<div className="inputContainer">
					<input ref="txtZipcode" className="input" value="78704"></input><span><a href="/#map">
				
				<button onClick={this.goToMap} className= "spacedButton findButton" type="submit">Find</button></a></span>
				</div>)
		
		return(
			<div>
			<div className="emptyDiv"></div>
			  <div className=" homePageImg">
				  	<div className="callToActionText">
						<h1 className="headerH1 homeH1">Eliminate BarberShop Wait Time!</h1>
						<h4 className="subheaderH4">With Barbers Chair waiting for an empty chair is a thing of the past.</h4>
						<h4 className="subheaderH4">Find a Barbers Chair barbershop near you</h4>
						{zipInput}	
					</div>
			  </div>
			  </div>
		)
	},
});