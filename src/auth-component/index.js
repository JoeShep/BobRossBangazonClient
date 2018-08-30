import React, { Component } from "react";
import "./auth.css";

class Auth extends Component {

  onChange(e) {
    const user = Object.assign({}, this.props.authState);
    user[e.target.name] = e.target.value;
    this.props.setAuthState(user, () => {
      console.log("Staaaatee", this.props.authState)
    });
  }

  register() {
    console.log("register called")
    const user = Object.assign({}, this.props.authState);
    console.log("user?", user)
    return fetch("http://127.0.0.1:8080/register/", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((response) => {
      console.log('"auth', response);
      return response.json();
    })
    .then((responseToken) => {
      console.log('converted token', responseToken.token);
      localStorage.setItem("token", responseToken.token)
      return this.setState({
        user: this.props.authState.username,
        token: responseToken.token,
        username: "",
        password: ""
      })
    })
    .catch((err) => {
      console.log("auth no like you, brah", err);
    })
  }

  render() {
    const { username, password } = this.props.authState
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => this.onChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => this.onChange(e)}
        />
        <button onClick = {() => this.register()}>Submit</button>
      </div>
    )
  }
}

export default Auth
