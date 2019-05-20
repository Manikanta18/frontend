import React from 'react';
import "./App.css"
import vwi_logo from './media/logo.jpeg'
// import vwiFull from './media/vwiFul.jpeg'

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vwi_logo} className="App-logo" alt="logo" />
        <p>
          Vishaka welding Institute
        </p>
      </header>
    </div>
  );
}

export default Loading;
