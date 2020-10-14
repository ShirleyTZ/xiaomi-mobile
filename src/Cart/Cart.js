import React, { Component } from 'react';
import './Cart.css';
import {headLeft, headRight, cartNull, guessImg, guessItems} from '../Cart/CartResource/CR';
import ProductBox from '../PublicComponent/ProductBox';

class Cart extends Component {
  render() {
    return (
      <div className="Cart-wrapper">
        <header className="Cart-head">
          <img src={headLeft} alt=""/>
          <div>购物车</div>
          <img src={headRight} alt=""/>
        </header>

        <section>
          <header className="Cart-section-header">
            <div>登录后享受更多优惠</div>
            <div className="Cart-login">去登录</div>
          </header>

          <article className="Cart-section-articlebox">
            <div className="Cart-section-car">
              <div className="Cart-nullImg" style={cartNull}></div>
              <div>购物车还是空的</div>
            </div>
            <div className="Cart-seeSomething">去逛逛</div>
          </article>

          <article className="Cart-guess-box">
            <div className="Cart-guess-img">
              <img src={guessImg} alt=""/>
            </div>
            <ProductBox 
              items={guessItems}
              productCaseWrapper="Cart-guess-product-box"
              content="Cart-guess-product-wrapper"
              thumb="Cart-guess-product-img"
              name="Cart-guess-product-name"
              price="Cart-guess-product-price"
              beforePrice="Cart-guess-product-beforePrice"
              />
          </article>
        </section>
      </div>
    )
  }
}

export default Cart;