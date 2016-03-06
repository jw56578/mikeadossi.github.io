var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<nav className="navbar navbar-default">
				<nav className="container">
					<div id="navContact">Call us directly at: (817)###-#### </div>
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#linksContainer">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="# "><img id="logo" src="./images/hospitalLogo.png"></img></a>
					</div>
					<div id="linksContainer" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" id="aboutLink" className="navLinks" href="#about">ABOUT US<b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li className="dropdown-header">Who we are</li>
									<li><a href="#careers">Careers</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" id="programsLink" className="navLinks" href="#programsAndServices">PROGRAMS & SERVICES<b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li className="dropdown-header">header</li>
									<li><a href="#">new1</a></li>
									<li><a href="#">new2</a></li>
								</ul>
							</li>
							<li id="admissionsLink"><a href="#admissions">ADMISSIONS</a></li>
							<li id="newsLink"><a href="#newsAndEvents">NEWS & EVENTS</a></li>
							<li id="contactLink"><a href="#contact">CONTACT US</a></li>
						</ul>
					</div>
				</nav>
			</nav>

		)
}

})