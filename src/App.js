import React, { Component } from 'react';
import './App.css';
import Auth from './auth-component'
import Nav from './nav-component'

class App extends Component {

  state = {
    username: "",
    password: "",
    isAuth: false
  }

  setAuthState(authObj) {
    this.setState(authObj)
  }

  render() {
    return (
      <div className="App">
        <Nav isAuth={this.state.isAuth}/>
        <h1>This is Bangazon, Bob Ross style</h1>
        <Auth authState={this.state} setAuthState={ (obj) => this.setAuthState(obj)} />
      </div>
    );
  }
}

export default App;
