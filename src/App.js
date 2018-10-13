import React, { Component } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
      </div>
    );
  }
}

export default App;
