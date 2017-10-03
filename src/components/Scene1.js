import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene1Sketch from '../p5js/scene1Sketch';

import '../css/scene1.css';

class Scene1 extends Component {
  render() {
    return (
      <div>
        <div className="scene1-wrapper">
            <h1 className="scene-title">Scene 1</h1>

            <P5Wrapper sketch={scene1Sketch} />

            <div className="scene-changer">
                <p className="to-home"><Link to="/">Home</Link></p>
                <p className="to-scene2"><Link to="/scene2">Scene 2</Link></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Scene1;