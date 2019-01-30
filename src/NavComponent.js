import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
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
import Test from './TestComponent.js';
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

		console.log("hi: " + dataFromLogin);
		cookies.set('username', dataFromLogin);
		this.setState({ 
			usernameDataFromLogin: dataFromLogin ,
			username: cookies.get('username')
		});
	}

  render() {

  	  function loggedIn() {
  	  	console.log(Auth.isAuthenticated());
  		if (Auth.isAuthenticated())
  		{
  			return <ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/heroes">Heroes</Link></li>
						<li><img id="nav-logo" src={require("./images/heroes-logo.png")}/></li>

						<li><Link to="/test">Test</Link></li>
						<li><Link to="/account">Account</Link></li>
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
				<ProtectedRoute path="/heroes" component={ Heroes } />
				<Route path="/hero/:id" component={SingleHero} />} />
				<ProtectedRoute path="/account" component={ Account } />
				<UnprotectedRoute path="/register" component={ Register } />
				<Route path="/login" render={() => <Login component={Login} callbackFromNav={this.myCallback} />} />

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
