import React, { Component } from 'react';
import BtnWithImgsAndDesc from '../../PublicComponent/BtnWithImgsAndDesc';

class SubArticalParts extends Component { 
  render() {
    const btns = this.props.items;
  return (
    <div className={this.props.btnBox}>
      {btns.map((btns,key) => (
        <BtnWithImgsAndDesc  
          items={btns}
          btnBox="User-article-box" 
          btnName="User-article" 
          imgClassName="User-article-img" 
          descClassName="User-article-desc"
          key={key}
          />
      ))}
    </div>
  );
  }
}

export default SubArticalParts;