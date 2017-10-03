import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene13Sketch from '../p5js/scene13Sketch';

import '../css/scene3.css';

class Scene13 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 13</h1>

            <P5Wrapper sketch={scene13Sketch} />

            <div className="scene-changer">
              <p className="to-scene12"><Link to="/scene12">Scene 12</Link></p>
              <p className="to-scene14"><Link to="/scene14">Scene 14</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene13;