import React, { Component } from 'react'
import './content.scss'

class Content extends Component {
  render() {
    return (
      <content>
        <div className="main-content">
          <div className="text-content">
            <h2>{this.props.shortName} {this.props.founded}</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.financial}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.equity}</p>
          <ul className="li-content">
            <li>{this.props.liOne}</li>
            <li>{this.props.liTwo}</li>
            <li>{this.props.liThree}</li>
            <li>{this.props.liFour}</li>
          </ul>
        </div>
        <div className="panels-content">
          <div className="join-content">Join US Now!&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-alt-circle-right fa-1x"></i></div>
          <div className="news-content-panel">
            <h3>News</h3>
            <a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>
            <a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>
            <a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>
            <a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>
            <a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>
          </div>
        </div>
      </div>
    </content>
    )
  }
}

export default Content