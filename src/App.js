import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import Classify from './Classify/Classify';
import Star from './Star/Star';
import Cart from './Cart/Cart';
import User from './User/User';
import BtnForFooter from './PublicComponent/BtnForFooter';
import {items, ticksPre1, ticksPre2} from './ImgsForFooter';
import $ from 'jquery'
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider, connext } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LinkIndexNum : 0,
    }
  }

  handleFooterClick =(key)=> {
    const btns = $(".Footer-btn-desc");
    const bgImgs = $(".Footer-btn-img")
    btns.css({
      color: "rgb(116, 116, 116)",
    })
    btns.eq(key).css({
      color: "rgb(237, 91, 0)",

    })
    const statenum = this.state.LinkIndexNum;
    bgImgs.eq(statenum).css({
      backgroundImage: `url(${ticksPre1[statenum]})`,
    })
    bgImgs.eq(key).css({
      backgroundImage: `url(${ticksPre2[key]})`,
    })
    this.setState({
      LinkIndexNum: key,
    })
  }
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
            handleFooterClick = {this.handleFooterClick.bind(this)}
            />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
