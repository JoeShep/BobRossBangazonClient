import React, { Component } from "react";
import './nav.css';

class Nav extends Component {

  render() {
    const isAuth = this.props.isAuth
    return (
      <nav>
        <h3>This is a nav bar</h3>
        <ul>
          <li>
            <button onClick = {e => isAuth ? this.logOut(e) : this.displayLogin(e)}> Log {isAuth ? "out" : "in"} </button>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Nav
