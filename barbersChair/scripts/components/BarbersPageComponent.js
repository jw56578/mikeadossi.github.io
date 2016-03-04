//include all the things you need to use
var React = require('react');
//var QuizModel = require('../models/QuizModel');
//var StudentAnswerModel = require('../models/StudentAnswerModel');
//var QuestionModel = require('../models/QuestionModel');
//var _ = require('backbone/node_modules/underscore');
//var moment = require('moment');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			shop:{get:function(){}}
		}
	},
	getShop:function(){
		var query= new Parse.Query("BarberShop");
		var self = this;
		query.matchesQuery("owner",Parse.User.current());
		query.find({
			success:function(results){
				self.setState({shop:results[0]});

			}

		});

	},
	getEvents:function(){
        var query= new Parse.Query("Schedule");
		query.include("Barber");
		query.find({
			success:function(results){
				for(var i = 0; i < results.length; i++){
					var barber = results[i].get("Barber") ? results[i].get("Barber").get("firstName") : '';
	 				$('#calendar').fullCalendar('renderEvent', { // renderEvent is the fullcalendar.io term for putting a blue blobof color that signifies time on the calendar.
			        title: barber,
			        start: results[i].get("Start"), // it knows where to put it at a start and end.
			        end: results[i].get("End")
			      });

				}

			}

		})

	},
	// code below was taken from Parse documentation and helps us do just as the function name says.
	uploadImage:function(){
		var self = this;
		var parseFile = new Parse.File(this.file.name, this.file);
		parseFile.save().then(function(photo) {
			console.log(photo._url);
			self.setState({photoUrl:photo._url});
			// we associate photo with a barber with the boiler plate code below:
			var TeamMemberPhoto = Parse.Object.extend("TeamMemberPhoto"); // #Blueprints
			var t = new TeamMemberPhoto();
			
			t.save({ // <-- reading the Parse documentation shows this
				Barber:Parse.User.current(),
				URL:photo._url
			}).then(function(){
				//do something after save is complete
				

			});



		// The file has been saved to Parse.
		}, function(error) {
		// The file either could not be read, or could not be saved to Parse.
		});

	},
	componentDidMount:function(){

		var self = this; // when we use the bind() function the keyword this will no longer refer to the component, so we have to know that self is required here.
	  // Set an event listener on the Choose File field.
	  // (input type file #2) Using jquery method on() (bind() and on() are similar, both are jQuery, but on is preferred and works on all browswers, whereas bind does the same thing as on but doesn't work with all browsers). We listen for an event, and here we listen specifically for changes. By 'change' what we really mean is when a file is picked take notice! When the change occurs and we hear it the file is saved automatically inside our parameter 'e' and from there we can do what we want with it.  We choose to save the file into a variable. 
	    $('#fileselect').on("change", function(e) {
	      var files = e.target.files // e.target.files could be written as this.files because the this statement inside a function refers to the input file element and not to the component. When you bind an event to an element the this keyword inside the function is gonna be the input that you selected.
	      // Our file var now holds the selected file
	      self.file = files[0]; // we're only taking one file from the user, so if the user attempts to upload several files at once by highlighting several files we would only take the first file.
	      // console.log(this) --> experiment using console logging and learn more about the different things the keyword THIS refers to.
	    });
        this.getShop();
		this.getEvents(); // we call our own function
		
		function dayClickHandler(date, jsEvent, view) {

		        console.log('Clicked on: ' + date.format());

		        console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

		        console.log('Current view: ' + view.name);
		        // FYI- Code below is from fullCalendar documentation.
		        if(view.name === "month"){
					$('#calendar').fullCalendar('gotoDate',date);
					$('#calendar').fullCalendar('changeView','agendaDay');
					self.startDate = null;
					self.endDate = null;
				}
				else if(view.name === "agendaDay"){
					if(!self.startDate){
						self.startDate = date.format();
					}
					else{
						self.endDate = date.format();
					}
					self.setState({start:self.startDate,end:self.endDate});
				}

		        // change the day's background color just for fun
		        //$(this).css('background-color', 'red');
		        console.log(date);
		        console.log(jsEvent);
		        console.log(view);
		    }
		  $('#calendar').fullCalendar({ // This act of using a function that belongs to a div (a function which ordinarily in normal JS does not exist in the div) is common place with jQuery plugins. Because you required in the fullcalendar.io plugin the full calendar plugin gives your div certain functions like this one.
		    header: {
		      left: 'prev,next today',
		      center: 'title',
		      right: 'month,agendaWeek,agendaDay'
		    },
		    defaultDate: new Date(),
		    editable: false,
		    eventLimit: true, // allow "more" link when too many events
		    dayClick:dayClickHandler,
		    displayEventEnd:{
		    	month:true, // code that instructs fullcalendar that when looking at month display the end time.
		    	"default":true

		    },
		    events: [
		      
		    ]
		  }); 
		  
		 
	},
	componentWillMount: function() {
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	save:function(){
		var Schedule = Parse.Object.extend("Schedule");
		var sched = new Schedule();
		var self = this;
		sched.save({
			Barber:Parse.User.current(),
			Start:moment(this.state.start).toDate(), //Our date first comes as a string- "1/4/2004 7:00pm", we use moment here to satisfy Parse by manipulating the string into an object data type that Parse can use.
			End:moment(this.state.end).toDate()
		}).then(function(){
			//do something after save is complete
			self.getEvents();

		});
	},
	render: function(){
		var _this = this;
		//this is where you will put the html to make the page look how you want
		// (input type file #1) <inout type="file" is a built in html tag that on the mac or windows machines will take user to her file explorer (for windows) or the finder (for macs) and from here the user can choose a file and send to webpage. When the user picks file and clicks a file it triggers an EVENT, which we listen for ... (see input type file #2, jQuery on() method)
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1 className="headerH1">Barbers Home Page</h1>
				<h4>Set Schedule</h4>
				Start Time: <input value={this.state.start}/>
				End Time: <input value={this.state.end}/>
				<button onClick={this.save} type="button">Save</button>
				<div id="calendar"></div>
				<hr/>
				<hr/>
				<h4>upload picture</h4>
				<form id="fileupload" name="fileupload" enctype="multipart/form-data" method="post">
				  <fieldset>
				    <input type="file" name="fileselect" id="fileselect"></input>
				    <input onClick={this.uploadImage} id="uploadbutton" type="button" value="Upload to Parse"/>
				  </fieldset>
				</form>
				<img src={this.state.photoUrl}></img>
				<h4>Enter Credentials, years of experience</h4>

				<h4>Business Information</h4>

				<div>
				City: <input value={this.state.shop.get("city")}></input>
				</div>
				<input id="" placeholder=""></input>
			  </div>
			</div>
		)
	},
});