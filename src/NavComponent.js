import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import Homepage from './HomepageComponent.js';
import Heroes from './HeroesComponent.js';
import Account from './AccountComponent.js';
import Register from './RegisterComponent.js';
import Login from './LoginComponent.js';
import SingleHero from './SingleHeroComponent.js';
import {ProtectedRoute} from './Protected.route';
import {UnprotectedRoute} from './Unprotected.route';
import Auth from './Auth.js';
import Cookies from 'universal-cookie';

class NavComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			usernameDataFromLogin: null,
			username: ""

		};
	}

	myCallback = (dataFromLogin) => {

		const cookies = new Cookies();

		cookies.set('username', dataFromLogin);
		this.setState({ 
			usernameDataFromLogin: dataFromLogin,
			username: cookies.get('username')
		});
	}

  render() {

  	  function loggedIn() {
  		if (Auth.isAuthenticated())
  		{
  			return <ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/heroes">Heroes</Link></li>
				<li><img id="nav-logo" alt="icon" src={require("./images/heroes-logo.png")}/></li>

				<li><Link to="/account">Account</Link></li>
				<li onClick={() => {
					Auth.logout(() => {
						console.log(Auth.isAuthenticated());
					});
				}}><Link to="/">Logout</Link></li>
			</ul>
  		} 
  		else
  		{
			return <ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/heroes">Heroes</Link></li>
				<li><img id="nav-logo" alt="nav-logo" src={require("./images/heroes-logo.png")}/></li>
				<li id="nav-register"><Link to="/register">Register</Link></li>
				<li id="nav-login"><Link to="/login">Login</Link></li>
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
				<ProtectedRoute path="/heroes" component={ Heroes } />
				<Route path="/hero/:id" component={SingleHero} />} />
				<ProtectedRoute path="/account" component={ Account } />
				<UnprotectedRoute path="/register" component={ Register } />
				<Route path="/login" render={() => <Login component={Login} callbackFromNav={this.myCallback} />} />
			</div>
		</Router>
    );
  }
}

export default NavComponent;
