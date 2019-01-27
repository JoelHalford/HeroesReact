import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Homepage from './HomepageComponent.js';
import Heroes from './HeroesComponent.js';
import Battlegrounds from './BattlegroundsComponent.js';
import Register from './RegisterComponent.js';
import Login from './LoginComponent.js';
import SingleHero from './SingleHeroComponent.js';
import {ProtectedRoute} from './Protected.route';
import Test from './TestComponent.js';
import Auth from './Auth.js';


class NavComponent extends Component {
  render() {
    return (
    	<Router>
	    	<div>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/heroes">Heroes</Link></li>
						<li><img id="nav-logo" src={require("./images/heroes-logo.png")}/></li>
						<li><Link to="/register">Register</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/test">Test</Link></li>
						<li onClick={() => {
							Auth.logout(() => {
								console.log(Auth.isAuthenticated());
							});
						}}>Logout</li>

					</ul>
				</nav>
				<Route exact path="/" component={ Homepage } />
				<Route path="/heroes" component={ Heroes } />
				<Route path="/hero/:id" component={SingleHero} />} />
				<Route path="/register" component={ Register } />
				<Route path="/login" component={ Login } />
				<ProtectedRoute 
					exact
					path="/test" 
					component={ Test } 
				/>
			</div>
		</Router>
    );
  }
}

export default NavComponent;
