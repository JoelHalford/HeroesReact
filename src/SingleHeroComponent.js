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
  		classIcon: "https://vignette.wikia.nocookie.net/heroesofthestorm/images/0/0e/IconSupport.png/revision/latest?cb=20140807220510",
  		universeTxt: "Warcraft",
  		universe: "https://cdn.freebiesupply.com/logos/large/2x/world-of-warcraft-logo-png-transparent.png",
  		desc: "Once the apprentice of the Archmage Antonidas, Jaina Proudmoore led the survivors of Lordaeron to Kalimdor and founded the city of Theramore. Now, she serves the Alliance as a powerful voice fighting for reason and diplomacy.",
  		difficulty: "Easy",
  		image: 'https://i.pinimg.com/236x/06/25/28/062528e28c008ae0f185a7e240f634a7.jpg',
  		basic1: 'Frostbolt',
  		basic2: 'Blizzard',
  		basic3: 'Cone of Cold',
  		ult1:   'Ring of Frost',
  		ult2:   'Summon Water Elemental',
  		passive: 'Frostbite' 
  	}
  }

  render() {
    return (
		<div class="main-body single-hero-body">
			<h1 class="home-title"><img id="universe-logo" src={this.state.universe}/> {this.state.name}</h1>
			<div id="hero-intro-text">
				<h5>Class: <span class="hero-intro-text-small">{this.state.class}<img  class="hero-class-image" src={this.state.classIcon}/></span></h5>
				<h5>Universe: <span class="hero-intro-text-small">{this.state.universeTxt}<img  class="hero-class-image" src={this.state.universe}/></span></h5>
				<h5>Difficulty: <span class="hero-intro-text-small">{this.state.difficulty}</span></h5>
			</div>
			<div class="hero-intro">
				<img  id="hero-image" src={this.state.image}/>
			</div>
			<div class="more-hero">
				<div class="hero-description">
					<h4>Description</h4>
					<p>
						{this.state.desc}
					</p>
				</div>
				<div class="hero-talents">
					<h4>Talents</h4>
					<p><strong>Basic 1:</strong> {this.state.basic1}</p>
					<p><strong>Basic 2:</strong> {this.state.basic2}</p>
					<p><strong>Basic 3:</strong> {this.state.basic3}</p>
					<p><strong>Ult 1:</strong> {this.state.ult1}</p>
					<p><strong>Ult 2:</strong> {this.state.ult2}</p>
					<p><strong>Passive:</strong> {this.state.passive}</p>
				</div>
			</div>		
		</div>
    );
  }
}

export default HeroesComponent;
