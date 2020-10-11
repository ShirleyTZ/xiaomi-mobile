import React, { Component } from 'react';


class BtnWithImgsAndDesc extends Component {
  
  render() {
    const items = this.props.items;
    return (
      <div className={this.props.btnBox}>
        <div className={this.props.btnitemsWrapper}>  
          {this.props.title ? 
            <div className={this.props.title}>
              <div>{this.props.titleData}</div>
            </div>
            :""}
          {items.map((item,key) => {          
            return (  
                <a 
                  className={this.props.btnName} 
                  key={key}
                >
                  <div className={this.props.imgClassName} style={item.img}></div>
                  <span className={this.props.descClassName}>{item.desc}</span>
                </a>
              )
            })
          }
        </div>
        {this.props.more ? <div className={this.props.more}  style={this.props.moreData}></div>:""}
      </div>
    );
  }
}

export default BtnWithImgsAndDesc;