import React, { Component } from 'react';
import './App.css';
import Editor from './components/editor'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Editor/>
    </div>
  );
}

export default App;
