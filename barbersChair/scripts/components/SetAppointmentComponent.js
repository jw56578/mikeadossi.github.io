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
			
		}
	},
	componentDidMount:function(){

		var query= new Parse.Query("Appointment");
		query.include("Barber");
		query.find({
			success:function(results){
				for(var i = 0; i < results.length; i++){
	 				$('#calendar').fullCalendar('renderEvent', {
			        title: results[i].get("Barber").get("firstName"),
			        start: results[i].get("Time")
			      });

				}

			}

		})
		var self = this;
		function dayClick(date, jsEvent, view) {

		        console.log('Clicked on: ' + date.format());

		        console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

		        console.log('Current view: ' + view.name);
		        // FYI- Code below is from fullCalendar documentation.
		        if(view.name === "month"){
					$('#calendar').fullCalendar('gotoDate',date);
					$('#calendar').fullCalendar('changeView','agendaDay');
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
		  window.$('#calendar').fullCalendar({
		    header: {
		      left: 'prev,next today',
		      center: 'title',
		      right: 'month,agendaWeek,agendaDay'
		    },
		    defaultDate: '2015-10-30',
		    editable: true,
		    eventLimit: true, // allow "more" link when too many events
		    dayClick:dayClick,
		    events: [
		      {
		        id: 999,
		        title: 'Repeating Event',
		        start: '2014-11-09T16:00:00'
		      },

		      {
		        title: 'Meeting',
		        start: '2014-11-12T10:30:00',
		        end: '2014-11-12T12:30:00'
		      },
		      {
		        title: 'Click for Google',
		        url: 'http://google.com/',
		        start: '2014-11-28'
		      }
		    ]
		  }); 
		  
		  $('#calendar').fullCalendar('renderEvent', {
		        title: 'Dynamically added',
		        start: '2014-11-12T10:30:00',
		        end: '2014-11-12T12:30:00'
		      });
		
	},
	componentWillMount: function() {
		//this is where calls to parse database should be done
		//there will alwasys be a call to this.setState() somewhere in here
	},
	save:function(){
		var Schedule = Parse.Object.extend("Schedule");
		var sched = new Schedule();
		sched.save({
			Barber:Parse.User.current(),
			Start:moment(this.state.start).toDate(),
			End:moment(this.state.end).toDate()
		}).then(function(){
			//do something after save is complete
		});
	},
	render: function(){
		var _this = this;
		//this is where you will put the html to make the page look how you want
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
				<h4>Enter Credentials, years of experience</h4>
			  </div>
			</div>
		)
	},
});