var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
			<h1 id="pageHeader">About Us</h1>
			<br/>
			<p>
				Our Hospital, located in Arlington, Texas, is a 122-bed facility that provides inpatient and outpatient mental health and chemical dependency care. Since 1971, children, adolescents, adults and older adults have relied on our Hospital’s extensive and confidential services to help overcome emotional and chemical dependency problems.
			</p>
			<br/>
			<h5>Goals and Care</h5>
			<p>
				Our goal is to help individuals address mental health and chemical dependency problems successfully. We offer specialized care for special people.
			</p>
			<br/>
			<h5>Assessment Process</h5>
			<p>
				Our “Rapid Assessment / Rapid Intake” process distinguishes us from many other hospitals. Once Hospital is contacted, help begins in a matter of minutes — not days or weeks — beginning with a no-charge assessment by a qualified mental health professional. We provide assessments for individuals of all ages, 24 hours a day/ 7 days a week.
			</p>
			<br/>
			<h5>Comments and Concerns</h5>
			<p>
				If you have a concern about services, please contact hospital administration at 817-###-####.
			</p>
			</div>

		)

}


})