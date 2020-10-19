import React, { Component } from 'react';
import {
  mainImg,
  headerImg,
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  video1,
  video2
} from './HomePhoneItemResource/HPR';
import $ from 'jquery';
import ProductBox from '../PublicComponent/ProductBox';

class HomePhone extends Component {
  
  render() {
    return (
      <section className="Home-sections" >
        <img className="main-header" src={mainImg}/>
        <article className="article1">
          <div className="divider-line line-group1"></div>
          <img className="headerImg" src={headerImg[0]}/>
          <div className="divider-line line-group1"></div>
          <ProductBox 
            items={article1}
            productCaseWrapper="HomePhone-article1-wrapper"
            content="HomePhone-article1-item"
            thumb="HomePhone-article1-item-img"
            name="HomePhone-article1-item-name"
            desc="HomePhone-article1-item-desc"
            price="HomePhone-article1-item-price"
            cartBtn="HomePhone-article1-item-cart"
          />
          <div className="divider-line line-group1"></div>
        </article>

        <article className="article2">
          <div className="divider-line line-group2"></div>
          <img className="headerImg" src={headerImg[1]}/>
          <ProductBox 
            items={article2}
            productCaseWrapper="Home-phone-product-wrapper"
            content="Home-phone-product-item"
            thumb="Home-phone-product-item-img"
            name="Home-phone-product-item-name"
            desc="Home-phone-product-item-desc"
            price="Home-phone-product-item-price"
            cartBtn="Home-phone-product-item-cart"
            about="Home-phone-product-item-about"
          />
          <div className="divider-line line-group2"></div>
          <video 
            className="video" 
            src={video1}
            preload="none"
            controls="controls"
            ></video>
        </article>

        <article>
          <ProductBox 
            items={article3}
            productCaseWrapper="Home-phone-product-wrapper Home-phone-special-wrapper"
            content="Home-phone-product-item Home-phone-special-item"
            thumb="Home-phone-product-item-img"
            name="Home-phone-product-item-name"
            desc="Home-phone-product-item-desc"
            price="Home-phone-product-item-price"
            cartBtn="Home-phone-product-item-cart"
            about="Home-phone-product-item-about"
          />
          <div className="divider-line line-group2"></div>
          <video 
              className="video" 
              src={video2}
              preload="none"
              controls="controls"
              ></video>
        </article>

        <article>
          <div className="divider-line line-group2"></div>
          <img className="headerImg" src={headerImg[2]}/>
          <div className="divider-line line-group2"></div>
          <img className="headerImg" src={headerImg[3]}/>
          <ProductBox 
            items={article4}
            productCaseWrapper="Home-phone-product-wrapper Home-phone-special-wrapper"
            content="Home-phone-product-item Home-phone-special-item"
            thumb="Home-phone-product-item-img"
            name="Home-phone-product-item-name"
            desc="Home-phone-product-item-desc"
            price="Home-phone-product-item-price"
            cartBtn="Home-phone-product-item-cart"
            about="Home-phone-product-item-about"
          />
        </article>

        <article>
          <ProductBox 
            items={article5}
            productCaseWrapper="Home-product-wrapper Home-product-article5"
            content="Home-product-item Home-product-article5-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[4]}/>
          <ProductBox 
            items={article6}
            productCaseWrapper="Home-phone-product-wrapper Home-product-article6"
            content="Home-phone-product-item"
            thumb="Home-phone-product-item-img"
            name="Home-phone-product-item-name"
            desc="Home-phone-product-item-desc"
            price="Home-phone-product-item-price"
            cartBtn="Home-phone-product-item-cart"
            about="Home-phone-product-item-about"
          />
           <div className="divider-line line-group1"></div>
        </article>

        <article>
          <img className="headerImg" src={headerImg[5]}/>
          <ProductBox 
            items={article7}
            productCaseWrapper="Home-phone-bottom-wrapper"
            content="Home-phone-bottom-item"
            thumb="Home-phone-bottom-item-img"
            name="Home-phone-bottom-item-name"
            desc="Home-phone-bottom-item-desc"
            price="Home-phone-bottom-item-price"
          />
        </article>
      </section>
    )
  }
}

export default HomePhone;