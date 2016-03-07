var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Physicians</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>
				<br/>
				<br/>
				<img src="./images/drGilliam.png"></img>
				<h4>Dr Gilliam Doctorfish, MD</h4>
				<p>
					Dr. Gilliam is a medical doctor who spent most of his early professional career working in the famed Bikini Bottom hospital, and now heads Our hospital. In addition to being a doctor, he is also a veterinarian. Dr. Bennett treats both adult and adolescent patients, and also conducts psychoanalyses.
				</p>
				<br/>
				<br/>
				<img src="./images/drS_Bob.png"></img>
				<h4>Dr SpongeBob Squarepants, MD</h4>
				<p>
					Dr. Squarepants at the ripe age of 29 graduated magna cum laude from the prestigious Bikini Bottom University Medical School. He is well known and loved all over the world, for his enthusiasm, always cheerful attitude and medical acumen. He is a member of both the American Medical Association and the Texas Medical Association
				</p>
				<br/>
				<br/>
				<img src="./images/drPatrick.png"></img>
				<h4>Dr Patrick Star, MD</h4>
				<p>
					Dr Star is a graduate of Brown University Medical School in Providence, Rhode Island. He completed his residency at Bikini Bottom hospital where he met Dr Squarepants and became very close friends. He is a diplomate of the American Board of Psychiatry and Neurology. He is also a recipient of the Medical Director Award for Outstanding Contribution to Continuing Medical Education. 
				</p>
				<br/>
				<br/>
				<img src="./images/drFred.png"></img>
				<h4>Dr Fred Fish, MD</h4>
				<p>
					Dr Fish is our newest joining doctor, prior to becoming a medical doctor he was a top marine biologist. He is certified with the American Board of Psychiatry and Neurology.
				</p>
			
			</div>
		)



}




})