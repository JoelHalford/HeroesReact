import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Homepage from './HomepageComponent.js';
import Heroes from './HeroesComponent.js';
import Battlegrounds from './BattlegroundsComponent.js';
import Register from './RegisterComponent.js';
import Login from './LoginComponent.js';

class NavComponent extends Component {
  render() {
    return (
    	<Router>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/heroes">Heroes</Link></li>
					<li><Link to="/battlegrounds">Battlegrounds</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>

				<Route exact path="/" component={ Homepage } />
				<Route path="/heroes" component={ Heroes } />
				<Route path="/battlegrounds" component={ Battlegrounds } />
				<Route path="/register" component={ Register } />
				<Route path="/login" component={ Login } />
			</nav>

		</Router>
    );
  }
}

export default NavComponent;
