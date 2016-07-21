'use strict';

var React = require('react');

var AboutPage = React.createClass({
	render: function() {
		return(
			<div>
				<h3>Features</h3>
				<ul>
					<li>Multiple Store Support</li>
					<li>Easily Maintain Store Sections</li>
					<li>Organize  Items by Store and  Section</li>
					<li>Add / Delete / Track status for all List Items</li>
					<li>Easy delete for selected  Items</li>
					<li>Move items to another store</li>
				</ul>
				<h3>Design Features</h3>
				<ul>
					<li>ReactJS Web application framework</li>
					<li>Responsive Page Design adapts to Phone / Tablet / PC  display</li>
					<li>noSQL Complex Object Creation, Maintenance, Storage  with  MongoDB</li>
					<li>Constant Build Integration to streamline application update process</li>
					<li>GIT based CVS with GitHub team integration</li>
				</ul>


				<h2> DSU Code School 2016 Design Team</h2>
				<ul>
					<li> Matt Evans </li>
					<li> Doug Osborn </li>
					<li> William Chatwin</li>
					<li> Jake Duckett</li>
				</ul>
				<h2> Technology Stack </h2>
				<ul>
					<li> Javascript / NodeJS / npm </li>
					<li> ReactJS Single Page Application Framework</li>
					<li> Express Library for Web/HTTP Services </li>
					<li> Gulp streaming build system </li>
					<li> BootStrap CSS Framework </li>
					<li> MongoDB  with Mongoose React integration  </li>
				</ul>

			</div>
		

	
			
					
				
		);
	}
});

module.exports = AboutPage;
