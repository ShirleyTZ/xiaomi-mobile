import React, { Component } from 'react';


class BtnWithImgsAndDesc extends Component {

    
  
  render() {
    const items = this.props.items;
    console.log(222222, items);
    return (
        <div className={this.props.btnBox}>
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
    );
  }
}

export default BtnWithImgsAndDesc;