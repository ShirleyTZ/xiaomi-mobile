import React, { Component } from 'react';
import {
  swiperImgs, 
  recommendCell, 
  recommendCellImg3, 
  mijingzhilv, 
  meirijingxuan,
  xiaomiTv,
  phones,
  tvs,
  exclusive,
  laptop,
  aircondition,
  washingMachine,
  exchange,
  laptopImgs,
  appliance,
  intelligentProduct,
  intelligentAppliance,
  HomeAboutXiaomiProduct,
  otherProduct,
} from './HomeResource/HomeResource';
import ImgList from '../PublicComponent/ImgList';
import ProductBox from '../PublicComponent/ProductBox';
import $ from 'jquery';

class HomeRecommand extends Component {
  
  render() {
    return (
      <section className="Home-sections">
        <article className="Home-swiper-lazy">
          <ImgList 
            btns={swiperImgs}
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

        <div className="divider-line"></div>

        <article className="Home-recommandCell">
          <div className="Home-RC-leftImg-wrapper">
            <img src={recommendCellImg3[0]}/>
          </div>
          <div className="Home-recommend-RightImg-wrapper">
            <img src={recommendCellImg3[1]}/>
            <img src={recommendCellImg3[2]}/>
          </div>
        </article>

        <div className="divider-line"></div>

        <article className="Home-recommandCell">
          <img className="Home-imgbtn" src={mijingzhilv}/>
        </article>

        <div className="divider-line"></div>

        <article className="Home-recommandCell">
          <img className="Home-imgbtn" src={meirijingxuan}/>
        </article>

        <article>
          <ProductBox 
            items={phones}
            productCaseWrapper="Home-product-wrapper"
            content="Home-product-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
          <div className="Home-product-more">{"更多小米手机产品>"}</div>
        </article>

        <div className="divider-line"></div>

        <article>
          <img className="Home-imgbtn" src={xiaomiTv}/>
        </article>

        <article>
          <ProductBox 
            items={tvs}
            productCaseWrapper="Home-product-wrapper"
            content="Home-product-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
          <div className="Home-product-more-haveborder">{"更多小米电视产品>"}</div>
        </article>

        <div className="divider-line"></div>

        <article className="Home-articles-wrapper">
          <img className="Home-imgbtn" src={exclusive}/>
        </article>

        <div className="divider-line"></div>

        <article className="Home-articles-wrapper">
          <img className="Home-imgbtn" src={laptop}/>
        </article>

        <article>
          <ProductBox 
            items={laptopImgs}
            productCaseWrapper="Home-product-wrapper"
            content="Home-product-item"
            thumb="Home-product-item-img"
            name="Home-product-item-name"
            desc="Home-product-item-desc"
            price="Home-product-item-price"
            cartBtn="Home-product-item-cart"
          />
          <div className="Home-product-more">{"更多小米笔记本产品>"}</div>
        </article>

        <div className="divider-line"></div>

        <article className="Home-articles-wrapper">
          <img className="Home-imgbtn" src={aircondition}/>
        </article>

        <article className="Home-articles-wrapper">
          <img className="Home-imgbtn" src={washingMachine}/>
        </article>

        <article>
          <ProductBox 
            items={appliance}
            productCaseWrapper="Home-appliance-wrapper"
            content="Home-appliance-item"
            thumb="Home-appliance-item-img"
            name="Home-appliance-item-name"
            desc="Home-appliance-item-desc"
            price="Home-appliance-item-price"
          />
          <div className="Home-product-more-haveborder">{"更多米家家电产品>"}</div>
        </article>

        <div className="divider-line"></div>

        <article className="Home-recommandCell">
          <img className="Home-imgbtn" src={intelligentProduct}/>
        </article>

        <div className="divider-line"></div>

        <article className="Home-recommandCell">
          <img className="Home-imgbtn" src={intelligentAppliance}/>
        </article>

        <article>
          <ProductBox 
            items={otherProduct}
            productCaseWrapper="Home-appliance-wrapper Home-otherProduct-wrapper"
            content="Home-appliance-item Home-otherProduct-item-wrapper"
            thumb="Home-appliance-item-img"
            about="Home-appliance-about"
            name="Home-appliance-item-name"
            desc="Home-appliance-item-desc"
            price="Home-appliance-item-price"
          />
          <div className="Home-product-more-haveborder">{"更多米家智能产品>"}</div>
        </article>

        <div className="divider-line"></div>

        <article>
          <ImgList 
            btns={HomeAboutXiaomiProduct}
            listName="Home-about-list"
            btnName="Home-about-list-items"
          />
        </article>

        <div className="divider-line"></div>

        <article className="Home-articles-wrapper">
          <img className="Home-imgbtn" src={exchange}/>
        </article>

        <div className="divider-line"></div>
        <div className="Home-product-more">{"了解小米"}</div>
        <div className="divider-line"></div>
      </section>
    )
  }
}

export default HomeRecommand;