import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class HeroesComponent extends Component {

	constructor() {
	  	super();

	  	this.state = {
	  		heroes: []
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
		<li className="single-hero-li">
			<a href={"hero/" + hero.heroID}><img className="hero-image-thumb" alt={hero.name} src={require("./images/heroes/" + hero.image )}/></a>
			<span className="image-thumb-text">{hero.name}</span>
		</li>
    ));

    return (
		<div className="main-body">
			<div className="intro">
				<h5>View List of Heroes</h5>
				<input id="searchHero" type="text" name="search" placeholder="Search heroes"/>
			</div>
			<div className="all-heroes-limiter">
				<img className="active" alt="Warrior" src={require("./images/Warrior.png")}/>
				<img className="active" alt="Assassin" src={require("./images/assassin.png")}/>
				<img className="active" alt="Support" src={require("./images/support.png")}/>
				<img className="active" alt="Specialist" src={require("./images/specialist.png")}/>
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