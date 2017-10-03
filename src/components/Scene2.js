import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene2Sketch from '../p5js/scene2Sketch';

import '../css/scene2.css';

class Scene2 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 2</h1>

            <h3 className="scene2-subtitle">
              the stage directions:
            </h3>

            <P5Wrapper sketch={scene2Sketch} />

            <div className="scene-changer">
              <p className="to-scene1"><Link to="/scene1">Scene 1</Link></p>
              <p className="to-scene3"><Link to="/scene3">Scene 3</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene2;