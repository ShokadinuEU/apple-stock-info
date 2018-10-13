import React, { Component } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Panels from './components/panels/Panels'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Panels />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
