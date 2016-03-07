var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Contact</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>

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
									<select name="state">
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
								<div className="zipInput">
									<label>Zip <span className="required">*</span></label>
									<input className="fiftyPercentInputs"></input>
								</div>
							</div>
							<br/>
							<p className="moreInformation">How can we assist you?</p>
							<select>
								<option>More Information</option>
								<option value="">Seeking treatment for myself</option>
								<option value="">Seeking treatment for my child</option>
								<option value="">Seeking treatment for my family/friend</option>
								<option value="">Seeking treatment for my client/patient</option>
							</select>
							<div><button className="formSubmitButton">Submit</button></div>
						</form>
					</div>
			</div>
			</div>
		)



}




})