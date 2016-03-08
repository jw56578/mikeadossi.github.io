var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			
		}
	},
	componentWillMount: function() {
 
	},
	render: function(){

		var _this = this;
		var eightcharactersLong;
		var oneNumber;
		var validEmail;
		var completeEntries;
		var incorrectEntries;

		var emailError = "";
		if(this.state.emailInvalid){
		    emailError = <div className="errorMessage"> Email is invalid</div>
	    }

	    var passwordError = "";
		if(this.state.passwordInvalid){
		    passwordError = <div className="errorMessage"> Password is invalid, please enter at least 8 characters</div>
	    }

		return(
			<div className="container">
				<div className="contentContainer">
					<h1 className="headerH1">
						Log In
					</h1>
					<h4>
						Enter your Email
					</h4>
					<input ref="txtEmail" className="input" placeholder="email address"></input>
					{emailError}

					<h4>
						Enter Password
					</h4>
					<input ref="txtPassword" type="password" className="input" placeholder="enter password here"></input>
					{passwordError}
					<br/>
					<br/>
					<button onClick={this.login} className="submitButton" type="button">Submit</button>
					<a href="/#forgotPassword"><p className="forgotPasswordTxt">I forgot my password</p></a>
				</div>
			</div>
		)
	},

	login:function(){
		var userName = this.refs.txtEmail.value;
		var password = this.refs.txtPassword.value;
		var hasError = false;
		if(userName == ""){
			this.setState({emailInvalid:true});
			hasError = true;
		}
		if(password.length < 8){
			this.setState({passwordInvalid:true});
			hasError = true;
		}
		if(hasError){
			return;
		}

        Parse.User.logIn( 
			userName,
			password,
			{

				success: (u) => {
					this.props.router.navigate('', {trigger: true}) 
					this.props.loggedIn(); 
				},
				error: (u, error) => {
					this.setState({ 
						error: error.message
					});
					this.refs.button.disabled = false;
				}
			}	
		);

	}
});