import React, { Component } from 'react';
import './Home.css';
import {
  homeMiLogo,
  homeSearchRightImg,
  navBtn, 
  homeArrow, 
  } from './HomeResource/HomeResource';
import BtnList from '../PublicComponent/BtnList';
import ImgList from '../PublicComponent/ImgList';
import $ from 'jquery';
import HomeRecommand from './HomeRecommand';
import HomePhone from './HomePhone';
import HomeSmart from './HomeSmart';
import HomeTV from './HomeTV';
import HomeLaptop from './HomeLaptop';
import HomeAppliance from './HomeAppliance';
import HomeLife from './HomeLife';

class Home extends Component {
  //导航改变样式
  navChange() {
    const navAll = $('.Home-header-nav-all').eq(0);
    const style2 = navAll.css("display");
    const btn = $('.Home-header-nav-clickbtn').eq(0);
    if(style2 === "none") {
      navAll.css("display", "block");
      btn.css("transform", "rotate(180deg)");
      const navWrapper = $('.Home-header-nav').eq(0);
      const nav = $('.Home-header-nav-items');
      const index = nav.filter(function(item) {
        return $(this).css("color") == "rgb(237, 91, 0)";
      }).index();
      navWrapper.css("display","none");
      navWrapper.addClass('Home-header-nav-af').removeClass('Home-header-nav').slideDown(200);
      nav.addClass('Home-header-nav-items-af').removeClass('Home-header-nav-items');
      const btnsAf = $(".Home-header-nav-items-af");
      btnsAf.each(function() {
        $(this).css({
          backgroundColor: "white",
          border: "1px solid #e5e5e5",
        })
      })
      btnsAf.eq(index).css({
        backgroundColor: "#fde0d5",
        border: ".01rem solid rgb(237, 91, 0)"
      }) 
    } else {
      navAll.css("display","none");
      btn.css("transform", "none");
      const nav = $('.Home-header-nav-items-af');
      const index = nav.filter(function(item) {
        return $(this).css("color") == "rgb(237, 91, 0)";
      }).index();
      const navWrapper = $('.Home-header-nav-af').eq(0);
      navWrapper.addClass('Home-header-nav').removeClass('Home-header-nav-af');
      nav.addClass('Home-header-nav-items').removeClass('Home-header-nav-items-af');
      const btns =  $(".Home-header-nav-items");
      btns.each(function() {
        $(this).css({
          color: "rgb(116, 116, 116)",
          backgroundColor: "#f2f2f2",
          border: "none",
        })
      })
      btns.eq(index).css({
        color: "rgb(237, 91, 0)",
        borderBottom: ".05rem solid rgb(237, 91, 0)"
      })
    }
  }

  //导航click功能
  handleBtnClick =(key)=> {
    const sections = $(".Home-sections");
    const btns = $(".Home-header-nav-items");
    const btnsAf = $(".Home-header-nav-items-af");
    const navAll = $('.Home-header-nav-all').eq(0);
    const style2 = navAll.css("display");
    sections.each(function() {
      $(this).css({
        display: "none",
      })
    })
    sections.eq(key).css({
      display: "block",
    })
    if(style2 === "none") {
      btns.each(function() {
        $(this).css({
          color: "rgb(116, 116, 116)",
          borderBottom: "none",
        })
      })
      btns.eq(key).css({
        color: "rgb(237, 91, 0)",
        borderBottom: ".05rem solid rgb(237, 91, 0)"
      })
    }else{
      btnsAf.each(function() {
        $(this).css({
          backgroundColor: "white",
          color: "rgb(116, 116, 116)",
          border: "1px solid #e5e5e5",
        })
      })
      btnsAf.eq(key).css({
        backgroundColor: "#fde0d5",
        color: "rgb(237, 91, 0)",
        border: ".01rem solid rgb(237, 91, 0)"
      }) 
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
              btnName="Home-header-nav-items nav-items"
              handleBtnClick={this.handleBtnClick.bind(this)}
              />
            <div className="Home-header-nav-clickbtn" style={homeArrow} onClick={this.navChange.bind(this)}></div>
          </div>
        </header>

        <HomeRecommand />

        <HomePhone />

        <HomeSmart />

        <HomeTV />

        <HomeLaptop />

        <HomeAppliance />

        <HomeLife />
      </div>
    )
  }
}

export default Home;