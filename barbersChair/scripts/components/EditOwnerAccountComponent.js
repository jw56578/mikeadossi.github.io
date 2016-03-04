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
	changed:function(prop,e){
		this.state.shop.set(prop,e.target.value);
		this.setState({shop:this.state.shop});
	},
	submitEdits:function(){
		
		this.refs.editButton.disabled = true;

		var barberShop = this.state.shop;
		var self = this; 

        barberShop.save().then(function(){
        	self.setState({message:"Save Successful"});
        	self.refs.editButton.disabled = false;
			//	this.props.refreshEditOwnerPage();	//this happens when the save is successful

		});
    },
	render: function(){
		var _this = this;
		//this is where you will put the html to make the page look how you want
		return(
			<div className="container">
			  <div className="contentContainer">
					<h1 className="headerH1">Edit Business Details</h1>
				<div className="box">
					<h3>Business Details</h3>
					<hr/>
					<h4 className="label">Businesses Name:</h4>< input onChange={this.changed.bind(this,"name")} type="text" value={this.state.shop.get("name")} ref="businessName"></input> 
					<br/>
					<h4 className="label">Business Street address:</h4>< input onChange={this.changed.bind(this,"streetAddress")} value={this.state.shop.get("streetAddress")} ref="businessStreetAddress"> </input>
					<br/>
					<h4 className="label">City:</h4>< input onChange={this.changed.bind(this,"city")} value={this.state.shop.get("city")} ref="businessCity"></input>
					<br/>
					<h4 className="label">State:</h4>< input onChange={this.changed.bind(this,"state")} value={this.state.shop.get("state")} ref="businessState"></input>
					<br/>
					<h4 className="label">Zip Code:</h4>< input onChange={this.changed.bind(this,"zip")} value={this.state.shop.get("zip")} ref="businessZipCode"> </input>
					<br/>
					<h4 className="label">Business Phone Number:</h4>< input onChange={this.changed.bind(this,"phone")} value={this.state.shop.get("phone")} ref="businessPhone"> </input>
					<br/>
					<h4 className="label">Business email:</h4>< input onChange={this.changed.bind(this,"email")} value={this.state.shop.get("email")} ref="businessEmail"> </input>
					<br/>
					<h4 className="label">Opening time:</h4>< input onChange={this.changed.bind(this,"openingTime")} value={this.state.shop.get("openingTime")} ref="openingTime"> </input>
					<h4 className="label">Closing time:</h4>< input onChange={this.changed.bind(this,"closingTime")} value={this.state.shop.get("closingTime")} ref="closingTime"> </input>
					<br/>
					<br/>
					<button ref="editButton" type="button" onClick={this.submitEdits}>Submit Changes</button>
					<br/>
					<br/>
					<div className="successMessage">{this.state.message}</div>
				</div>
				
			  </div>
			</div>
		)
	},
});