var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Programs & Services</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>
			<br/>
			<p>
				Our Hospital offers a comprehensive continuum of care for children, adolescents, adults, and senior adults with psychiatric or substance abuse problems, including mental health, chemical dependency, dual diagnosis / co-occurring, crisis stabilization, partial day hospitalization, intensive outpatient, and medication management.
			</p>
			<br/>
			<h4>The Excel Centers – Short-Term, Outpatient Treatment Alternative</h4>
			<br/>
			<p>
				At Millwood Hospital, we understand there are times people need additional support and therapeutic guidance to overcome challenges and events in life.
			</p>
			<br/>
			<p>
				The Excel Centers provide a short-term, outpatient treatment alternative for all ages: school aged children through adulthood with psychiatric disorders.
			</p>
			<br/>
			<p>
				The programs offer a structured, intensive, individually tailored opportunity to strengthen daily functioning. The Excel Centers incorporate the latest research in mental health uses the therapeutic techniques and skills adopted from Cognitive Behavioral Therapy, solution-focused therapy and Motivational Interviewing.
			</p>
			<br/>
			<h4>Treatment Programs</h4>
			<ul>
				<li>Groups offered to identify, discuss and explore new ways of addressing problems</li>
				<li>Services provided by a multidisciplinary team of mental health professionals</li>
				<li>Ongoing care provided through discharge planning to facilitate a successful adjustment back to daily activities</li>
				<li>Specialized groups designed to meet the specific needs of each stage of life</li>
				<li>School for children who are currently enrolled in elementary through high school</li>
			</ul>
			</div>
		)



}




})