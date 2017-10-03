import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene6Sketch from '../p5js/scene6Sketch';

import '../css/scene3.css';

class Scene6 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 6</h1>

            <P5Wrapper sketch={scene6Sketch} />

            <div className="scene-changer">
              <p className="to-scene5"><Link to="/scene5">Scene 5</Link></p>
              <p className="to-scene7"><Link to="/scene7">Scene 7</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene6;