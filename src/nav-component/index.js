import React, { Component } from "react";
import './nav.css';

class Nav extends Component {

  displayRegister() {
    this.props.setAuthState({
      register: true,
      showUserForm: true
    })
  }

  displayLogin() {
    console.log("Something coming here soon")
    this.props.setAuthState({
      register: false,
      showUserForm: true
    })
  }

  render() {
    const isAuth = this.props.isAuth
    return (
      <nav>
        <h3>This is a nav bar</h3>
        { isAuth &&
          <h3>Welcome, {this.props.user}</h3>
        }
        <ul>
          <li>
            <button onClick = { () => isAuth ? this.logOut() : this.displayLogin()}> Log {isAuth ? "out" : "in"} </button>
          </li>
          <li>
            <button onClick={ () => this.displayRegister()}>Register</button>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Nav
