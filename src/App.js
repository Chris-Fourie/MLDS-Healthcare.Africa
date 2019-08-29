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
              
        <p align="left" class="container-fluid">
        <a href="https://groups.google.com/forum/#!forum/mlds-healthcare-africa">Join the mailing list =) </a>         
        </p>
        
        <div align="left" class="container-fluid">
        <p align="left" class="container-fluid">
        List of Projects: 
        </p>  
        <p align="left" class="container-fluid">
        <a href="https://riot.im/app/#/room/!pGHfSNOHIzpoviybUU:matrix.org">Anatomical Pathology - Ectopic Classification </a>
        </p>
        <p align="left" class="container-fluid">
        <a href="https://riot.im/app/#/room/!fdOOXaNriNwCZOmwoa:matrix.org">Haematology - Acute Leukemia Diagnosis Pipeline </a>
        </p>
        </div>
      
      </div>
    );
  }
}

export default App;
