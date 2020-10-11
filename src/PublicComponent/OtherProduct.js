import React, { Component } from 'react';

class OtherProduct extends Component {
    render() {
      const aboutProducts = this.props.items;
      return(
        <div className={this.props.productCaseWrapper}>
          {aboutProducts.map((product,i) => (
            <div className={this.props.content} key={i}>
              <div className={this.props.thumb}>
                <img src={product.img}/>
              </div>
              <div className={this.props.about}>
                <p className={this.props.name}>{product.name}</p>
                {this.props.desc !== undefined ? <p className={this.props.desc}>{product.desc}</p> : ""}
                <p className={this.props.price}>
                    <span>{product.price} </span>
                    <del>{product.beforePrice}</del>
                </p>
                    {this.props.cartBtn !== undefined ? <div className={this.props.cartBtn}>立即购买</div>:""}
              </div>
            </div>
          ))}   
        </div>
      )
    }
  }
  
  export default OtherProduct;