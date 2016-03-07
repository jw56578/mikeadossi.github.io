var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
			<h1 id="pageHeader">Contact Us</h1>
			<br/>
			<div className="row">
				<div className="col-sm-6">
					<p>
						Do not use this form if you have a medical emergency or urgent problem. Instead, please call (817) ###-####. If you need immediate medical assistance, please contact 911 or seek the nearest Emergency Room.
					</p>
					<br/>
					<p>
						For assistance or to schedule a free assessment, please call us at (817) ###-####. Your call will be answered by a member of our staff who will ask you a few questions in order to determine what is most appropriate for your circumstances.
					</p>
				</div>

				<div className="col-sm-6">
					<form id="contactForm">
						<div className="formSection">
							<div className="fiftyPercentBlocks">
								<label for="firstName">First Name <span className="required">*</span></label>
								<input type="text" id="firstName" name="firstName"  className="fiftyPercentInputs"></input>
							</div>
							<div className="fiftyPercentBlocks">
								<label for="lastName">Last Name <span className="required">*</span></label>
								<input type="text" id="lastName" name="lastName"  className="fiftyPercentInputs"></input>
							</div>
						</div>

						<div className="formSection">
								<div className="fiftyPercentBlocks">
									<label>Age</label>
									<input className="fiftyPercentInputs"></input>
								</div>
								<div className="fiftyPercentBlocks">
									<label>Phone Number <span className="required">*</span></label>
									<input className="fiftyPercentInputs"></input>
								</div>
						</div>

						<div className="formSection">
							<label for="email">Email <span className="required">*</span></label>
							<input id="email" className="wideInputBox"></input>
						</div>

						<div className="formSection">
							<label>Address 1 <span className="required">*</span></label>
							<input className="wideInputBox"></input>
						</div>

						<div className="formSection">
							<label>Address 2 <span className="required">*</span></label>
							<input className="wideInputBox"></input>
						</div>

						<div className="formSection">
							<div className="cityInput">
								<label>City <span className="required">*</span></label>
								<input className="fiftyPercentInputs"></input>
							</div>
							<div className="stateInput">
								<label>State <span className="required">*</span></label>
								<input className="fiftyPercentInputs"></input>
							</div>
							<div className="zipInput">
								<label>Zip <span className="required">*</span></label>
								<input className="fiftyPercentInputs"></input>
							</div>
						</div>

						<p>How can we assist you?</p>
					</form>
				</div>
			</div>
			</div>
		)



}




})