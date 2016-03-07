var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Site Map</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>
				<br/>
				<p><a href="#">Home</a></p>
				<ul className="aboutUl">
					<li><a href="#about">About Us</a></li>
					<li><a href="#careers">Careers</a></li>
					<li><a href="#physicians">Physicians</a></li>
				</ul>
				<ul className="programsUl">
					<li><a href="#programsAndServices">Programs & Services</a></li>
					<li><a>Inpatient Acute Care</a></li>
					<li><a>Inpatient Substance Abuse Services</a></li>
					<li><a>Intensive Outpatient Program (IOP)</a></li>
					<li><a href="">Partial Day Program</a></li>
				</ul>
				<p><a href="#admissions">Admissions</a></p>
				<p><a href="#newsAndEvents">News & Events</a></p>
				<p><a href="#contact">Contact Us</a></p>
			</div>
		)



}




})