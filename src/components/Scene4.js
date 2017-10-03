import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene4Sketch from '../p5js/scene4Sketch';

import '../css/scene3.css';

class Scene4 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 4</h1>

            <P5Wrapper sketch={scene4Sketch} /> 

            <div className="scene-changer">
              <p className="to-scene3"><Link to="/scene3">Scene 3</Link></p>
              <p className="to-scene4"><Link to="/scene5">Scene 5</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene4;