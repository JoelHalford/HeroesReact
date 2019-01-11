import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RegisterComponent extends Component {
  render() {
    return (
		<div class="main-body">
			<div class="intro">
				<h1>Register</h1>
				<h5>Register an account for free to access VIP areas.</h5>
			</div>
			<div id="formContainer">
				<form id="logRegForm">
				    <label for="username">Username</label>
				    <input type="username" id="username" aria-describedby="usernameHelp" placeholder="Enter username"/>

				    <label for="password">Password</label>
				    <input type="password" id="password" placeholder="Enter Password"/>

				  	<button id="logRegForm" type="submit">Submit</button>
				</form>
			</div>
		</div>
    );
  }
}

export default RegisterComponent;
