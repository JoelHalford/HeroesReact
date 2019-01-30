import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import auth from './Auth.js';

class AccountComponent extends Component {

	constructor(props) {
		super(props);

		const cookies = new Cookies();

		this.state = {
			usernameDataFromLogin: null,
			username: cookies.get('username')
		};
	}

	delete = () => {
		axios({
      method:'get',
      url:'http://localhost:8080/HeroesAPI/api/heroes/getAllAccounts',
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
	    			url: 'http://localhost:8080/HeroesAPI/api/heroes/deleteAccount/' + user.userID
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

  	// update = () => {
	  // 	axios({
	  // 		method:'get',
   //    	url:'http://localhost:8080/HeroesAPI/api/heroes/getAllAccounts',
	  // 	})
	  // 	.then(response =>
	  // 	{      	
   //    	var username = this.state.username;
	  //   	this.state.users.forEach(function(user) {	    		
	    		
	  //   		if (username === user.username) {
		 //    		axios({
		 //    			method: 'put',
		 //    			url: 'http://localhost:8080/HeroesAPI/api/heroes/updateAccount/' + user.userID,
		 //    			data: {
		 //    				username: username,

		 //    			}
		 //    		})
		 //    		.then(response => {
		 //    			auth.logout();
		 //    		})
	  //   		}
	  // 	})
  	// })}

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
			                <input type="text" id="username" className="form-control" value={this.state.username} onChange={this.updateUsername} />       
			            </div>
			            <div className="md-form">
			            	<label for="password">Password</label>
			                <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.updatePassword} />
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
