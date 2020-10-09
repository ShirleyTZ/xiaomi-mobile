import React, { Component } from 'react';
import './Home.css';
import {homeMiLogo,
   homeSearchRightImg,
    navBtn, 
    homeArrow, 
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
    appliance
  } from './HomeResource/HomeResource';
import BtnList from '../PublicComponent/BtnList';
import ImgList from '../PublicComponent/ImgList';
import ProductBox from '../PublicComponent/ProductBox';
import $ from 'jquery';

class Home extends Component {
  navChange() {
    const navAll = $('.Home-header-nav-all').eq(0);
    const style2 = navAll.css("display");
    const btn = $('.Home-header-nav-clickbtn').eq(0);
    if(style2 === "none") {
      navAll.css("display", "block");
      btn.css("transform", "rotate(180deg)");
      const navWrapper = $('.Home-header-nav').eq(0);
      const nav = $('.Home-header-nav-items');
      navWrapper.css("display","none");
      navWrapper.addClass('Home-header-nav-af').removeClass('Home-header-nav').slideDown(200);
      nav.addClass('Home-header-nav-items-af').removeClass('Home-header-nav-items');
    } else {
      navAll.css("display","none");
      btn.css("transform", "none");
      const nav = $('.Home-header-nav-items-af');
      const navWrapper = $('.Home-header-nav-af').eq(0);
      navWrapper.addClass('Home-header-nav').removeClass('Home-header-nav-af');
      nav.addClass('Home-header-nav-items').removeClass('Home-header-nav-items-af');
    }

  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Home-header-search">
            <div className="Home-header-logo" style={homeMiLogo} ></div>
            <div className= "Home-header-input-wrapper">
              <input type="input" placeholder="搜索商品名称" />
              <div className="Home-header-search-input-img"></div>
            </div>
            <img src={homeSearchRightImg} />
          </div>
          <div className="Home-header-nav-wrapper">
            <div className="Home-header-nav-all">全部</div>
            <BtnList 
              btns={navBtn}
              listName="Home-header-nav"
              btnName="Home-header-nav-items"
              />
            <div className="Home-header-nav-clickbtn" style={homeArrow} onClick={this.navChange.bind(this)}></div>
          </div>
        </header>

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

          <article className="Home-articles-wrapper">
            <img className="Home-imgbtn" src={exchange}/>
          </article>



          <div className="divider-line"></div>
        </section>

        <section>
          sjadhbeia
          <div>adjvniaeufniajnd</div>
          <div>adjvniaeufniajnd</div>
          <div>adjvniaeufniajnd</div>
          <div>adjvniaeufniajnd</div>

          <div>adjvniaeufniajnd</div>
          <div>adjvniaeufniajnd</div>
          <div>adjvniaeufniajnd</div>
        </section>
      </div>
    )
  }
}

export default Home;