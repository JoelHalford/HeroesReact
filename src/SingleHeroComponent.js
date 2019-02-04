import React, { Component } from 'react';
import './App.css';
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
      url:'http://35.246.20.21:8081/HeroesAPI/api/heroes/hero/' + props.match.params.id
    })
   .then(response => {
    //logic to whether is should be set to something else
      this.setState({
        heroes: response.data
       });
	})
  }

  render() {

    var hero;
  	const heroN = this.state.heroes.image;
  	const images = require.context('./images/heroes', true);
  	const heroName = heroN;
  	if (heroName === undefined)
  	{
  		hero = "https://via.placeholder.com/206x300";
  	} else
  	{
  		hero = images('./' + heroName);
  	}
  	
    return (
		<div className="main-body single-hero-body">
			<h1 className="home-title">{this.state.heroes.name}</h1>
			<h4 className="home-title">{this.state.heroes.tag}</h4>
			<div id="hero-intro-text">												
				<h5>Class: <span className="hero-intro-text-small">{this.state.heroes.heroClass} <img className="hero-class-image" alt={this.state.heroes.heroClass} /></span></h5>
				<h5>Universe: <span className="hero-intro-text-small">{this.state.heroes.universe}<img className="hero-class-image" alt={this.state.heroes.universe} src={this.state.universe}/></span></h5>
				<h5>Difficulty: <span className="hero-intro-text-small">{this.state.heroes.difficulty}</span></h5>
			</div>
			<div className="hero-intro">
			<img id="hero-image" src={hero} alt="hero name" />
			<div className="hero-description">
				<h4>Description</h4>
				<p>
					{this.state.heroes.description}
				</p>
			</div>
			</div>        
  <table id="skill-table" className="table table-hover table-dark">
    <tbody>
      <tr>
        <td className="table-head">Basic 1</td>
        <td className="table-head">Basic 2</td>
        <td className="table-head">Basic 3</td>
      </tr>
      <tr>
        <td>{this.state.heroes.basic1}</td>
        <td>{this.state.heroes.basic2}</td>
        <td>{this.state.heroes.basic3}</td>
      </tr>
      <tr>
        <td className="table-head">Ult 1</td>
        <td className="table-head">Ult 2</td>
      </tr>
      <tr>
        <td>{this.state.heroes.ult1}</td>
        <td>{this.state.heroes.ult2}</td>
      </tr>
      <tr>
        <td className="table-head">Trait</td>
      </tr>
      <tr>
        <td>{this.state.heroes.trait}</td>
      </tr>
    </tbody>
  </table>
  <br/>
		</div>
    );
  }
}

export default HeroesComponent;
