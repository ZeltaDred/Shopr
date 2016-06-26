'use strict';

var React = require('react');
var Link = require('react-router').Link;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;

var Header = React.createClass({
	render: function() {
		return(
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Shopr App</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});

module.exports = Header;
