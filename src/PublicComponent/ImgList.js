import React, { Component } from 'react';

class ImgList extends Component {

  render() {
    const btns = this.props.btns;
    return (
      <div className={this.props.listName} >
        {btns.map((btn,key) => (
          <a className={this.props.btnName} key={key}>
            <img src={btn}/>
            {this.props.circle !== undefined ? <div className={this.props.circle}></div>:""}
          </a>)
        )}
      </div>
    )
  }
}

export default ImgList;