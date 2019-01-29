import React, { Component } from 'react';
import './App.css';
import auth from './Auth.js';

class HomepageComponent extends Component {
  render() {

  	console.log(auth.isAuthenticated());
    return (
		<div className="main-body">
			<div className="banner">
				<img id="banner-img" src={require("./images/banner.png")}/>
			</div>
			<h2>Register</h2>
			<p>
				<a href="register">Register</a> an account to view all heroes, skills and types.
			</p>
			<hr/>
			<h2>Login</h2>
			<p>
				Already have an account? <a href="login">Login now</a>!
			</p>
			<hr/>
			<h2>Most Recent Heroes</h2>
			<div>
				<ul className="recent-heroes">
					<li>
						<img className="icon" src={require("./images/nova.jpg")}/>
						<span className="hero-name">Nova</span>
					</li>
					<li>
						<img className="icon" src={require("./images/auriel.png")}/>
						<span className="hero-name">Auriel</span>
					</li>
					<li>
						<img className="icon" src={require("./images/muradin.jpg")}/>
						<span className="hero-name">Muradin</span>
					</li>
					<li>
						<img className="icon" src={require("./images/deckard.png")}/>
						<span className="hero-name">Deckard</span>
					</li>
					<li>
						<img className="icon" src={require("./images/johanna.jpg")}/>
						<span className="hero-name">Johanna</span>
					</li>
				</ul>
			</div>
		</div>
    );
  }
}

export default HomepageComponent;
