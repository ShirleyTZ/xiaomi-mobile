changeRoute(state) {
    console.log(state);
    if(state.id == 0) {
      this.props.history.push({pathname: '/', state: state})
      console.log(state);
    }
    
    if(state.id == 1) {
      this.props.history.push({pathname: '/Classify/', state: state})
      console.log(state);
    }

    if(state.id === 2) {
      console.log(state);
      this.props.history.push({pathname: '/Star/', state: state})
    }

    if(state.id === 3) {
      console.log(state);
      this.props.history.push({pathname: '/Cart/', state: state})
    }

    if(state.id === 4) {
      console.log(state);
      this.props.history.push({pathname: '/User/', state: state})
    }
  }

  onClick={this.changeRoute.bind(this)}

  onClick={this.props.onClick.bind(this, {id: i})} 


  export let orders = [
    {
      img: {backgroundImage: require("./CategoryPannelResource/cate1.png")},
          name: "米10至尊版",
          desc: "至尊体验",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate2.png")},
          name: "K30 至尊",
          desc: "K30 超大杯",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate3.jpg")},
      name: "上新了小米",
          desc: "683个小伙伴",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate4.jpg")},
      name: "九月摄影",
          desc: "",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate5.jpg")},
      name: "",
          desc: "",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate6.jpg")},
      name: "",
          desc: "",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate7.jpg")},
      name: "",
          desc: "",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate8.png")},
      name: "",
          desc: "",
    }, {
      img: {backgroundImage: require("./CategoryPannelResource/cate9.jpg")},
      name: "",
          desc: "",
    }, {
          img: {backgroundImage: require("./CategoryPannelResource/cate10.jpg")},
          name: "",
          desc: "",
      }, {
          img: {backgroundImage: require("./CategoryPannelResource/cate11.jpg")},
          name: "",
          desc: "",
      }
  ]