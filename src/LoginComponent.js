import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import auth from './Auth.js';
import bcrypt from 'bcryptjs';
import axios from 'axios';

class LoginComponent extends Component {

  constructor() {
 	super();
  	this.state = {
  		users: [],
  		username: "",
  		password: ""
  	}
  }

  updateUsername = (event) => {
      this.setState({ username: event.target.value });
      console.log(this.state.username);
  }
  updatePassword = (event) => {
      this.setState({ password: event.target.value });
  }

	setUser = () => {

		axios({
      method:'get',
      url:'http://localhost:8080/HeroesAPI/api/heroes/getAllAccounts',
  	})
    .then(response => {

      this.setState({
        users: response.data
      });

			var password = this.state.password;
			var username = this.state.username;

			this.props.callbackFromParent(this.state.username);

	    this.state.users.forEach(function(user) {

	    	if (bcrypt.compareSync(password, user.password)) {
	    		auth.login(() => {
	    			// this.props.history.push("/");
					});
	    	} else {
	    		console.log("error");
	    	}
	    })
  	})
	} 

  render(props) {

    return (
		<div class="logreg-body">
			<div class="card">
			    <h5 class="card-header info-color white-text text-center py-4">
			        <strong>Login</strong>
			    </h5>
			    <div class="card-body px-lg-5">
			        <form class="text-center">
			            <p>No account? Register here!</p>
			            <div class="md-form mt-3">
			            	<label for="username">Username</label>
			                <input type="text" id="username" class="form-control" value={this.state.username} onChange={this.updateUsername} />       
			            </div>
			            <div class="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" class="form-control" value={this.state.password} onChange={this.updatePassword} />
			            </div>
			            <button type="button" onClick={this.setUser} class="btn btn-outline-info btn-rounded">Login</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default LoginComponent;
