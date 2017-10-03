import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene12Sketch from '../p5js/scene12Sketch';

import '../css/scene3.css';

class Scene12 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 12</h1>

            <P5Wrapper sketch={scene12Sketch} />

            <div className="scene-changer">
              <p className="to-scene11"><Link to="/scene11">Scene 11</Link></p>
              <p className="to-scene13"><Link to="/scene13">Scene 13</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene12;