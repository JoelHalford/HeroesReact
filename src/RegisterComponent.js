import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';

class RegisterComponent extends Component {

	constructor() {
	 	super();

	  	this.state = {
	  		username: "",
	  		password: "",
	  		error: ""
	  	}
  	}

    updateUsername = (event) => {
        this.setState({ username: event.target.value });
        this.validateUsername();
    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
        this.validatePassword();
    }

    validateUsername = () => {
	    if (this.state.username.length < 4) {
	    	return <p className="invalidInput">Username should be between 4 and 12 characters.</p>
	    }  else if (this.state.username.length > 12) {
	    	return <p className="invalidInput">Username should be between 6 and 12 characters.</p>
	    } else  {
	    	return <p className="validInput">Username is valid</p>
	    }
    }

    validatePassword = () => {
	    if (this.state.password.length < 1) {
	    	console.log(this.state.password.length );
	    	return <p className="invalidInput">Password cannot be empty.</p>
	    } else  {
	    	return <p className="validInput">Password is valid</p>
	    }
    }

    setUser = () => {

    	var salt = bcrypt.genSaltSync(10);
    	var hash = bcrypt.hashSync(this.state.password, salt);
        axios({
            method: "post",
            url: "http://localhost:8080/HeroesAPI/api/account/createAccount",
            data: {
                username: this.state.username,
                password: hash
            }
        }).then(resp => {
        	this.setState({
        		error: "Account created successfully."
        	});
            setTimeout(function(){
            	window.history.back();
            }, 2000);
        }).catch(error => {
        	this.setState({
        		error: "Error occured. Please try again with different credentials."
        	})
        })
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
			                <input type="text" id="username" className="form-control" value={this.state.username} onChange={this.updateUsername} required />
			                {this.validateUsername()}
			            </div>

			            <div className="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.updatePassword} required />
			                {this.validatePassword()}
			            </div>
			            <p>{this.state.error}</p>
			            <button type="button" onClick={this.setUser} className="btn btn-outline-info btn-rounded">Register</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default RegisterComponent;
