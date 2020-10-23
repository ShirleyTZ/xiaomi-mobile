import React, { Component } from 'react';
import {
  article1,
  article2,
  HAmainImg,
} from './HomeApplianceResource/HAR';
import ProductBox from '../PublicComponent/ProductBox';
import ImgList from '../PublicComponent/ImgList';
import './HomeApplianceResource/HomeAppliance.css'

class HomeAppliance extends Component {
  render() {
    return (
      <section className="Home-sections">
        <ImgList 
          btns={article1}
          listName="HA-topList"
          btnName="HA-topimg"
        />
        <img className="headerImg" src={HAmainImg} />
        <ProductBox 
              items={article2}
              productCaseWrapper="Home-smart-bottom-wrapper  HomeAppliance-divider-purple"
              content="Home-smart-bottom-item"
              thumb="Home-smart-bottom-item-img"
              name="Home-smart-bottom-item-name"
              desc="Home-smart-bottom-item-desc"
              price="Home-smart-bottom-item-price"
            />
      </section>
    )
  }
}

export default HomeAppliance;