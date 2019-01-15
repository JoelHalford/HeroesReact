import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class HeroesComponent extends Component {
  
  constructor() {

  	super();
  	this.state = {
  		name: "Jaina",
  		class: "Assassin",
  		universeTxt: "Warcraft",
  		universe: "https://cdn.freebiesupply.com/logos/large/2x/world-of-warcraft-logo-png-transparent.png",
  		desc: "Once the apprentice of the Archmage Antonidas, Jaina Proudmoore led the survivors of Lordaeron to Kalimdor and founded the city of Theramore. Now, she serves the Alliance as a powerful voice fighting for reason and diplomacy.",
  		difficulty: "Easy",
  		image: 'https://i.pinimg.com/236x/06/25/28/062528e28c008ae0f185a7e240f634a7.jpg'
  	}
  }

  render() {
    return (
		<div class="main-body">
			<h1 class="home-title"><img id="universe-logo" src={this.state.universe}/> {this.state.name}</h1>		
			<div class="hero-intro">
				<img  id="hero-image" src={this.state.image}/>
				<div id="hero-intro-text">
					<h5>Class: <span class="hero-intro-text-small">{this.state.class}</span></h5>
					<h5>Universe: <span class="hero-intro-text-small">{this.state.universeTxt}</span></h5>
					<h5>Difficulty: <span class="hero-intro-text-small">{this.state.difficulty}</span></h5>
				</div>
			</div>
			<div class="hero-description">
				<h4>Description</h4>
				<p>
					{this.state.desc}
				</p>
			</div>
			<div class="hero-talents">
				
			</div>			
		</div>
    );
  }
}

export default HeroesComponent;
