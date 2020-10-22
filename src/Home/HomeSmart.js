import React, { Component } from 'react';
import {
  switchImgs,
  recommendCell,
  article3headerImg,
  article3footerImg,
  article3massage,
  LineImg1,
  LineImg2,
  article4headerImg,
  article4footerImg,
  article4massage,
  article5HeaderImgs,
  article5massages,
  footerImg,
} from './HomeSmartResource/HSR'
import './HomeSmartResource/HomeSmart.css';
import ImgList from '../PublicComponent/ImgList';
import ProductBox from '../PublicComponent/ProductBox';

class HomeSmart extends Component {
  render() {
    return (
      <section className="Home-sections" >
        <article className="Home-swiper-lazy">
          <ImgList 
            btns={switchImgs}
            listName="Home-swiper-list"
            btnName="Home-swiper-list-items"
            />
        </article>

        <article className="Home-recommandCell">
          <ImgList 
            btns={recommendCell}
            listName="Home-recommendcell-list"
            btnName="Home-recommendcell-list-items"
            />
        </article>

        <article>
          <div className="divide-line"></div>
          <img className="headerImg" src={article3headerImg} />
          <div className="divide-line"></div>
          <ProductBox 
            items={article3massage}
            productCaseWrapper="Home-smart-bottom-wrapper"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
          <img className="headerImg footerImg" src={article3footerImg} />
        </article>

        <article>
          <div className="divide-line"></div>
          <img className="headerImg" src={LineImg1} />
          <img className="headerImg" src={LineImg2} />
          <div className="divide-line"></div>
          <img className="headerImg" src={article4headerImg} />
          <div className="divide-line"></div>
          <ProductBox 
            items={article4massage}
            productCaseWrapper="Home-smart-bottom-wrapper"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
          <img className="headerImg footerImg" src={article4footerImg} />
          <div className="divide-line"></div>
        </article>

        <article>
          {article5massages.map((items,index) => {
            return (
              <div key={index}>
                <div className="divide-line grey-line"></div>
                <img className="headerImg" src={article5HeaderImgs[index]} />
                <div className="divide-line grey-line"></div>
                <ProductBox 
                  items={items}
                  productCaseWrapper="Home-smart-bottom-wrapper grey-items"
                  content="Home-smart-bottom-item "
                  thumb="Home-smart-bottom-item-img"
                  name="Home-smart-bottom-item-name"
                  desc="Home-smart-bottom-item-desc"
                  price="Home-smart-bottom-item-price"
                />
              </div>
            )
          })}
        </article>
        
        <footer>
        <div className="divide-line grey-line"></div>
          <img className="headerImg" src={footerImg} />
        </footer>
      </section>
    )
  }
}

export default HomeSmart;