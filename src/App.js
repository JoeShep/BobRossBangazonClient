import React, { Component } from 'react';
import './App.css';
import Auth from './auth-component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is Bangazon, Bob Ross style</h1>
        <Auth />
      </div>
    );
  }
}

export default App;
