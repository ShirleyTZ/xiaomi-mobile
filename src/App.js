import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import Classify from './Classify/Classify';
import Star from './Star/Star';
import Cart from './Cart/Cart';
import User from './User/User';
import BtnForFooter from './PublicComponent/BtnForFooter';
import {items, ticksPre2} from './ImgsForFooter';

// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider, connext } from 'react-redux';

class App extends Component {
  render() {
    // const { value, }
    const links = ['/', '/Classify/', '/Star/', '/Cart/', '/User/']
    return (
      <Router>
        <div className="App"> 
          <Route path="/" exact component={Home} />
          <Route path='/Classify/' component={Classify} />
          <Route path='/Star/' component={Star} />
          <Route path='/Cart/' component={Cart} />
          <Route path='/User/' component={User} />

          <footer className="Footer">
            <BtnForFooter
            items={items} 
            btnBox="Footer-btn-box" 
            btnName="Footer-btn" 
            imgClassName="Footer-btn-img" 
            descClassName="Footer-btn-desc" 
            links={links}
            />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
