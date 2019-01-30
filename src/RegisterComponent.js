import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';

class RegisterComponent extends Component {

	constructor() {
	 	super();

	  	this.state = {
	  		username: "",
	  		password: ""
	  	}
  	}

    updateUsername = (event) => {
        this.setState({ username: event.target.value });
        this.validateUsername();
    }

    validateUsername = () => {

    	var invalidStyle = {
    		color: 'red'
    	}
    	var validStyle = {
    		color: 'green'
    	}

	    if (this.state.username.length < 4)
	    {
	    	return <p style={invalidStyle}>Username should be more than 4 characters.</p>
	    } else {
	    	return <p style={validStyle}>Username is valid</p>
	    }
    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    setUser = () => {

    	var salt = bcrypt.genSaltSync(10);
    	var hash = bcrypt.hashSync(this.state.password, salt);
        axios({
            method: "post",
            url: "http://localhost:8080/HeroesAPI/api/heroes/createAccount",
            data: {
                username: this.state.username,
                password: hash
            }
        });
    } 

  render() {
    return (
		<div className="logreg-body">
			<div className="card">
			    <h5 className="card-header info-color white-text text-center py-4">
			        <strong>Register</strong>
			    </h5>

			    <div className="card-body px-lg-5">
			        <form className="text-center">
			            <p>Already registered? Login now!</p>
			            <div className="md-form mt-3">
			            	<label for="username">Username</label>
			                <input type="text" id="username" className="form-control" value={this.state.username} onChange={this.updateUsername} />
			                {this.validateUsername()}
			            </div>

			            <div className="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.updatePassword} />
			            </div>
			            <button type="button" onClick={this.setUser} className="btn btn-outline-info btn-rounded">Register</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default RegisterComponent;
