import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene9Sketch from '../p5js/scene9Sketch';

import '../css/scene3.css';

class Scene9 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 9</h1>

            <P5Wrapper sketch={scene9Sketch} />

            <div className="scene-changer">
              <p className="to-scene8"><Link to="/scene8">Scene 8</Link></p>
              <p className="to-scene10"><Link to="/scene10">Scene 10</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene9;