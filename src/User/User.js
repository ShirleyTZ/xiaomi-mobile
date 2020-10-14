import React, { Component } from 'react';
import '../User/User.css';
import {ticksPre1, orders, articleImgs} from './UserResource/UR';
import BtnWithImgsAndDesc from '../PublicComponent/BtnWithImgsAndDesc';
import SubArticleParts from './SubArticleParts/SubArticleParts';

class User extends Component {
  render() {
    return (
      <section className="User">
        <header className="User-header">
          <div className="User-header-content">
            <img 
              className="User-header-img" 
              src={ticksPre1[0]}
              alt=""
              />
          </div>
          <div>登录/注册</div>
        </header>

        <article className="User-article-Order">
          <div className="myOrdersBox">
            <div className="myOrders">我的订单</div>
            <div className="allOrders">
              <a>全部订单</a>
            </div>
          </div>
          <BtnWithImgsAndDesc 
              items={orders}
              btnBox="User-order-box" 
              btnitemsWrapper="User-order-items-wrapper"
              btnName="User-order" 
              imgClassName="User-order-img" 
              descClassName="User-order-desc"
              />
        </article>
        
        <SubArticleParts items={articleImgs}/>
        
        <footer className="User-footer-box">
          <a className="User-article User-footer">
            <div className="User-article-img"></div>
            <span className="User-article-desc">设置</span>
          </a>
        </footer>
      </section>
    )
  }
}

export default User;