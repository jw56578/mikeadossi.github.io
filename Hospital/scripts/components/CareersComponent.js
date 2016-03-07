var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Careers</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>
			<br/>
			<p>
				Thank you for your interest in a career with Millwood Hospital. Send your resume to careers@hospital.com.
			</p>
			<br/>
			<h4>Five Reasons to Join out Team</h4>
			<h5>Impacting lives every day</h5>
			<p>
				The rewards that come from serving people in need are plentiful.   There comes a sense of satisfaction when helping patients who are in crisis and need a very special type of connection to their healthcare provider. You can also feel a part of the area healthcare network and a sense of pride in giving back to those in our community.
			</p>
			<br/>
			<h5>Opportunities for Career Advancement</h5>
			<p>
				When you join the staff at Millwood Hospital, you have the opportunity to participate and grow through advancement opportunities. We believe in promoting from within the organization and offer mentorship programs and progressive career paths in many areas.
			</p>
			<br/>
			<h5>Friendly and Warm Place to Work</h5>
			<p>
				A place that feels friendly can mean the world to both patients and employees. Fostering a relaxed atmosphere leads to greater productivity and inspires great work for everyone!
			</p>
			<br/>
			<h5>Great location</h5>
			<p>
				We are located between Dallas and Fort Worth and just fifteen minutes from DFW International Airport, in Tarrant County, off of Interstate 30 and N. Cooper Street (less than 1 mile from AT & T Stadium, home of the Dallas Cowboys football team, Globe Life Park, home of the Texas Rangers baseball club, Six Flags Over Texas and the University of Texas at Arlington).
			</p>
			<br/>
			<h5>Competitive Pay and Benefits</h5>
			<p>
				Millwood Hospital offers employees competitive salaries, professional working conditions and an exceptional benefits plan. Our flexible benefits plan lets you select a package of benefits that are right for you and your family.
			</p>
			<br/>
			<p>
				Other benefits include:
			</p>
			<br/>
			<ul>
				<li>Tuition reimbursement and continuing education credits</li>
				<li>401 (k) match</li>
				<li>Paid time off</li>
				<li>Hospital sponsored employees activities</li>
				<li>Employee assistance program (EAP)</li>
				<li>Free parking</li>
				<li>Cafeteria discounts</li>
			</ul>
			</div>
		)



}




})