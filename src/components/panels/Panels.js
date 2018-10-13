import './panels.scss'
import React, { Component } from 'react'

class Panels extends Component {
  render() {
    return (
      // the three panels beneath image slider
      <article className="panel-main">
      <div className="panel-container">
        <div className="panel-block">
          <i className="image-panel fas fa-globe-americas fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">{this.props.ticker}</h3>
            <p className="text-panel">{this.props.indices}</p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel fas fa-cogs fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">{this.props.nameShort}</h3>
            <p className="text-panel">{this.props.ticker} <br />{this.props.price} <br />{this.props.home_page}</p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel far fa-lightbulb fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">{this.props.repo_no}</h3>
            <p className="text-panel">{this.props.isin} <br />
            {this.props.sectorCode}<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button>More here ></button>
          </div>
        </div>
      </div>
    </article>
    )
  }
}


export default Panels
