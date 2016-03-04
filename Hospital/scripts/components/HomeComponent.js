var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

componentDidMount:function(){

	Slider();
},

render:function(){

	return(
			<div id="componentContainer">
			<div className="jQuery slider">
				<div id="1" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>header</h2>animal splendide ne vim, quod dicit id sea. Aperiri concludaturque eum an. Appetere persequeris nam ad. Ea vel error adipisci facilisis</span>
					<img src="images/staff.jpg" border="0" alt="staff" />
				</div>
				<div id="2" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>header 2</h2>animal splendide ne vim, quod dicit id sea. Aperiri concludaturque eum an. Appetere persequeris nam ad. Ea vel error adipisci facilisis</span>
					<img src="images/family.jpeg" border="0" alt="family" />
				</div>
				<div id="3" className="sliderDivs">
					<span className="imgDescription"></span>
					<span className="sliderText"><h2>header 3</h2>animal splendide ne vim, quod dicit id sea. Aperiri concludaturque eum an. Appetere persequeris nam ad. Ea vel error adipisci facilisis</span>
					<img  src="images/elder.jpg" border="0" alt="elder" />
				</div>
			</div>
			<div style={{'text-align':"center"}}>
				<a onClick={sliderTo.bind(null,1)} className="pageButton"></a>
				<a onClick={sliderTo.bind(this,2)} className="pageButton"></a>
				<a onClick={sliderTo.bind(this,3)} className="pageButton"></a>
			</div>
			<hr/>
			<p>
				Velit animal splendide ne vim, quod dicit id sea. Aperiri concludaturque eum an. Appetere persequeris nam ad. Ea vel error adipisci facilisis, eu vim viris debitis.
			</p>
			<p>
				Harum omnes pri ea. Eius legere mediocritatem usu ad, vix cu veri blandit, nec amet expetenda ex. Id mea quem periculis consequuntur, in has elit denique argumentum. No tota nominati assentior vel, qui at pertinacia adipiscing, diam aeque singulis id ius. Impedit veritus deseruisse ad has, percipit iracundia vulputate cu qui.
			</p>
			<hr/>
			<div className="container">
				<div className="row">
					<span className="col-sm-4">
						<span className="col-sm-12">
							<img className="homeImages" src="images/events.jpeg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Events</h4></a>
							<p className="textBelowHomeImages">Amet expetenda ex. Id mea quem periculis consequuntur, in has elit denique argumentum. No tota nominati assentior vel, qui at pertinacia adipiscing, diam aeque </p>
						</span>
					</span>
					<span className="col-sm-4">
						<span className="col-sm-12">
							<img className="homeImages" src="images/referral.jpg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Referrals</h4></a>
							<p className="textBelowHomeImages">Amet expetenda ex. Id mea quem periculis consequuntur, in has elit denique argumentum. No tota nominati assentior vel, qui at pertinacia adipiscing, diam aeque </p>
						</span>
					</span>
					<span className="col-sm-4">
						<span className="col-sm-12">
							<img className="homeImages" src="images/2WomenConversing.jpg"></img>
							<a href="#"><h4 className="bottomLinkHeading">Patient Satisfaction</h4></a>
							<p className="textBelowHomeImages">Amet expetenda ex. Id mea quem periculis consequuntur, in has elit denique argumentum. No tota nominati assentior vel, qui at pertinacia adipiscing, diam aeque </p>
						</span>
					</span>
				</div>
			</div>

			</div>
		)



}




})