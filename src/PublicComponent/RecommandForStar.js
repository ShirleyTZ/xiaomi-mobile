import React, { Component } from 'react';
import eye from'../Star/StarResource/RecommandLeftImgs/eye.png';

class RecommandForStar extends Component {
  render() {
  const items = this.props.items;
  return(
    <div className={this.props.box}>
      {items.map((item,i) => {
      return  (<div className={this.props.imgWrapper} key={i}>
          <div className={this.props.imgItem} style={item.img}></div>
          <div className={this.props.imgDescribe}>{item.desc}</div>
          <div  className={this.props.imgName}>{item.name}</div>
          <div className={this.props.userWrapper}>
              <div>
                  <div className={this.props.userImg} style={item.userImg}></div> 
                  <div className={this.props.userName}>{item.userName}</div>
              </div>
              <div>
                  <img className={this.props.watchImg} src={eye} alt=""/>
                  <div className={this.props.viewedNum}>{item.viewNum}</div>
              </div>
          </div>
          </div>)
      })}
    </div>
  )
  } 
}

export default RecommandForStar;