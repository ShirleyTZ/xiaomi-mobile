import React, { Component } from 'react';
import './Star.css';
import BtnList from '../PublicComponent/BtnList';
import {starNav, starNavRightImg, arrow, cateItems, unit, starFooterImgs} from './StarResource/SR';
import CategoryPanel from '../PublicComponent/CategoryPanel';
import ImgList from '../PublicComponent/ImgList';

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
            <a className="Star-nav-right-btn bell"></a>
            <a className="Star-nav-right-btn" style={starNavRightImg}></a>
          </div>
        </div>
        
        <section className="sections">
          <article className="article Interest-wrapper">
            <div className="Interest-head">
              <a>兴趣圈</a>
              <div className="Interest-right-btn">
                <span>1.6万人已加入</span>
                <span className="Interest-btn-img showImg"></span>
                <span className="Interest-btn-img" style={arrow}></span>
              </div>
            </div>
            <CategoryPanel 
              items={cateItems}
              box= "Star-cate-item-box"
              imgWrapper="Star-cate-item-wrapper"
              imgItem="Star-cate-item-img"
              imgName="Star-cate-item-name"
              imgDescribe="Star-cate-item-desc"
              />
          </article>

          <article className="article">
           <ImgList 
            btns={unit}
            listName="Star-unit-wrapper"
            btnName="Star-unit-btn"
            />
          </article>

          <footer className="footer">
            <img src={starFooterImgs[0]}/>
          </footer>
        </section>
      </div>
    )
  }
}

export default Star;