import React, { Component } from 'react';

class CategoryPanel extends Component {
  render() {
    const items = this.props.items;
    return(
      <div className={this.props.box}>
        {items.map((item,i) => {
        return  (
          <div className={this.props.imgWrapper} key={i}>
            <div className={this.props.imgItem} style={item.img}></div>
            <div  className={this.props.imgName}>{item.name}</div>
            <div className={this.props.imgDescribe}>{item.desc}</div>
          </div>)
        })}
      </div>
    )
  } 
}

export default CategoryPanel;