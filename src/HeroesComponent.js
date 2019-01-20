import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
		<div class="main-body">
			<div class="intro">
				<h1 class="home-title">All heroes!</h1>
				<h5>A complete list of heroes.</h5>
			</div>
			<div class="all-heroes">
				<ul>
					<li>
						<img  class="hero-image-thumb" src={this.state.image}/>
						<span class="image-thumb-text">Nova</span>
					</li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
					<li><img  class="hero-image-thumb" src={this.state.image}/></li>
				</ul>
			</div>
			
		</div>
    );
  }
}

export default HeroesComponent;
