import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class RegisterComponent extends Component {

  constructor() {
  	super();

  	this.state = {
  		username: "",
  		password: ""
  	}


  }

    setUser = () => {

    	console.log(this.state.username);
        axios({
            method: "post",
            url: "http://localhost:8080/HeroesAPI/api/heroes/createAccount",
            data: {
                username: this.state.username,
                password: this.state.password
            }
        });
    } 

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
			            	<label for="username">Username</label>
			                <input type="text" id="username" class="form-control" value={this.state.username} />
			                
			            </div>

			            <div class="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" class="form-control" value={this.state.password} />
			            </div>
			            <button onClick={this.setUser} class="btn btn-outline-info btn-rounded">Register</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default RegisterComponent;
