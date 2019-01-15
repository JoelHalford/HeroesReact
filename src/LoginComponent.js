import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LoginComponent extends Component {
  render() {
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
			                <input type="text" id="username" class="form-control"/>			                
			            </div>

			            <div class="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" class="form-control"/>
			            </div>
			            <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Register</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default LoginComponent;
