import React, { Component } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Panels from './components/panels/Panels'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Panels />
      </div>
    );
  }
}

export default App;
