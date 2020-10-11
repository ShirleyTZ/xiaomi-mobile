import React, { Component } from 'react';
import BtnList from '../PublicComponent/BtnList';
import {headLeft, headRight} from '../Cart/CartResource/CR';
import {btnList, 
  moreLink, 
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
          </div>
        </section>
        
      </div>
    )
  }
}

export default Classify;