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
					Sign Up
				</h1>
				<h4>
					Enter your email
				</h4>
				<input ref="txtEmail" className="input" placeholder="email address"></input>
				
				<h4>
					Enter Password
				</h4>
				<p>
					must be 8 or more digits long and have at least 2 numbers.
				</p>
				<input ref="usersPassword" type="password" className="input" placeholder="enter password here"></input>

				<h4>
					Enter your first name
				</h4>
				<input ref="firstName" className="input" placeholder="first name"></input>

				<h4>
					Enter your last name
				</h4>
				<input ref="lastName" className="input" placeholder="last name"></input>

				<h4>
					Enter your phone number
				</h4>
				<input className="inputPhone"></input>
				<p><input onChange={this.userTypeChanged} name="userType" value="owner" type="radio"></input>   I am a barbershop owner</p>
				<p><input onChange={this.userTypeChanged} name="userType" value="customer" type="radio"></input>  Client</p>
				<br/>
				<br/>
				<button onClick={this.signUp} className="submitButton" type="button">Submit</button>
				<br/>
				<a href="/#forgotPassword">
					<p className="forgotPasswordTxt">I forgot my password</p>
				</a>
			  </div>
			</div>
		)
	},
	userTypeChanged:function(e){
		this.userTypez = e.currentTarget.value; // we store the value of whichever radio button is clicked, inside the userTypez property. THIS IMPLIES THAT OUR FUNCTION BOTH CREATES A NEW PROPERTY AND IT ALSO TAKES A VALUE! We are choosing to call the property userTypez. We use it again in line 87.
	},
	signUp:function(){

		var user = new Parse.User(); // User() is a parse blueprint! Upper case first letter.
		user.signUp( // dot signUp is a function specific to registering new users. It is not a reference to the name of your function. s is in lowercase because all functions have lowercase first letters.
			{
				firstName: this.refs.firstName.value, // on the left hand side we are NAMING the columns we want Parse to automatically create for us!
				lastName: this.refs.lastName.value,
				username: this.refs.txtEmail.value, // username & password & email ARE PARSE specific! You must use those names.
				password: this.refs.usersPassword.value,
				userType:this.userTypez,
				active: true // if users want to cancel their account, we can turn this to false and deactivate the account. Work on later on.
			
			},
			{
				success: (u) => {
					if(this.userTypez == 'owner'){
						this.props.router.navigate('ownerSignUp', {trigger: true});
					} else if(this.userTypez == 'customer'){
						this.props.router.navigate('userAccount', {trigger: true});
					}
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});