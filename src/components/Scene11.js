import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene11Sketch from '../p5js/scene11Sketch';

import '../css/scene3.css';

class Scene11 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 11</h1>

            <P5Wrapper sketch={scene11Sketch} />

            <div className="scene-changer">
              <p className="to-scene10"><Link to="/scene10">Scene 10</Link></p>
              <p className="to-scene12"><Link to="/scene12">Scene 12</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene11;