import React, { Component } from 'react';
import './Star.css';
import BtnList from '../PublicComponent/BtnList';
import {
  starNav, 
  starNavRightImg, 
} from './StarResource/SR';
import $ from 'jquery';
import StarRecommand from './StarRecommand';

class Star extends Component {
  

  render() {
    return (
      <div className="Star-wrapper">
        <div className="Star-bg-block"></div>
        <div className="Star-nav-box">
          <BtnList 
            btns={starNav} 
            listName="Star-nav-left" 
            btnName="Star-nav-left-btn"/>
          <div className="Star-nav-right">
            <a className="Star-nav-right-btn bell">{" "}</a>
            <a className="Star-nav-right-btn" style={starNavRightImg}></a>
          </div>
        </div>
        
        <StarRecommand />

      </div>
    )
  }
}

export default Star;