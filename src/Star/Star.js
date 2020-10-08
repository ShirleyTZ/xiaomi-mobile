import React, { Component } from 'react';
import './Star.css';
import BtnList from '../PublicComponent/BtnList';
import {starNav, starNavRightImg, arrow, cateItems, unit, starFooterImgs, recommend} from './StarResource/SR';
import CategoryPanel from '../PublicComponent/CategoryPanel';
import ImgList from '../PublicComponent/ImgList';
import RecommandForStar from '../PublicComponent/RecommandForStar';
import $ from 'jquery';

class Star extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: 1,
      data: recommend.slice(0, 5),
    }
  }
  waterFall() {
    const columns = 2;
    const arr = [];
    const fatherElement = $(".Star-recommand-item-box");
    $(".Star-recommand-item-wrapper").each(function(index) {
      const itemHeight = $(this).height();
      const itemWidth = $(this).width()
      const leftNum = (itemWidth/64 +0.3)*[(index+2)%columns] + "rem"
      if(index < columns) {
        $(this).css({
          position: "absolute",
          top: 0,
          left: leftNum, 
        })
        arr.push(itemHeight);
      } else {
        let minHeight = arr[0];
        let minIndex = 0;
       
        for ( let num = 0; num < arr.length; num++) {
          if(minHeight > arr[num]) {
            minHeight = arr[num];
            minIndex = num;
          }
        }
        const minIndexNum = (itemWidth/64 +0.3)*[(minIndex+2)%columns] + "rem";
        $(this).css({
          position: "absolute",
          top: (arr[minIndex]/58 + 0.2) + "rem",
          left: minIndexNum,
        })

        arr[minIndex] = arr[minIndex] +itemHeight + 0.2*58;
        fatherElement.css({
          height: arr[minIndex],
        })
      }
    })
  }

  newData(num) {
    const data = this.state.data;
    const newData = data.concat(...num)
    this.setState({
      data: newData
    })
  }

  showMore() {
    let pageNum = this.state.pageNum;
    let moreData = [];
    let that = this;
    let newData;
    
    $(window).scroll(function(){
      const scrollTop = Math.ceil($(this).scrollTop());
      const clientHeight = $(this).height();
      const bodyHeight = $(document).height();
      if(scrollTop + clientHeight >= bodyHeight) {
        moreData = recommend.slice(pageNum*5 -5, pageNum*5);
        pageNum = pageNum + 1;
        newData = that.state.data.concat(...moreData);
        setTimeout(function(){
          that.setState({
            data: newData
          })
          that.waterFall();
        },300)
      }
    })
    
    
  }
 

  componentDidMount() {
    this.showMore();
    this.waterFall();

  }

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

          <article className="article">
            <RecommandForStar 
              items={this.state.data}
              box= "Star-recommand-item-box"
              imgWrapper="Star-recommand-item-wrapper"
              imgItem="Star-recommand-item-img"
              imgName="Star-recommand-item-name"
              imgDescribe="Star-recommand-item-desc"
              userWrapper="Star-recommand-item-userWrapper"
              userImg="Star-recommand-item-userImg"
              userName="Star-recommand-item-userName"
              watchImg="Star-recommand-item-userWatch"
              viewedNum="Star-recommand-item-userDesc"
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