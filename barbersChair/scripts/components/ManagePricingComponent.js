var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			barbers: []
		}
	},
	getPricing:function(){ // this function gets the data from parse unto our page.
		var query= new Parse.Query("Pricing");
		var self = this;
		query.find({
			success:function(p){
				self.setState({pricing:p});
			}

		});
	},
	componentDidMount:function(){

		this.getPricing();
	},
	componentWillMount: function() {

	},
	change:function(prop,obj,e){
		var val = e.target.value;
		if(prop == "price"){
			val = parseInt(val);
		}
		 obj.set(prop,val);
		 this.setState({pricing:this.state.pricing});
	},
	save:function(){
		Parse.Object.saveAll(this.state.pricing);
		//this.state.pricing.forEach(function(p){
		//	p.save();
		//})

	},
	addNew:function(){
		var Pricing = Parse.Object.extend("Pricing");
		var p = new Pricing();
		this.state.pricing.push(p);
		this.setState({pricing:this.state.pricing});
	},
	render: function(){
		var _this = this;

		var pricingHtml = "";
		if(this.state.pricing){
			pricingHtml = this.state.pricing.map(function(p){
				return (
					<tr className="barberSections">
						<td><input onChange={_this.change.bind(this,"description",p)} value={p.get("description")} ref=""></input></td>
						<td><input onChange={_this.change.bind(this,"details",p)} ref=""></input></td>
						<td><input onChange={_this.change.bind(this,"price",p)} value={p.get("price")} ref=""></input></td>
					</tr>

					)
			});
		}
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1>Manage Pricing</h1>
				<table>
				<thead>
				<tr><td>Description</td><td>Details</td><td>Price</td></tr>
			
				</thead>
				<tbody>
				{pricingHtml}
				</tbody>
				</table>

				<button onClick = {this.addNew}>add new</button>
				<button onClick = {this.save}>SAve</button>
			  </div>
			</div>
		)
	},
});