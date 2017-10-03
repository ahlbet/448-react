import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene3Sketch from '../p5js/scene3Sketch';

import '../css/scene3.css';

class Scene3 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 3</h1>

            <P5Wrapper sketch={scene3Sketch} /> 

            <div className="scene-changer">
              <p className="to-scene2"><Link to="/scene2">Scene 2</Link></p>
              <p className="to-scene4"><Link to="/scene4">Scene 4</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene3;