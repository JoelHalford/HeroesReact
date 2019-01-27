import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import auth from "./Auth.js";

export const ProtectedRoute = ({component: Component, ...rest}) => {

	return (
		<Route 
		{...rest} 
		render= {props => {
			if (auth.isAuthenticated()) {
				return <Component {...props} />;
			} else {
				return <Redirect to={
					{
						pathname: "/",
						state: {
							from: props.location
						}
					}
				}/>
			}
			}}
		/>
	);
};
