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
	// Our first code here checks to see if the user visiting the page is NOT the current user, meaning he might have entered the url to this page manually, if he is not the current user and you the programmer want to stay on the same page you would have to use setState (to be dynamic!) and setState to an errorMessage. In our render id the state is errorMessage, or has an errorMessage then it will return a div.
		if(!Parse.User.current()){
			this.setState({errorMessage:'you cannot be here'}); 

		}
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	render: function(){
		var _this = this; // what was the point of using _this ???
		if(this.state.errorMessage){
			return <div id="errorMsg">
				{this.state.errorMessage}
			</div>
		}
		//this is where you will put the html to make the page look how you want. 
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1 className="headerH1">Owner Sign Up</h1>
				<p>
				Thanks for Signing up to Barbers Chair!<br/>
				Please complete the following and we will get started.
				</p>
				    <h4>Enter your Businesses Name</h4>
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
				<p>This email address will replace any email address you might have given on the prior page.</p><br/>
				<p>It will be the primary contact email address shown to users on the site.</p>
				<input ref="businessEmail" placeholder="business email address"></input>
				<br/>

				<button ref='btnSignUp' onClick={this.ownerSignUp} type="button">Submit</button>
			  </div>
			</div>
		)
	},
	ownerSignUp:function(){ // this functin is called with Reacts BIZARRE event handling onClick code placed on the button above.
		this.refs.btnSignUp.disabled = true; // this code fires so our user can't create multiple entries into our database by clicking the submit button multiple times.
		var businessName = this.refs.businessName.value;
		var businessStreetAddress = this.refs.businessStreetAddress.value;
		var businessCity = this.refs.businessCity.value;
		var businessState = this.refs.businessState.value;
		var businessZipCode = this.refs.businessZipCode.value;
		var businessPhone = this.refs.businessPhone.value;
		var businessEmail = this.refs.businessEmail.value;

		var BarberShop = Parse.Object.extend("BarberShop"); // whenever we extend Parse we are essentially creating a new data model! This model in particular will help save all the data values entered into this component.
		var barberShop = new BarberShop();
		var self = this; // <-- MAKE SURE YOU INCLUDE THIS CODE, we can't use the 'this' keyword.
		// we create a Parse model.
		barberShop.save( 
		{
			name:businessName,
			streetAddress:businessStreetAddress,
			city:businessCity,
			state:businessState,
			zip:businessZipCode,
			phone:businessPhone,
			email:businessEmail,
			owner:Parse.User.current() // to associate the barbershop model to the owner model. Whenever this function is run it will not only save new data into our Parse model it will also save the current User into a column called owner. 
		}
			).then(function(){
				self.props.router.navigate('ownerAccount', {trigger: true});	//this happens when the save is successful

		});

	}
});





