var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
			<h1 id="pageHeader">News & Events</h1>
			<br/>
			<p>
				Our Hospital recognized “Mental Health Awareness Month” by hosting a celebration honoring our community’s focus and commitment to providing superior quality healthcare treatment for patients and families with mental, behavioral or chemical dependency needs.
			</p>
			<br/>
			<div className="dotBorders">
				<h5>Upcoming Events</h5>
				<a href="#">Humor in Psychotheraphy with Bryan C Duncan, MA, MS, LPC-S, NCC </a>
				<p>
					Friday March 11, 2016 from 10:00 AM to 12:00 PM CST
					Bryan C. Duncan, MA, MS, LPC-S, NCC has been working in the mental health field for over ten years. Bryan will share how the use of humor can be used not only as a teaching tool, but also as a therapeutic method to connect to clients and illustrate points. We hope you can join us. You will receive 2 free CEUs and a light breakfast will be served.
				</p>
			</div>
			<br/>
			<p>

				Our Hospital has been a provider of health services in Tarrant County for over 43 years. Highlighting this event was the ribbon cutting for The Excel Center of Arlington’s new Adolescent program, which provides specialized day treatment and school for teens, ages 12-17, with emotional, behavioral and/or chemical dependency needs.
			</p>
			<br/>
			<h5>4th Monday CEUs</h5>
			<p>
				This free programming includes clinical cases and/or topics presented by local behavioral health professionals. The purpose of 4th Monday CEUs is to promote collaboration in the community to maximize longer term benefits for patients and families in Tarrant County. All licensed counselors and therapists receive 2 CEUs, a little networking and a light lunch at no charge! To register, please call (817) ###-####.
			</p>
			<br/>
			<h5>Granbury CEUs</h5>
			<p>
				Granbury CEUs include clinical cases and/or topics presented by local health care professionals. The purpose of Granbury CEUs is to promote collaboration in the community to maximize longer term benefits for patients and families in Tarrant County. All licensed counselors and therapists receive 2 CEUs, a little networking and a light lunch at no charge! To register, please call (817) ###-####.
			</p>
			<br/>
			<h5>Living Connections</h5>
			<p>
				The Excel Center, in conjunction with Advocates for Children of Trauma, hosts Living Connections, a Support Group for parents and guardians of children with emotional and behavioral difficulties. Living Connections Support Group is held at The Excel Center of Fort Worth on the first Monday of every month from 6:00 p.m. – 8:00 p.m. 
			</p>
			</div>
		)



}




})