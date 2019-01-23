import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import axios from 'axios';

class HeroesComponent extends Component {
  
  constructor(props) {
  	super();
		this.state = {
  			heroes: "",
  			image: ""
  		}

	  	axios({
	      method:'get',
	      url:'http://localhost:8080/HeroesAPI/api/heroes/hero/' + props.match.params.id
	    })
	  .then(response => {
	    //logic to whether is should be set to something else
	      this.setState({
	        heroes: response.data
	       });
		})
  }

  render() {
  	const heroN = this.state.heroes.image;
  	const images = require.context('./images/heroes', true);
  	const heroName = heroN;
  	console.log(heroName);
  	if (heroName == undefined)
  	{
  		var hero = "https://via.placeholder.com/206x300";
  	} else
  	{
  		var hero = images('./' + heroName);
  	}
  	
    return (
		<div class="main-body single-hero-body">
			<h1 class="home-title">{this.state.heroes.name}</h1>
			<h4 class="home-title">{this.state.heroes.tag}</h4>
			<div id="hero-intro-text">												
				<h5>Class: <span class="hero-intro-text-small">{this.state.heroes.heroClass} <img class="hero-class-image" /></span></h5>
				<h5>Universe: <span class="hero-intro-text-small">{this.state.heroes.universe}<img class="hero-class-image" src={this.state.universe}/></span></h5>
				<h5>Difficulty: <span class="hero-intro-text-small">{this.state.heroes.difficulty}</span></h5>
			</div>
			<div class="hero-intro">
			<img id="hero-image" src={hero}/>
			</div>
			<div class="more-hero">
				<div class="hero-description">
					<h4>Description</h4>
					<p>
						{this.state.heroes.description}
					</p>
				</div>
				<div class="hero-talents">
					<h4>Talents</h4>
					<p><strong>Basic 1:</strong> {this.state.heroes.basic1}</p>
					<p><strong>Basic 2:</strong> {this.state.heroes.basic2}</p>
					<p><strong>Basic 3:</strong> {this.state.heroes.basic3}</p>
					<p><strong>Ult 1:</strong> {this.state.heroes.ult1}</p>
					<p><strong>Ult 2:</strong> {this.state.heroes.ult2}</p>
					<p><strong>Passive:</strong> {this.state.heroes.trait}</p>
				</div>
			</div>		
		</div>
    );
  }
}

export default HeroesComponent;
