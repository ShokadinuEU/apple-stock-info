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
            <div id={item.market_value}>
              <Menu />
              <Header name={item.long_name} />
              <Panels 
                ticker={item.ticker}
                repo_no={item.repo_no}
                indices={item.indices}
                home_page={item.home_page}
                ric={item.ric}
                sic={item.sic}
                isin={item.isin}
                sectorCode={item.sector_code_name}
              />
              <Content 
                shortName={item.short_name}
                founded={item.ipo}
                financial={item.financial_summary}
                equity={item.equity_composition}
                liOne={item.indices[0]}
                liTwo={item.indices[1]}
                liThree={item.indices[2]}
                liFour={item.indices[3]}
              />
              <Footer />
            </div>
          )}
      </div>
    )
  }
}

export default App;
