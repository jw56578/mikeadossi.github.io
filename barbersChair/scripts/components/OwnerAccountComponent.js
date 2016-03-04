var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			shop:{get:function(){}}
		}
	},
	getShop:function(){
		var query= new Parse.Query("BarberShop");
		var self = this;
		query.equalTo("owner",Parse.User.current());
		query.find({
			success:function(results){
				self.setState({shop:results[0]});

			}

		});

	},
	componentDidMount:function(){
		this.getShop();

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
					<h1 className="headerH1">Owner Account Page</h1>
				<div className="acctContainer">
					<h2>Business Details</h2>
					<hr/>
					<h4 className="label">Businesses Name:</h4><span ref="businessName"> {this.state.shop.get("name")}</span> 
					<br/>
					<h4 className="label">Business Street address:</h4><span ref="businessStreetAddress"> {this.state.shop.get("streetAddress")}</span>
					<br/>
					<h4 className="label">City:</h4><span ref="businessCity"> {this.state.shop.get("city")}</span>
					<br/>
					<h4 className="label">State:</h4><span ref="businessState"> {this.state.shop.get("state")}</span>
					<br/>
					<h4 className="label">Zip Code:</h4><span ref="businessZipCode"> {this.state.shop.get("zip")}</span>
					<br/>
					<h4 className="label">Business Phone Number:</h4><span ref="businessPhone"> {this.state.shop.get("phone")}</span>
					<br/>
					<h4 className="label">Business email:</h4><span ref="businessEmail"> {this.state.shop.get("email")}</span>
					<br/>
					<a href="/#editOwnerAccount">Edit</a>
				</div>
				<div className="acctContainer">
					<h2>Menu</h2>
					<hr/>
					<a href="/#scheduling">Manage Scheduling</a>
					<br/>
					<a href="/#managePersonnel">Manage Personnel</a>
					<br/>
					<a href="/#managePricing">Manage Pricing</a>
				</div>


				<h3></h3>
				<span ref="" className="span" placeholder=""></span>
				
			  </div>
			</div>
		)
	},
});
