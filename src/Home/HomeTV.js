import React, { Component } from 'react';
import './HomeTvResource/HomeTv.css';
import {
  headerImg,
  article1,
  article2List1,
  article2List2,
  article3List1,
  article3List2,
  article4List1,
  article4List2,
  article5List1,
  article5List2,
  article6,
} from './HomeTvResource/HTR';
import ProductBox from '../PublicComponent/ProductBox';

class HomeTV extends Component {
  render() {
    return (
      <section className="Smart">
        <article>
          <img className="headerImg" src={headerImg[0]} />
          <ProductBox 
            items={article1}
            productCaseWrapper="Home-product-wrapper Home-Tv-article-bg-pink"
            content="Home-product-item Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
        </article>
        
        <article>
          <img className="headerImg" src={headerImg[1]} />
          <img className="headerImg" src={headerImg[2]} />
          <ProductBox 
            items={article2List1}
            productCaseWrapper="Home-smart-bottom-wrapper  Home-Tv-article-bg-pink"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
          <ProductBox 
            items={article2List2}
            productCaseWrapper="Home-product-wrapper"
            content="Home-product-item  Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[3]} />
          <ProductBox 
            items={article3List1}
            productCaseWrapper="Home-product-wrapper   Home-Tv-article-bg-pink"
            content="Home-product-item  Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
          <ProductBox 
            items={article3List2}
            productCaseWrapper="Home-smart-bottom-wrapper  Home-Tv-article-bg-pink"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[3]} />
          <ProductBox 
            items={article4List1}
            productCaseWrapper="Home-product-wrapper   Home-Tv-article-bg-pink"
            content="Home-product-item  Home-Tv-article-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
          <ProductBox 
            items={article4List2}
            productCaseWrapper="Home-smart-bottom-wrapper  Home-Tv-article-bg-pink"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
        <img className="headerImg" src={headerImg[5]} />
          <ProductBox 
              items={article5List1}
              productCaseWrapper="Home-product-wrapper-one   Home-Tv-article-bg-green"
              content="Home-product-item-one  Home-Tv-article-item"
              thumb="Home-product-item-one-img"
              name="Home-product-item-one-name"
              desc="Home-product-item-one-desc"
              price="Home-product-item-one-price"
              cartBtn="Home-product-item-one-cart"
              about="Home-product-item-about"
            />
          <ProductBox 
              items={article5List2}
              productCaseWrapper="Home-smart-bottom-wrapper  Home-Tv-article-bg-green"
              content="Home-smart-bottom-item"
              thumb="Home-smart-bottom-item-img"
              name="Home-smart-bottom-item-name"
              desc="Home-smart-bottom-item-desc"
              price="Home-smart-bottom-item-price"
            />
        </article>

        <article>
          <img className="headerImg" src={headerImg[6]} />
          <ProductBox 
              items={article6}
              productCaseWrapper="Home-smart-bottom-wrapper  Home-Tv-article-bg-green"
              content="Home-smart-bottom-item"
              thumb="Home-smart-bottom-item-img"
              name="Home-smart-bottom-item-name"
              desc="Home-smart-bottom-item-desc"
              price="Home-smart-bottom-item-price"
            />
        </article>
      </section>
    )
  }
}

export default HomeTV;