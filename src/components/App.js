import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';
import Scene6 from './Scene6';
import Scene7 from './Scene7';
import Scene8 from './Scene8';
import Scene9 from './Scene9';
import Scene10 from './Scene10';
import Scene11 from './Scene11';
import Scene12 from './Scene12';
import Scene13 from './Scene13';
import Scene14 from './Scene14';
import Scene15 from './Scene15';

import '../css/App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">

	        <Route exact path="/" component={Home} />
	        <Route path="/scene1" component={Scene1} />
	        <Route path="/scene2" component={Scene2} />
	        <Route path="/scene3" component={Scene3} />
	        <Route path="/scene4" component={Scene4} />
	        <Route path="/scene5" component={Scene5} />
	        <Route path="/scene6" component={Scene6} />
	        <Route path="/scene7" component={Scene7} />
	        <Route path="/scene8" component={Scene8} />
	        <Route path="/scene9" component={Scene9} />
	        <Route path="/scene10" component={Scene10} />
	        <Route path="/scene11" component={Scene11} />
	        <Route path="/scene12" component={Scene12} />
	        <Route path="/scene13" component={Scene13} />
	        <Route path="/scene14" component={Scene14} />
	        <Route path="/scene15" component={Scene15} />

	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
