import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene7Sketch from '../p5js/scene7Sketch';

import '../css/scene3.css';

class Scene7 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 7</h1>

            <P5Wrapper sketch={scene7Sketch} />

            <div className="scene-changer">
              <p className="to-scene6"><Link to="/scene6">Scene 6</Link></p>
              <p className="to-scene8"><Link to="/scene8">Scene 8</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene7;