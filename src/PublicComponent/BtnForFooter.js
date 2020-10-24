import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BtnForFooter extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(key) {
    this.props.handleFooterClick(key)
  }
  render() {
    const items = this.props.items;
  return (
    <div className={this.props.btnBox}>
      {items.map((item,i) => (
        <Link 
          to={this.props.links[i]}
          className={this.props.btnName} 
          key={i}
          onClick={this.handleClick.bind(this, i)}
          >
          <div className={this.props.imgClassName} style={item.img}></div>
          <span className={this.props.descClassName}>{item.desc}</span>
        </Link>
      ))}
    </div>
  );
  }
}

export default BtnForFooter;