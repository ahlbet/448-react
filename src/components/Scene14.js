import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import P5Wrapper from 'react-p5-wrapper';
import scene14Sketch from '../p5js/scene14Sketch';

import '../css/scene3.css';

class Scene14 extends Component {
  render() {
    return (
      <div>
        <div className="scene2-wrapper">
            <h1 className="scene-title">Scene 14</h1>

            <P5Wrapper sketch={scene14Sketch} />

            <div className="scene-changer">
              <p className="to-scene13"><Link to="/scene13">Scene 13</Link></p>
              <p className="to-scene15"><Link to="/scene15">Scene 15</Link></p>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Scene14;