var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

componentDidMount:function(){

	Slider();
},

render:function(){

	return(
			<div id="componentContainer">
			<div>
				<img className="sliderResponsiveImage" src="./images/staff.jpg"></img>
			</div>
			<div className="jQuery slider">
				<div id="1" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>Providing Quality care</h2>We have been dedicated to helping children, adolescents, adults and senior adults with psychiatric or substance abuse problems. Offering a wide range of treatment options, Millwood Hospital provides specialized behavioral health care for special people.</span>
					<img src="images/staff.jpg" border="0" alt="staff" />
				</div>
				<div id="2" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>Top performer for your family</h2>Millwood Hospital has been named Top Performer on Key Quality Measures® by The Joint Commission, the leading accreditor of health care organizations in America.</span>
					<img src="images/family.jpeg" border="0" alt="family" />
				</div>
				<div id="3" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>We believe in people</h2>We understand that crisis can occur at any hour. That’s why our Rapid Assessment/Rapid Intake process is so important. Once we have been contacted, help begins in a matter of minutes – not days or weeks.</span>
					<img  src="images/elder.jpg" border="0" alt="elder" />
				</div>
			</div>
			<div className="sliderLinks" style={{'text-align':"center"}}>
				<a onClick={sliderTo.bind(null,1)} className="pageButton"></a>
				<a onClick={sliderTo.bind(this,2)} className="pageButton"></a>
				<a onClick={sliderTo.bind(this,3)} className="pageButton"></a>
			</div>
			<hr/>
			<p>
				Located in Austin, Texas, our hospital is a 122-bed facility that provides inpatient and outpatient mental health and chemical dependency (substance abuse) care to children, adolescents, adults and older adults. We are a TRICARE®-approved and certified facility.
			</p>
			<hr/>
			<div className="container">
				<div className="row">
					<span className="col-sm-4">
						<span className="col-sm-12" >
							<img className="homeImages" src="images/events.jpeg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Events</h4></a>
							<p className="textBelowHomeImages">We offer support groups, CEUs for professionals and a variety of other events! </p>
						</span>
					</span>
					<span className="col-sm-4">
						<span className="col-sm-12">
							<img className="homeImages" src="images/referral.jpg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Referrals</h4></a>
							<p className="textBelowHomeImages">We manage clinical information in a confidential but appropriate manner when communicating with other health care professionals. To make a referral, please call (817) ###-####. </p>
						</span>
					</span>
					<span className="col-sm-4">
						<span className="col-sm-12">
							<img className="homeImages" src="images/2WomenConversing.jpg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Patient Satisfaction</h4></a>
							<p className="textBelowHomeImages">We are proud that our families have some very nice things to say about our staff and the treatment they received. </p>
						</span>
					</span>
				</div>
			</div>

			</div>
		)



}




})