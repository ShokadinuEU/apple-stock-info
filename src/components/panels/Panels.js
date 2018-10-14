import React, { Component } from 'react'
import './panels.scss'

class Panels extends Component {
  render() {
    return (
      // the three panels beneath image slider
      <article className="panel-main">
      <div className="panel-container">
        <div className="panel-block">
          <i className="image-panel fas fa-globe-americas fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">{this.props.nameShort}</h3>
            <p className="text-panel">
            Market Value: {this.props.marketValue} <br />
            Enterprise Value : {this.props.enterpriseValue} <br />
            Price Change : {this.props.priceChange}</p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel fas fa-cogs fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel check">Name:  {this.props.nameShort} ✓</h3>
            <p className="text-panel check">
            Ticker:  {this.props.ticker} ✓<br /> 
            Price:  {this.props.price} ✓<br /></p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel far fa-lightbulb fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">{this.props.nameShort}</h3>
            <p className="text-panel">
            Isin: {this.props.isin} <br />
            Sector Code: {this.props.sectorCode}</p>
            <button>More here ></button>
          </div>
        </div>
      </div>
    </article>
    )
  }
}


export default Panels
