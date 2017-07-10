import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hero is-dark">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={logo} className="app-logo" alt="logo" />
              <h2 className="title">Welcome to React</h2>
              <h2 className="subtitle">Simple address book.</h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
