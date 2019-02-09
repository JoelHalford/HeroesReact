import React, { Component } from 'react';
import './App.css';
import auth from './Auth.js';
import bcrypt from 'bcryptjs';
import axios from 'axios';

// const URL = "http://localhost:8080";
const URL = "http://heroes-react.uksouth.cloudapp.azure.com:8080";

class LoginComponent extends Component {

  constructor() {
 	super();
  	this.state = {
  		users: [],
  		username: "",
  		password: "",
  		error: ""
  	}
  }

  updateUsername = (event) => {
      this.setState({ username: event.target.value });
  }
  updatePassword = (event) => {
      this.setState({ password: event.target.value });
  }

	setUser = () => {
		axios({
      method:'get',
      url: URL + '/HeroesAPI/api/account/getAllAccounts',
  	})
    .then(response => {

      this.setState({
        users: response.data
      });
			var password = this.state.password;
			var username = this.state.username;
			this.props.callbackFromNav(this.state.username);
	    	this.state.users.forEach(function(user) {

	    	if (username === user.username && bcrypt.compareSync(password, user.password)) {
	    		console.log("waddup");
	    		auth.login(() => {
					});
	    	} else {
	    		this.setState({
	    			error: "Username or password invalid."
	    		})
	    	}	    	
	    })
  	})
	} 

  render() {
    return (
		<div className="logreg-body">
			<div className="card">
			    <h5 className="card-header info-color white-text text-center py-4">
			        <strong>Login</strong>
			    </h5>
			    <div className="card-body px-lg-5">
			        <form className="text-center">
			            <p>No account? Register here!</p>
			            <div className="md-form mt-3">
			            	<label for="username">Username</label>
			                <input type="text" id="username" className="form-control" value={this.state.username} onChange={this.updateUsername} />       
			            </div>
			            <div className="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.updatePassword} />
			            </div>
			            <p id="error-message">{this.state.error}</p>
			            <button id="login-button" type="button" onClick={this.setUser} className="btn btn-outline-info btn-rounded">Login</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default LoginComponent;
