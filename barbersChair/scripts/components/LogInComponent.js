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
					<h4>
						Enter Password
					</h4>
					<input ref="txtPassword" type="password" className="input" placeholder="enter password here"></input>
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