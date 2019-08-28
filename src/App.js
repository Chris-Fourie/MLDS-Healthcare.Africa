import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MLDS-Healthcare-Africa</h2>
        </div>
        <p className="App-intro">
        <a href="https://groups.google.com/forum/#!forum/mlds-healthcare-africa">Join the mailing list =) </a>         
        </p>
    
        <p className="App-intro">
        <a href="https://riot.im/app/#/room/!pGHfSNOHIzpoviybUU:matrix.org">Join project - Anatomical Pathology - Ectopic Classification </a>
        </p>
      
        <p className="App-intro">
        <a href="https://riot.im/app/#/room/!fdOOXaNriNwCZOmwoa:matrix.org">Join project - Haematology - Acute Leukemia Diagnosis Pipeline </a>
        </p>
        
      
      </div>
    );
  }
}

export default App;
