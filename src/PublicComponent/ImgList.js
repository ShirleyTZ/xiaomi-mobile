import React, { Component } from 'react';

class ImgList extends Component {
  constructor(props) {
    super(props);

  }

  handleClick(key) {
    this.props.handleBtnClick(key);
  }
  
  render() {
    const btns = this.props.btns;
    return (
      <div>
        <div className={this.props.listName} >
          {btns.map((btn,key) => (
            <a className={this.props.btnName} key={key}>
              <img src={btn} alt=""/>
            </a>)
          )}
          
        </div>
        <div className={this.props.circleList}>
          {this.props.circleList !== undefined ? 
            (btns.map((btn, index) => <div className={this.props.cirleName} onClick={this.handleClick.bind(this, index)} key={index}></div>))
            :""
          }
        </div>
      </div>
    )
  }
}

export default ImgList;