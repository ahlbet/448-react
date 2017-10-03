import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import P5Wrapper from 'react-p5-wrapper';
import homeSketch from '../p5js/homeSketch';

import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-wrapper">
        	<h1 className="home-title">
        		4.48 Psychosis: A Play by Sarah Kane
        	</h1>

        	<h3 className="home-subtitle">
        		8.44 OsiS: A Web Experience by Dylan Stratton 
        	</h3>

        	<h5 className="home-hook">
        		inhale and explore and exhale
        	</h5>

        	<h6 className="home-final-thought">
        		please close the curtains
        	</h6>

        	<P5Wrapper sketch={homeSketch} />

            <div className="scene-changer">
                <p className="to-scene1"><Link to="/scene1"> Scene 1 </Link></p>
            </div>
        	

        </div>
      </div>
    );
  }
}

export default Home;