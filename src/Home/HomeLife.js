import React, { Component } from 'react';
import {
  lineImg,
  headerImg,
  article1,
  article1Footer,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
} from './HomeLifeResource/HLR';
import './HomeLifeResource/HomeLife.css'
import ProductBox from '../PublicComponent/ProductBox';
import ImgList from '../PublicComponent/ImgList';


class HomeLife extends Component {
  render() {
    return (
      <section className="Home-sections">
        <article>
          <img  className="headerImg" src={headerImg[0]} />
          <ImgList 
            btns={article1}
            listName="Home-laptop-footer-img-list HomeLiftImgList"
            btnName="Home-laptop-footer-img-items"
          />
          <div className="divider-line HomeLife-divider-green"></div>
          <img  className="headerImg" src={article1Footer} />
          <div className="divider-line HomeLife-divider-green"></div>
        </article>
        
        <article>
          <img  className="headerImg" src={headerImg[1]} />
          <ProductBox 
            items={article2}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={lineImg[0]}/>
          <div className="divider-line HomeLife-divider-green"></div>
          <img className="headerImg" src={lineImg[1]}/>
          <img className="headerImg" src={headerImg[2]}/>
          <ProductBox 
            items={article3}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[2]}/>
          <ProductBox 
            items={article3}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[3]}/>
          <ProductBox 
            items={article4}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[4]}/>
          <ProductBox 
            items={article5}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[5]}/>
          <ProductBox 
            items={article6}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
            content="Home-smart-bottom-item"
            thumb="Home-smart-bottom-item-img"
            name="Home-smart-bottom-item-name"
            desc="Home-smart-bottom-item-desc"
            price="Home-smart-bottom-item-price"
          />
        </article>

        <article>
          <img className="headerImg" src={headerImg[6]}/>
          <ProductBox 
            items={article7}
            productCaseWrapper="Home-smart-bottom-wrapper  HomeLife-divider-green"
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

export default HomeLife;