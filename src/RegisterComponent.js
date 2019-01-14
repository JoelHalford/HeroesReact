import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RegisterComponent extends Component {
  render() {
    return (
		<div class="logreg-body">
			<div class="card">

			    <h5 class="card-header info-color white-text text-center py-4">
			        <strong>Register</strong>
			    </h5>

			    <div class="card-body px-lg-5">
			        <form class="text-center">
			            <p>Already registered? Login now!</p>
			            <div class="md-form mt-3">
			            	<label for="materialSubscriptionFormPasswords">Username</label>
			                <input type="text" id="materialSubscriptionFormPasswords" class="form-control"/>
			                
			            </div>

			            <div class="md-form">
			            	<label for="materialSubscriptionFormEmail">Password</label>
			                <input type="password" id="materialSubscriptionFormEmail" class="form-control"/>
			            </div>
			            <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Register</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default RegisterComponent;
