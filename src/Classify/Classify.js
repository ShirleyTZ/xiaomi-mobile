import React, { Component } from 'react';
import BtnList from '../PublicComponent/BtnList';
import {headLeft, headRight} from '../Cart/CartResource/CR';
import {btnList, 
  moreLink, 
  moreTv,
  xiaomiPhoneTitle, 
  xiaomiPhoneheadImg, 
  xiaomiPhone,
  RedmiPhoneTitle,
  RedmiPhoneheadImg,
  redmiPhone,
  heiShaTitle,
  heiShaheadImg,
  heiShaPhone,
  contract5GPhone,
  contract5GTitle,
  crowdfunding,
  crowdfundingTitle,
  tvTitle,
  tvProducts,
  moreAppliance,
  superApplianceTitle,
  superAppliance,
  laptopTitle,
  laptop,
  moreXiaoai,
  xiaoaiTitle,
  xiaoai,
  routerTitle,
  routerProduct,
  houseHoldEATitle,
  houseHoldEA,
  kitchenApplianceTitle,
  kitchenAppliance,
  smartWearTitle,
  smartWear,
  smartHouseholdTitle,
  smartHousehold,
  vehicleTitle,
  vehicle,
  healthProtectionTitle,
  healthProtection,
  digitalAccessoriesTitle,
  digitalAccessories,
  dailyUseTitle,
  dailyUse,
  choicenessTitle,
  choiceness,
  xiaomiServiceTitle,
  xiaomiService,
  xiaomiCardTitle,
  xiaomiCard,
  xiaomiJointlyTitle,
  xiaomiJointly,
  retailShopTitle,
  retailShop,
  othersTitle,
  others,
} from './ClassifyResource/CR';
import './Classify.css';
import BtnWithImgsAndDesc from '../PublicComponent/BtnWithImgsAndDesc';
import $ from 'jquery';

class Classify extends Component {
  scrollContent() {
    $(window).scroll(function() {
      const srollTopItem = $(window).scrollTop();
      const btnWrapper = $(".Classify-nav-btn-list")
      const btns= $(".Classify-nav-btn-item");
      const articles = $(".Classify-item-content");
      for(let i = articles.length-1; i >= 0; i--){
        const height = $(".Classify-item-content").eq(i).offset().top;
        const btnHeight = $(".Classify-nav-btn-item").eq(i).offset().top;
        console.log("aaa",height);
        if(srollTopItem >= height) {
          btns.each(function() {
            $(this).css({
              color: "black",
              fontSize: ".22rem",
              position: "none",
              width: ".864rem",
              height: ".605rem"
            })
          })
          btns.eq(i).css({
            color: "#fb7d34",
            fontSize: ".26rem",
            position: "relative",
            width: "1rem",
            height: ".7rem"
          })
          if(i < 13) {
            btnWrapper.scrollTop(0);
          } else {
            btnWrapper.scrollTop(btnHeight);
          }
          break
        }
      }
    })
  }

  handleBtnClick =(key)=> {
    const btns= $(".Classify-nav-btn-item");
    btns.each(function() {
      $(this).css({
        color: "black",
        fontSize: ".22rem",
        position: "none",
        width: ".864rem",
        height: ".605rem"
      })
    })
    btns.eq(key).css({
      color: "#fb7d34",
      fontSize: ".26rem",
      position: "relative",
      width: "1rem",
      height: ".7rem"
    })
    const height = $(".Classify-item-content").eq(key).offset().top;
    const rightContent = $(".Classify-right-content").eq(0);
    $("html, body").animate({
      scrollTop: height-30
    },500)
    
    console.log(key, $(".Classify-item-content").eq(key).offset().top, rightContent.height());
  }

  render() {
    return (
      <div>
        <div className="Classify-head">
          <img src={headLeft}/>
          <div>分类</div>
          <img src={headRight}/>
        </div>
        
        <section className="Classify-section">
          <div className="classify-btn-list-wrapper">
            <BtnList 
              btns={btnList}
              listName="Classify-nav-btn-list"
              btnName="Classify-nav-btn-item"
              handleBtnClick={this.handleBtnClick.bind(this)}
            />
          </div>
          

          <div className="Classify-right-content" onScroll={this.scrollContent()}>
            <article className="Classify-item-content">
              <img className="Classify-right-content-headImg" src={xiaomiPhoneheadImg} />
              {xiaomiPhone.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={xiaomiPhoneTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more="Classify-btn-more"
                  moreData={moreLink}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              <img className="Classify-right-content-headImg" src={RedmiPhoneheadImg} />
              {redmiPhone.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={RedmiPhoneTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more="Classify-btn-more"
                  moreData={moreLink}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              <img className="Classify-right-content-headImg" src={heiShaheadImg} />
              {heiShaPhone.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={heiShaTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === heiShaPhone.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreLink}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {contract5GPhone.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={contract5GTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === contract5GPhone.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreLink}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {crowdfunding.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={crowdfundingTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {tvProducts.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={tvTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === 0 ? "Classify-btn-more" : undefined}
                  moreData={moreTv}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {superAppliance.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={superApplianceTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === 0 ? "Classify-btn-more" : undefined}
                  moreData={moreAppliance}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {laptop.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={laptopTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {xiaoai.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={xiaoaiTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === xiaoai.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {routerProduct.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={routerTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {houseHoldEA.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={houseHoldEATitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === houseHoldEA.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {kitchenAppliance.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={kitchenApplianceTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {smartWear.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={smartWearTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === houseHoldEA.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>
            
            <article className="Classify-item-content">
              {smartHousehold.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={smartHouseholdTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === smartHousehold.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>
            
            <article className="Classify-item-content">
              {vehicle.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={vehicleTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === vehicle.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {healthProtection.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={healthProtectionTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === healthProtection.length-1 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {digitalAccessories.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={digitalAccessoriesTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={key === digitalAccessories.length-2 ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {dailyUse.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={dailyUseTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"
                  more={(key === 1)||(key === 2)||(key === 4) ? "Classify-btn-more" : undefined}
                  moreData={moreXiaoai}
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {choiceness.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={choicenessTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {xiaomiService.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={xiaomiServiceTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {xiaomiCard.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={xiaomiCardTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {xiaomiJointly.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={xiaomiJointlyTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {retailShop.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={retailShopTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

            <article className="Classify-item-content">
              {others.map((items,key) => 
                <BtnWithImgsAndDesc 
                  items={items}
                  title="Classify-btn-box-title"
                  titleData={othersTitle[key]}
                  btnBox="Classify-btn-box"
                  btnitemsWrapper="Classify-btn-items-wrapper"
                  btnName="Classify-btn-items"
                  imgClassName="Classify-btn-items-img"
                  descClassName="Classify-btn-items-desc"                
                  key={key}
                />
              )}
            </article>

          </div>
        </section>
        
      </div>
    )
  }
}

export default Classify;