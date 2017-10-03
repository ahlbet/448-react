import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene8Sketch from '../p5js/scene8Sketch';

import '../css/scene3.css';

class Scene8 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 8</h1>

            <P5Wrapper sketch={scene8Sketch} />

            <div className="scene-changer">
              <p className="to-scene7"><Link to="/scene7">Scene 7</Link></p>
              <p className="to-scene9"><Link to="/scene9">Scene 9</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene8;