import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene15Sketch from '../p5js/scene15Sketch';

import '../css/scene3.css';

class Scene15 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 15</h1>

            <P5Wrapper sketch={scene15Sketch} />

            <div className="scene-changer">
              <p className="to-scene14"><Link to="/scene14">Scene 14</Link></p>
              <p className="to-scene15"><Link to="/scene15">Scene 15</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene15;