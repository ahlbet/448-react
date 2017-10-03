import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene5Sketch from '../p5js/scene5Sketch';

import '../css/scene3.css';

class Scene5 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 5</h1>

            <P5Wrapper sketch={scene5Sketch} />

            <div className="scene-changer">
              <p className="to-scene4"><Link to="/scene4">Scene 4</Link></p>
              <p className="to-scene6"><Link to="/scene6">Scene 6</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene5;