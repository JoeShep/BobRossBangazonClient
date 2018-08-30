import React, { Component } from 'react';
import './App.css';
import Auth from './auth-component'
import Nav from './nav-component'

class App extends Component {

  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    isAuth: false,
    register: false,
    showUserForm: false,
    user: ""
  }

  setAuthState(authObj) {
    this.setState(authObj)
  }

  render() {
    return (
      <div className="App">
        <Nav isAuth={this.state.isAuth} user={this.state.user} setAuthState={ (obj) => this.setAuthState(obj)}/>
        <h1>This is Bangazon, Bob Ross style</h1>

        {this.state.showUserForm ? <Auth authState={this.state} setAuthState={ (obj) => this.setAuthState(obj)} /> : null}
      </div>
    );
  }
}

export default App;
