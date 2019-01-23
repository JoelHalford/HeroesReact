import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class HeroesComponent extends Component {

	constructor() {
	  	super();

	  	this.state = {
	  		heroes: [],
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

	  axios({
        method:'get',
        url:'http://localhost:8080/HeroesAPI/api/heroes/getAllHeroes',
	  })
      .then(response => {
      	console.log(response.data)
        //logic to whether is should be set to something else
          this.setState({
            heroes: response.data
           });
    	})
  }

  render() {

	let heroes = this.state.heroes.map((hero, i) => (
		<li>
			<a href={"hero/" + hero.heroID}><img class="hero-image-thumb" src={require("./images/heroes/" + hero.image)}/></a>
			<span className="image-thumb-text">{hero.name}</span>
		</li>
    ));
    return (
		<div className="main-body">
			<div className="intro">
				<h5>View List of Heroes</h5>
				<input type="text" name="search" placeholder="Search heroes"/>
			</div>
			<div className="all-heroes-limiter">
				<img class="active" src={require("./images/Warrior.png")}/>
				<img class="active" src={require("./images/assassin.png")}/>
				<img class="active" src={require("./images/support.png")}/>
				<img class="active" src={require("./images/specialist.png")}/>
			</div>
			<div className="all-heroes">
				<ul>
					{heroes}
				</ul>
			</div>
			
		</div>
    );
  }
}

export default HeroesComponent;
