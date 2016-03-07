var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({

render:function(){

	return(
			<div id="componentContainer">
				<div className="pageHeaderContainer">
					<div className="pageHeaderLeftContainer">
						<h2>Search Results</h2>
					</div>
					<div className="pageHeaderRightContainer">
						<input placeholder="Search Website"></input>
						<button><i className="fa fa-search"></i></button>
					</div>
				</div>
			<br/>
			<p>
				Hola
			</p>

			</div>
		)



}




})