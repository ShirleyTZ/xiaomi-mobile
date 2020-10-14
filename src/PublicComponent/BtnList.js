import React, { Component } from 'react';

class BtnList extends Component {
  constructor(props) {
    super(props);

  }
  handleClick(key) {
    this.props.handleBtnClick(key);
  }
  render() {
    const btns = this.props.btns;
    return (
      <div className={this.props.listName} >
        {btns.map((btn,key) => (
          <div className={this.props.btnName} onClick={this.handleClick.bind(this, key)} key={key} >{btn}</div>)
        )}
      </div>
    )
  }
}

export default BtnList;