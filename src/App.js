import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Panels from './components/panels/Panels'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    axios.get('./response.json')
      .then(result => this.setState({
        data: result.data,
        isLoading: false 
      }))
      .catch(error => this.setState({ 
        error, 
        isLoading: false 
      }));
    }
    
    render() {
      const { data, isLoading, error } = this.state
      console.log(data.short_name)
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }
    return (
      <div className="App">
        {data.map(item =>
            <div>
              <Menu />
              <Header name={item.long_name} />
              <Panels />
              <Content />
              <Footer />
            </div>
          )}
      </div>
    )
  }
}

export default App;
