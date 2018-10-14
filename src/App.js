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

  // fetch date from internal json file using axios
  componentDidMount(){
    var data = JSON.stringify({
      "conditions": {
        "_id": "6c8227be-6855-11e4-98bf-294717b2347c"
      },
      "select": "_all"
    })
    this.setState({ isLoading: true })
    axios.put('https://api.stockflare.com/search', data, {
      header: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      }
    })
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
    // check for the errors in case data is failing to load
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }
    return (
      <div className="App">
      {/* map trough json file to get the data we want */}
        {data.map((info, i) =>
          <div key={i}>
            <Menu />
            <Header name={info.long_name} />
            <Panels 
              nameShort={info.short_name}
              marketValue={info.market_value}
              enterpriseValue={info.enterprise_value}
              priceChange={info.price_change}
              ticker={info.ticker}
              price={info.price}
              isin={info.isin}
              sectorCode={info.sector_code_name}
            />
            <Content 
              brand={info.short_name}
              founded={info.ipo}
              description={info.description}
              equity={info.equity_composition}
              liOne={info.indices[0]}
              liTwo={info.indices[1]}
              liThree={info.indices[2]}
              liFour={info.indices[3]}
              financial={info.financial_summary}
              />
            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default App;
