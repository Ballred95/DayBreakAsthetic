import React, { Component } from 'react';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
      </div>
    );
  }
}
