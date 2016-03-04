'use strict'

var React = require('react');
var $_GET=[];



module.exports = React.createClass({
	getInitialState: function(){
	},

	componentWillMount: function() {
	},

	render: function(){
		var _this = this;

		return(
			<div className="container">
			
			  <p id="p_id" className="contentContainer">
				Example Template
			  </p>
			  <script type="text/javascript" src="/scripts/components/webapi.js"></script>
			</div>
		)
	},
});