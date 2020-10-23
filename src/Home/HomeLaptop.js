import React, { Component } from 'react';
import {
  headerImg,
  article1,
  article2,
  article3,
  article4,
  article5,
} from './HomeLaptopResource/HLR';
import './HomeLaptopResource/HomeLaptop.css';
import ProductBox from '../PublicComponent/ProductBox';
import ImgList from '../PublicComponent/ImgList';

class HomeLaptop extends Component {
  render() {
    return (
      <section className="Home-sections">
        <article>
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <img className="headerImg" src={headerImg[0]} />
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <ProductBox 
              items={article1}
              productCaseWrapper="Home-product-wrapper-one HomeLaptop-divider-blue"
              content="Home-product-item-one  Home-Tv-article-item"
              thumb="Home-product-item-one-img"
              name="Home-product-item-one-name"
              desc="Home-product-item-one-desc"
              price="Home-product-item-one-price"
              cartBtn="Home-product-item-one-cart"
              about="Home-product-item-about"
            />
        </article>

        <article>
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <img className="headerImg" src={headerImg[1]} />
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <ProductBox 
            items={article2}
            productCaseWrapper="Home-product-wrapper HomeLaptop-divider-blue"
            content="Home-product-item Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
        </article>

        <article>
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <img className="headerImg" src={headerImg[2]} />
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <ProductBox 
            items={article3}
            productCaseWrapper="Home-product-wrapper HomeLaptop-divider-blue"
            content="Home-product-item Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
        </article>

        <article>
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <img className="headerImg" src={headerImg[3]} />
          <div className="divider-line HomeLaptop-divider-blue"></div>
          <ProductBox 
              items={article4}
              productCaseWrapper="Home-smart-bottom-wrapper  HomeLaptop-divider-blue"
              content="Home-smart-bottom-item"
              thumb="Home-smart-bottom-item-img"
              name="Home-smart-bottom-item-name"
              desc="Home-smart-bottom-item-desc"
              price="Home-smart-bottom-item-price"
            />
        </article>

        <article>
          <img className="headerImg" src={headerImg[4]} />
          <ImgList 
            btns={article5}
            listName="Home-laptop-footer-img-list"
            btnName="Home-laptop-footer-img-items"
          />
        </article>
      </section>
    )
  }
}

export default HomeLaptop;