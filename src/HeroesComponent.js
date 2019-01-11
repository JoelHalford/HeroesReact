import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HeroesComponent extends Component {
  render() {
    return (
		<div class="main-body">
			<div class="intro">
				<h1 class="home-title">All heroes!</h1>
				<h5>A complete list of heroes.</h5>
			</div>
			<div class="all-heroes">
				<ul>
					<div>
						<li>Hero 1</li>
						<li>Hero 2</li>
						<li>Hero 3</li>
						<li>Hero 4</li>
						<li>Hero 5</li>
					</div>
					<div>
						<li>Hero 6</li>
						<li>Hero 7</li>
						<li>Hero 8</li>
						<li>Hero 9</li>
						<li>Hero 10</li>
					</div>
				</ul>
			</div>
			
		</div>
    );
  }
}

export default HeroesComponent;
