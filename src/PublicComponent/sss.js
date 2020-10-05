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