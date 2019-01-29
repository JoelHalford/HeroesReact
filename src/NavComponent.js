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

	constructor(props) {
		super(props);
		this.state = {
			usernameDataFromChild: null
		};
	}

	myCallback = (dataFromChild) => {
		console.log("hi: " + dataFromChild);
		this.setState({ usernameDataFromChild: dataFromChild });
	}

  render() {

  	function loggedIn() {
  		if (Auth.isAuthenticated())
  		{
  			return <ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/heroes">Heroes</Link></li>
						<li><img id="nav-logo" src={require("./images/heroes-logo.png")}/></li>

						<li><Link to="/test">Test</Link></li>
						<li>{this.state.usernameDataFromChild}</li>
						<li onClick={() => {
							Auth.logout(() => {
								console.log(Auth.isAuthenticated());
							});
						}}>Logout</li>
					</ul>
  		} 
  		else
  		{
				return <ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/heroes">Heroes</Link></li>
					<li><img id="nav-logo" src={require("./images/heroes-logo.png")}/></li>

					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
  		}
  	}
    return (
    	<Router>
	    	<div>
				<nav>
					{loggedIn()}
				</nav>
				<Route exact path="/" component={ Homepage } />
				<Route path="/heroes" component={ Heroes } />
				<Route path="/hero/:id" component={SingleHero} />} />
				<Route path="/register" component={ Register } />
				<Route path="/login" render={() => <Login component={Login} callbackFromParent={this.myCallback} />} />

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
