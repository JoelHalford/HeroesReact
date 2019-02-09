import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import auth from './Auth.js';

// const URL = "http://localhost:8080";
const URL = "http://heroes-react.uksouth.cloudapp.azure.com:8080";

class AccountComponent extends Component {

	constructor(props) {
		super(props);

		const cookies = new Cookies();

		this.state = {
			usernameDataFromLogin: null,
			username: cookies.get('username'),
			newUsername: "",
			users: [],
			error: ""
		};
	}

	delete = () => {
		axios({
      method:'get',
      url: URL + '/HeroesAPI/api/account/getAllAccounts',
  	})
    .then(response => {

      this.setState({
        users: response.data
      });
      		var username = this.state.username;

	    	this.state.users.forEach(function(user) {
	    		
	    	if (username === user.username) {

	    		axios({
	    			method: 'delete',
	    			// url: 'http://heroes-react.uksouth.cloudapp.azure.com:8080/HeroesAPI/api/account/deleteAccount/' + user.userID
	    			url: URL + '/HeroesAPI/api/account/deleteAccount/' + user.userID
	    		})
	    		.then(response => {
	    			auth.logout();
	    		})

	    	} else {
	    		console.log("error");
	    	}
	    })
  	})
	} 

  	update = () => {
	  	axios({
	  		method:'get',
	      	url: URL + '/HeroesAPI/api/account/getAllAccounts',
	  	})
	  	.then(response =>
	  	{      
			let username = this.state.username;
			let newUsername = this.state.newUsername;

	  		this.setState({
	  			users: response.data
	  		})

	    	this.state.users.forEach(function(user) {	    		
	    		
	    		if (username === user.username) {
		    		axios({
		    			method: 'put',
		    			url: URL + '/HeroesAPI/api/account/updateAccount/' + user.userID,
		    			data: {
		    				username: newUsername,
		    				password: user.password
		    			}
		    		})
		    		.then(response => {

		    			const cookies = new Cookies();

		    			cookies.set('username', newUsername);
		    			setTimeout(function(){
			            	window.location.reload();
			            }, 2000);
		    		})
		    		.catch(error => {
		    			console.log(error);
		    		})
	    		}
	  	})
  	})}

    updateUsername = (event) => {
        this.setState({ newUsername: event.target.value });
    }

  render() {

    return (
		<div className="logreg-body">
			<div className="card">
			    <h5 className="card-header info-color white-text text-center py-4">
			        <strong>Welcome, {this.state.username}</strong>
			    </h5>
			    <div className="card-body px-lg-5">
			        <form className="text-center">
			            <p>Feel free to update or delete your account.</p>
			            <div className="md-form mt-3">
			            	<label for="username">Username</label>
			                <input type="text" id="username" className="form-control" onChange={this.updateUsername} />       
			            </div>
			            <button type="button" id="updateBtn" onClick={this.update} className="btn btn-outline-info btn-rounded">Update</button>
			            <button type="button" id="deleteBtn" onClick={this.delete} className="btn btn-outline-danger btn-rounded">Delete</button>
			        </form>
			    </div>
			</div>
		</div>
    );
  }
}

export default AccountComponent;
