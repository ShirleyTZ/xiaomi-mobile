const maths = { 
  "icon-home": "",
  "icon-category": "",
  "icon-star": "",
  "icon-cart": "",
  "icon-user": "",
}
const maths2 = {
  "icon-home-selected": "",
  "icon-category-selected": "",
  "icon-star-selected": "",
  "icon-cart-selected": "",
  "icon-user-selected": "",
}

export let ticksPre1 = Object.keys(maths).map(item => require("./PublicResource/"+ item + ".png"));
export let ticksPre2 = Object.keys(maths2).map(item => require("./PublicResource/"+ item + ".png"));
export let items = [
  {
    img: {backgroundImage: `url(${ticksPre1[0]})`},
    desc: "首页",
  }, {
    img: {backgroundImage: `url(${ticksPre1[1]})`},
    desc: "分类",
  }, {
    img: {backgroundImage: `url(${ticksPre1[2]})`},
    desc: "星球",
  }, {
    img: {backgroundImage: `url(${ticksPre1[3]})`},
    desc: "购物车",
  }, {
    img: {backgroundImage: `url(${ticksPre1[4]})`},
    desc: "我的",
  }
]