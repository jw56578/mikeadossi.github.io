var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			personnel: []
		}
	},
	getPersonnel:function(){ // this function gets the data from parse unto our page.
		var query= new Parse.Query("Personnel");
		var self = this;
		query.find({
			success:function(p){
				self.setState({personnel:p});
			}

		});
	},
	componentWillMount: function() {
		this.getPersonnel(); // we use the function created above to set up our page for use.
	},
	choosePersonnel:function(){},
	render: function(){
		var _this = this; 
		// below we use the map function (which takes a parameter to designate the characters in whatever you're looping through). Map loops through each thing and does whatever you want with each thing.
		var personnelHtml = this.state.personnel.map(function(p){
				return (
					<div onClick={_this.choosePersonnel.bind(this,p)} className="barberSections">
						{p.get("FirstName")}
						<a href={'#staffDetails/' + p.id}> - View</a>
						<button onClick={_this.removePersonnel.bind(this,p)}>Remove</button>
					</div>

					)
			});
		// Above React allows us to create a loop to get the data we need and then below we print the data to the screen in the form of a div!
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1>Manage Personnel</h1>
				{personnelHtml}
				<br/>
				<a href="/#addPersonnel">Add Personnel</a>
			  </div>
			</div>
		)
	},
	removePersonnel: function(props,e){ // this function works in the same way as the 'changed' function we've used on other pages.
	    var self = this;

		props.destroy({success:function(){
			//the delete has been completed 
			self.getPersonnel();
			// above we then call the function that the 'self' (our component) already has. Remember that functions cannot be called inside other functions unless we are calling functions created in the global scope. All functions created in the global scope belong or are given to the 'this' object, or our component.
		}
		}); // this destroy function goes to the parse database, find the object whatever it is and destroys it.
	}
});

/*
Manage personnel (add, remove, credentials, yrs of exp)
*/