import React, { Component } from 'react';
import './App.css';
import auth from './Auth.js';

class HomepageComponent extends Component {
  render() {
  	console.log(auth.isAuthenticated());
    return (
		<div className="main-body">
			<div className="banner">
				<img id="banner-img" alt="Banner" src={require("./images/banner.png")}/>
			</div>
			<div className="frontpage-collection">
				<div className="frontpage-account">
					<p>
					<h5>Register</h5>
						<a href="register">Register</a> an account to view all heroes, skills and types.
					</p>
					<p>
						<h5>Login</h5>
						Already have an account? <a href="login">Login now</a>!
					</p>
				</div>
			</div>
			<div id="video">
				<iframe width="500" height="300" src="https://www.youtube-nocookie.com/embed/0ecv0bT9DEo" 
				frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				lowfullscreen></iframe>
			</div>

			<hr/>
			<h2 id="recent-heroes-tag">Most Recent Heroes</h2>
			<div>
				<ul className="recent-heroes">
					<li>
						<img className="icon" alt="Nova" src={require("./images/nova.jpg")}/>
						<span className="hero-name">Nova</span>
					</li>
					<li>
						<img className="icon" alt="Auriel" src={require("./images/auriel.png")}/>
						<span className="hero-name">Auriel</span>
					</li>
					<li>
						<img className="icon" alt="Muradin" src={require("./images/muradin.jpg")}/>
						<span className="hero-name">Muradin</span>
					</li>
					<li>
						<img className="icon" alt="Deckard" src={require("./images/deckard.png")}/>
						<span className="hero-name">Deckard</span>
					</li>
					<li>
						<img className="icon" alt="Johanna" src={require("./images/johanna.jpg")}/>
						<span className="hero-name">Johanna</span>
					</li>
				</ul>
			</div>
		</div>
    );
  }
}

export default HomepageComponent;
