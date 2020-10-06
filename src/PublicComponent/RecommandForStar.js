import React, { Component } from 'react';

class RecommandForStar extends Component {
  render() {
  const items = this.props.items;
  return(
    <div className={this.props.box}>
      {items.map((item,i) => {
        console.log(3333, item);
        if (typeof item === 'string') {
            console.log('wo tm', item);
        }
      return  (<div className={this.props.imgWrapper} key={i}>
          <div className={this.props.imgItem} style={item.img}></div>
          <div  className={this.props.imgName}>{item.name}</div>
          <div className={this.props.imgDescribe}>{item.desc}</div>
          <div className={this.props.userWrapper}>
              <div>
                  <span className={this.props.userImg} style={item.userImg}></span>
                  <span className={this.props.userName}>{item.userName}</span>
              </div>
              <div>
                  <span ></span>
                  <span className={this.props.viewedNumClass}>{item.viewNum}</span>
              </div>
          </div>
          </div>)
      })}
    </div>
  )
  } 
}

export default RecommandForStar;