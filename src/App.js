import React from 'react';
import logo from './logo.svg';
import Divify from './components/Divify'
import './App.css';
let text = require("./text.json")

function App() {
  return (
    <div className="App">
      <Divify text={text}></Divify>
    </div>
  );
}

export default App;
