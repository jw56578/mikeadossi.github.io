// This is for the Log in component that lets users access their account.
var React = require('react');
var ReactDOM = require('react-dom');

// Creating a new React component that lets the user log in into their account. If errors arise, they will be redirected using an error message.
module.exports = React.createClass({ 
	getInitialState: function() {
		return {
			error: null
		};
	},// if the user does not type in any information this function will prompt them to inout their username and password
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (<p className="error-message">{this.state.error}</p>)
			
		}
		return(
		//Log In form starts here with username and password required
		<div className = "loginFormContainer">
			<div className="login-heading">
					<h3>Log In</h3>
			</div>
			<form className="login-form" onSubmit={this.onLogin}>
				{errorElement}
				<label htmlFor="userName" >User Name</label>
				<input className="u-full-width" ref="userName" type="text" 	placeholder="username" id="userName" />
				<label htmlFor="password" >Password</label>
				<input className="u-full-width" ref="password" type="password" placeholder ="password" id="password" />
				<br/><br/>
				<button ref="button" className="button-primary" disabled={false}>Log In</button>
			</form>
		</div>
		);
	},
	// Function to log in user which uses Parse for as a server with the users information
	onLogin: function(e) {
		e.preventDefault();
		this.refs.button.disabled = true;
		console.log(this.refs.password.value)
		// var user = new Parse.User();
		Parse.User.logIn(
			this.refs.userName.value,
			this.refs.password.value,
			{
				//routes user to home page when they successfully log in
				success: (u) => {
					this.props.router.navigate('', {trigger: true})
				},//gives user error message when they enter in no/wrong info
				error: (u, error) => {
					this.setState({
						error: error.message
					});
					this.refs.button.disabled = false;
				}
			}	
		);
	}
})