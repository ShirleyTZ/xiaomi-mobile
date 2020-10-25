import React, { Component } from 'react';
import {
  arrow, 
  cateItems, 
  unit, 
  starFooterImgs, 
  recommend
} from './StarResource/SR';
import CategoryPanel from '../PublicComponent/CategoryPanel';
import ImgList from '../PublicComponent/ImgList';
import $ from 'jquery';
import RecommandForStar from '../PublicComponent/RecommandForStar';

class StarRecommand extends Component {
  constructor() {
    super();
    this.state = {
      pageNum: 1,
      data: recommend.slice(0, 5),
      arr: [0, 0],
    }
  }
  waterFall() {
    const columns = 2;
    let arr = [];

    const fatherElement = $(".Star-recommand-item-box");
    const remwidth = document.documentElement.offsetWidth/6.4;
    $(".Star-recommand-item-wrapper").each(function(index) {
      const itemHeight = $(this).height();
      const itemWidth = $(this).width();
      if(index < columns) {
        if(index%2 === 0) {
          $(this).css({
            position: "absolute",
            top: 0,
            left: 0, 
          })
        }
        if(index%2 === 1) {
          $(this).css({
            position: "absolute",
            top: 0,
            right: 0, 
          })
        }
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
        const rl = (itemWidth/remwidth + .05)*[(minIndex+2)%columns] + "rem";
        $(this).css({
          position: "absolute",
          top: (arr[minIndex]/remwidth + 0.05) + "rem",
          left: rl,
        })
        arr[minIndex] = arr[minIndex] + itemHeight + 0.1*remwidth;
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
      const scrollTop = (Math.ceil(window.pageYOffset))
                        || (Math.ceil(document.documentElement.scrollTop))
                        || (Math.ceil(document.body.scrollTop));
      const clientHeight = $(this).height();
      const bodyHeight = $(document).height();
      if(scrollTop + clientHeight >= bodyHeight-100) {
        moreData = recommend.slice(pageNum*5 -5, pageNum*5);
        pageNum = pageNum + 1;
        newData = that.state.data.concat(...moreData);
        this.timer = setTimeout(function(){
          that.setState({
            data: newData
          })
          that.waterFall();
        },300)
      }
    })

  }
 

  componentDidMount() {
    this.waterFall();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState =(state, callback) => {
      return
    }
    clearTimeout(this.timer);
  }


  render() {
    const btns = this.props.btns;
    return (
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

        <article className="article" onScroll={this.showMore()}>
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
          <img src={starFooterImgs[0]} alt=""/>
        </footer>
      </section>
    )
  }
}

export default StarRecommand;