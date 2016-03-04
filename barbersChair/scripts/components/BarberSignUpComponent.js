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
				<h1 className="headerH1">Barber Sign Up</h1>
				<p>
				Thanks for Signing up to Barbers Chair!<br/>
				Please complete the following and we will get started.
				</p>
				    <h4>Enter name of your barbershop </h4>
				     <input ref="businessName" placeholder="Dan's Barber Shop"></input>
				      <hr/>
				       <h4>
							Business Street address
				       </h4>
				        <input ref="businessStreetAddress" placeholder="Dan's Barber Shop"></input>
				        <h4>
							City
				        </h4>
				         <input ref="businessCity"></input>
				          <h4>
							 State
				    	  </h4>
				          <input ref="businessState"></input>
				            <h4>
							 Zip Code
				            </h4>
				          <input ref="businessZipCode"></input>
				           <hr/>
				             <h4>Business Phone Number</h4>
				<input ref="businessPhone" placeholder="###-###-####"></input>
				<h4>Business email</h4>
				<p>This email address will replace any email address you might have given on the prior page.</p>
				<p>It will be the primary contact email address shown to users on the site.</p>
				<input ref="businessEmail" placeholder="business email address"></input>
				<br/>
				<br/>
				<button onClick={this.barberSignUp} className="submitButton" ref='btnSignUp' type="button">Submit</button>
			  </div>
			</div>
		)
	},
	barberSignUp:function(){
		// ??? Question is should barbers have their own data model or should they share the same model as the owners? if they share a model there would have to be a new 'userType' column introduced to identify owners from barbers! 
		// ??? how easily would I be able to attach barbers to their businesses or their owners if we had the same data model or different data models.
		this.refs.btnSignUp.disabled = true;
		
		var businessName = this.refs.businessName.value;
		var businessStreetAddress = this.refs.businessStreetAddress.value;
		var businessCity = this.refs.businessCity.value;
		var businessState = this.refs.businessState.value;
		var businessZipCode = this.refs.businessZipCode.value;
		var businessPhone = this.refs.businessPhone.value;
		var businessEmail = this.refs.businessEmail.value;

		var BarberShop = Parse.Object.extend("BarberShop"); 
		var barberShop = new BarberShop();
		barberShop.save(
		{
			name:businessName,
			streetAddress:businessStreetAddress,
			city:businessCity,
			state:businessState,
			zip:businessZipCode,
			phone:businessPhone,
			email:businessEmail,
			owner:Parse.User.current() 
		}
			).then(function(){

		});

	}
});