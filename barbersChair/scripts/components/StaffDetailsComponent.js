var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			personnel:{get:function(){}}
		}
	},
	getPersonnel:function(){
		var query= new Parse.Query("Personnel");
		var self = this;
		query.get(this.props.id,{
			success:function(p){
				self.setState({personnel:p});
				self.getPhoto();
			}

		});
	},
	getPhoto:function(){
		var query= new Parse.Query("TeamMemberPhoto");
		var self = this;
		query.equalTo("Personnel",this.state.personnel);
		query.find({
			success:function(p){
				self.setState({photoUrl:p[0].get("URL")});
			}

		});

	},
	componentWillMount: function() {
		this.getPersonnel();
	},
	render: function(){
		var _this = this; 
		return(
			<div className="container">
			  <div className="contentContainer">
					<h1>Staff Details</h1>
					Name: {this.state.personnel.get("FirstName")}{this.state.personnel.get("LastName")}
					<br/>
					Credentials: {this.state.personnel.get("Credentials")}
					<br/>
					Favorite Quote: {this.state.personnel.get("Quote")}
					<br/>
					<a href={"/#editPersonnel/" + this.state.personnel.id}>Edit</a>
					<img className="barberImage" src={this.state.photoUrl}></img>
				</div>

			</div>
		)
	},
});

/*
TODO- will need to create a new page in which we edit the staff members details
TODO- Add picture to the staffDetails page
*/