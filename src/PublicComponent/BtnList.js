import React, { Component } from 'react';

class BtnList extends Component {

  render() {
    const btns = this.props.btns;
    return (
      <div className={this.props.listName} >
        {btns.map((btn,key) => (
          <div className={this.props.btnName}  >{btn}</div>)
        )}
      </div>
    )
  }
}

export default BtnList;