
var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			barbers: []
		}
	},   
	componentWillMount: function() {

	},
	render: function(){
		var _this = this;
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1 className="headerH1">User Account Page</h1>

				<h4>Businesses Name:</h4><span ref="businessName" placeholder="Dan's Barber Shop"></span> 
				     
				<h4>Business Street address:</h4><span ref="businessStreetAddress" placeholder="Dan's Barber Shop"></span>
				<h4>City:</h4><span ref="businessCity"></span>
				<h4>State:</h4><span ref="businessState"></span>
				<h4>Zip Code:</h4><span ref="businessZipCode"></span>
				<h4>Business Phone Number:</h4><span ref="businessPhone" placeholder="###-###-####"></span>
				<h4>Business email:</h4><span ref="businessEmail" placeholder="business email address"></span>

				<span ref="" className="span" placeholder=""></span>
				
			  </div>
			</div>
		)
	}
});