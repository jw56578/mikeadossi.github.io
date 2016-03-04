var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{ // (page inception #3) This return line of code needs to be included to give react what it needs, and react needs something to be in the page immediately, as a placeholder. With just our add personnel functionality alone on this page we would save data to memory and never had to retrieve anything from the server. However since we'll be using this component as 2 different 'views' react requires that we include code that will allow both pages to work. Again this component will be used as 2 views- the addPersonnelComponent view and the editPersonnelComponent view. When we use the editPersonnelComponent view we pass in an id of the 'person' object we need from the database. Great. However since this component also handles the addPersonnel page, we need to know react will be reading ALL the code in this file/page and when it sees 'person' it needs to get a person from the database, so we MUST also make available to parse an empty person object.
			person: {get:function(){}}
		}
	},
	uploadImage:function(){
		var self = this;
		if(!this.file){
			return;
		}
		var parseFile = new Parse.File(this.file.name, this.file);
		parseFile.save().then(function(photo) {
			console.log(photo._url);
			self.setState({photoUrl:photo._url});
			// we associate photo with a barber with the boiler plate code below:
			var TeamMemberPhoto = Parse.Object.extend("TeamMemberPhoto"); // #Blueprints
			var t = new TeamMemberPhoto();
			
			t.save({ // <-- reading the Parse documentation shows this
				Personnel:self.state.person,
				URL:photo._url
			}).then(function(){
				//do something after save is complete
				

			});
		// The file has been saved to Parse.
		}, function(error) {
		// The file either could not be read, or could not be saved to Parse.
		});

	},
	
	componentWillMount: function() {
		// (page inception #1)- Component inside a component. The current AddPersonnel page has all the features we need for an EditPersonnel page, so why create a completely different component? By creating teh function below we can give instructions to the browser that tell the browser if it sees an id passed into the url (see main.js where we have a editpersonnel function that does this) it must act differently. The function below tells the browser to get the personnel info using the id.
		var self = this;
		if(this.props.id){
			var query = new Parse.Query("Personnel"); // we use a variable here to setup our next line of code.
			
			query.get(this.props.id,{ // in this line we make a call to the database using the id to get exactly what we want (the person object).
				success:function(p){
					self.setState({person:p}); // here we pass into the page the person object.
				}
			});

		}else{
			var Personnel = Parse.Object.extend("Personnel"); // whenever we extend Parse we are essentially creating a new data model! This model in particular will help save all the data values entered into this component.
			var personnel = new Personnel();
			var self = this; // <-- MAKE SURE YOU INCLUDE THIS CODE, we can't use the 'this' keyword.
			// we create a Parse model.
			this.setState({person:personnel}); // fyi- we give react the personnel variable (a version of a blueprint object) we created by using setState(). Or in another way. // Notice we will be working with one variable called 'person' which will hold the parse object instance.
		}
		
	},
	componentDidMount:function(){
		var self = this;
		$('#fileselect').on("change", function(e) {
	      var files = e.target.files // e.target.files could be written as this.files because the this statement inside a function refers to the input file element and not to the component. When you bind an event to an element the this keyword inside the function is gonna be the input that you selected.
	      // Our file var now holds the selected file
	      self.file = files[0]; // we're only taking one file from the user, so if the user attempts to upload several files at once by highlighting several files we would only take the first file.
	      // console.log(this) --> experiment using console logging and learn more about the different things the keyword THIS refers to.
	    });
	},
	changed:function(prop,e){ // this created function is used inside our input box below. We listen for the user to enter whatever he wants and when the user changes something then this function is run. // e is the random variable character we chose to represent the last parameter of our function and 'e' is the text box itself.
		this.state.person.set(prop,e.target.value); // here we put the new change into Parse using set(). prop above (which is an arbitrary name, but still defines what the object is) represents the property on the server that you will be editing. So in the first input box below your user needs to enter his first name, so when he enters a new value in the first name input box he is effectively changing the PROPERTY of the 'first name' object on parse. This function will then set that new value to the state.person, in memory (will eventually be sent to the server, when dot save is called! See our 'save' button in our rendered page and the savePerson function we created below).
		this.setState({person:this.state.person}); // our way of refreshing the page. setState is reacts way of resetting the page. This is a weird react requirement because react is constructed to constantly send data back to your react system and from the react server in real time. When you type a character react sends it in milliseconds to the server and react needs the page to be rerendered to post that same word from unto your page. In an instant the user is posting to the react system and getting from the server the characters of their input box entries. You need to remember this so you know to include the second piece of code above in which you setState (or refresh page) to the current state!
	},
	savePerson: function(){
		var self = this;
		this.state.person.save({
			success:function(p){
				self.setState({person:p,message:'Save Successful!'});
				self.uploadImage();
				self.refs.savePersonBtn.disabled = false;
			}
		}) // this saves our object to the database on the server.
		this.refs.savePersonBtn.disabled = true;
	},
	render: function(){
		var _this = this;
		var pageTitle;
		if(this.state.person.id){ // (page inception#2) If an id exists in our url or an id is available to our page then this page is the Edit page, else it's our Add component page. All we're doing is changing the page title.
			pageTitle = <h2>Edit Personnel</h2>
		} else{
			pageTitle = <h2>Add Personnel</h2>
		}
		return(
			<div className="container">
			  <div className="contentContainer">
				{pageTitle}
				<input placeholder="First Name"  value={this.state.person.get("FirstName")}  onChange={this.changed.bind(this,"FirstName")}></input>
				<br/>
				<input placeholder="Last Name"  value={this.state.person.get("LastName")} onChange={this.changed.bind(this,"LastName")}></input>
				<br/>
				<input placeholder="Credentials"  value={this.state.person.get("Credentials")} onChange={this.changed.bind(this,"Credentials")}></input>
				<br/>
				<input placeholder="Favorite Quote"  value={this.state.person.get("Quote")} onChange={this.changed.bind(this,"Quote")}></input>

				<form id="fileupload" name="fileupload" enctype="multipart/form-data" method="post">
				<h2>Upload barber Image</h2>
				  <fieldset>
				    <input type="file" name="fileselect" id="fileselect"></input>
				    
				  </fieldset>
				</form>
				<br/>
				<img className="barberImage" src={this.state.photoUrl}></img>
				<br/>
				<button type="button" onClick={this.savePerson} ref="savePersonBtn">Save</button>
				<br/>
				<div className="successMessage">{this.state.message}</div>
				</div>

                
			</div>
		)
	},
});

/*
Manage personnel (add, remove, credentials, yrs of exp)
*/