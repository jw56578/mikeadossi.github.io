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
				<h1 className="headerH1">Contact</h1>
				<h3>
					Email Address
				</h3>
				<input ref="contactEmail" className="input" placeholder="email address"></input>
				<h3>
					Subject
				</h3>
				<input ref="contactSubject" className="input" placeholder="subject"></input>
				<h3>
					Comment
				</h3>
				<textarea ref="contactComment" className="textarea"></textarea>
				<br/>
				<button onClick={this.sendComment} className="submitButton" type="button">Submit</button>
			  </div>
			</div>
		)
	},
	sendComment:function(){
		var contactEmail = this.refs.contactEmail.value;
		var contactSubject = this.refs.contactSubject.value;
		var contactComment = this.refs.contactComment.value;

		var Comment = Parse.Object.extend("Comment"); //  Everytime we extend Parse we add a new data model to it, this data model is called Comment, and it's held in our blueprint variable called Comment (with a capital C). Parse data models are then used (below) to save the data from this component, and all this is done within this function, and this function is called with Reacts BIZARRE way of handling events, see onClick above.
		var comment = new Comment();

		comment.save({ // we save inside our newly created model the following sections: email, subject, comment. Which each hold relevant values.
			email:contactEmail,
			subject:contactSubject,
			comment:contactComment,
			commenter:Parse.User.current() // TODO why is this code not working??? It should allow every user who sends me an email show up in the column called commenter, right?
		})
	}
});





