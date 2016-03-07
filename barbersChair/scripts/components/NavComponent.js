//include all the things you need to use
var React = require('react');
var Backbone = require('backbone');
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
	getFavorites:function(shop){ // this function gets the data from parse unto our page.
		var query= new Parse.Query("Favorite");
		var self = this;
		query.equalTo("user",Parse.User.current());
		query.include("Shop");
		query.find({
			success:function(p){
				self.setState({favorites:p});
			}

		});
	},
	componentDidMount:function(){
		this.getFavorites();
	},
	takeToMap:function(e){
		var navZip = this.refs.navZipCode.value;
		this.props.router.navigate('map/'+navZip,{trigger:true});
	},
	gotoFavorite:function(e){
		this.props.router.navigate('favoriteShop/'+e.target.value,{trigger:true});

	},
	render: function(){
		var _this = this;
		var currentUser = Parse.User.current(); // We check if a user is logged in by using this code...
		var loggedButton = "";
		var signedUpButton;
		var accountButton;
		if(currentUser){ // we add this code below to give our render functions instructions. If currentUser is true, meanng if there's currently someone logged in then display the page differently. If user clicks our loggedButton!!! while the currentUser is true then the user is hreffed to the logOut route, which runs the logOut function in mainjs. If the currentUser is not true when the refreshNav is called then our loggedButton says something different.
			loggedButton = <a href="/#logOut" >Log Out</a>
		}
		else{
			loggedButton = <a href="http://mikeadossi.github.io/mikeadossi.github.io/barbersChair/#logIn">Log In</a>
		}

		if(currentUser){
			signedUpButton = <a href="#"></a> 
		} else{
			signedUpButton = <a href="/#signUp">Sign Up</a>
		}

		if(currentUser && currentUser.get('userType') == 'owner'){
			accountButton = <a href="/#ownerAccount">Account</a>
		} else if(currentUser && currentUser.get('userType') == 'customer'){
			accountButton = <a href="/#userAccount">Account</a>
		} else {
			accountButton = <a href="#"></a>
		}

		var zipInput = "";
		if(Backbone.history.getFragment() != ''){

			zipInput = (<form className="navbar-form navbar-left" role="search">
					        <div className="form-group">
					          <input ref="navZipCode" type="text" className="form-control" placeholder="enter your zipcode"></input>
					        </div>
					        <button type="submit" className="btn btn-default" onClick={this.takeToMap} >Find</button>
					      </form>)
		}
		var accountLink = "";
		if(currentUser && currentUser.get('userType')=='owner'){
			accountLink = <a href="/#ownerAccount"><span className="floatedLinks"> </span></a> 
		} else if(currentUser && currentUser.get('userType')=='customer'){
			accountLink = <a href="http://mikeadossi.github.io/mikeadossi.github.io/barbersChair/#userAccount"><span className="floatedLinks">Sign Up</span></a>
		}		
		var favoritesHtml = [];
		var selectDefault = [<option>select</option>];
		if(this.state.favorites){
			favoritesHtml = this.state.favorites.map(function(f){

				return <option value={f.get("Shop").id}> {f.get("Shop").get("name")}</option>
			});

		}
		favoritesHtml = favoritesHtml.concat(selectDefault);
		var favoriteSelect = (<li><a href="javascript:void();"><select onChange={this.gotoFavorite}>{favoritesHtml}</select></a></li>)
		return(

			<nav className="navContainer navbar navbar-default">
					<div className="container-fluid">
					<div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span> 
				      </button>
				      <a className="navbar-brand" href="http://mikeadossi.github.io/mikeadossi.github.io/barbersChair">BarbersChair</a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      {zipInput}
				      
				      <ul className="nav navbar-nav navbar-right">
				      	{favoriteSelect}
				      	<li>{accountButton}</li>
				        <li><a href="http://mikeadossi.github.io/mikeadossi.github.io/barbersChair/#about">About</a></li>
				        <li><a href="http://mikeadossi.github.io/mikeadossi.github.io/barbersChair/#contact">Contact</a></li>
				        <li>{loggedButton}</li>
						<li>{signedUpButton}</li>
				      </ul>
				    </div>
				  </div>
				</nav>
		)
	},
});