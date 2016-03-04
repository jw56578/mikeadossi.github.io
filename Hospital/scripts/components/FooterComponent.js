var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<footer id="footerContainer">
				<div className="footerDiv1">
					<h3>OUR WEBSITE</h3>
					<ul className="footerUl">
						<li><a href="#contact">Contact</a></li>
						<li><a href="#about">About Us</a></li>
						<li><a href="#programsAndServices">Our Services</a></li>
						<li><a href="#careers">Careers</a></li>
						<li><a href="#siteMap">Site Map</a></li>
					</ul>
				</div>
				<div className="footerDiv2">
					<h3>LOCATION</h3>
					<ul className="footerUl">
						<li>100 Northstar street</li>
						<li>Austin, TX 70000</li>
						<li>Phone (817)###-####</li>
					</ul>
				</div>
				<div className="footerDiv3">
					<iframe width="224" height="133" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53689.992085376696!2d-97.121386!3d32.74916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d985a72a92b%3A0xc0b982e7710540b7!2s1011+N+Cooper+St%2C+Arlington%2C+TX+76011!5e0!3m2!1sen!2sus!4v1456780776994"></iframe>
				</div>

				<div className="footerCopyright">Copyright 2016</div>
			</footer>

		)
}

})