import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene10Sketch from '../p5js/scene10Sketch';

import '../css/scene3.css';

class Scene10 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 10</h1>

            <P5Wrapper sketch={scene10Sketch} />

            <div className="scene-changer">
              <p className="to-scene9"><Link to="/scene9">Scene 9</Link></p>
              <p className="to-scene11"><Link to="/scene11">Scene 11</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene10;