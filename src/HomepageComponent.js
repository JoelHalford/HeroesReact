import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import auth from './Auth.js';

class HomepageComponent extends Component {
  render() {

  	console.log(auth.isAuthenticated());
    return (
		<div class="main-body">
			<div class="banner">
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
			<p>
				<ul class="recent-heroes">
					<li>
						<img class="icon" src={require("./images/nova.jpg")}/>
						<span class="hero-name">Nova</span>
					</li>
					<li>
						<img class="icon" src={require("./images/auriel.png")}/>
						<span class="hero-name">Auriel</span>
					</li>
					<li>
						<img class="icon" src={require("./images/muradin.jpg")}/>
						<span class="hero-name">Muradin</span>
					</li>
					<li>
						<img class="icon" src={require("./images/deckard.png")}/>
						<span class="hero-name">Deckard</span>
					</li>
					<li>
						<img class="icon" src={require("./images/johanna.jpg")}/>
						<span class="hero-name">Johanna</span>
					</li>
				</ul>
			</p>
		</div>
    );
  }
}

export default HomepageComponent;
