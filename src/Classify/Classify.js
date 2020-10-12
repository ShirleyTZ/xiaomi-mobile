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
} from './ClassifyResource/CR';
import './Classify.css';
import BtnWithImgsAndDesc from '../PublicComponent/BtnWithImgsAndDesc';


class Classify extends Component {
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
            />
          </div>
          

          <div className="Classify-right-content">
            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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

            <article>
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
            
            <article>
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

          </div>
        </section>
        
      </div>
    )
  }
}

export default Classify;