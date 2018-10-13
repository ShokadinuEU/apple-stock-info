  import React, { Component } from 'react'
  import './header.scss'
  import {Carousel} from 'react-bootstrap'
  
 class Header extends Component {
    render() {
    return (
      <header className="main-header">
      <h1 className="title-header">{this.props.name}</h1>
      <div className="slider-header">
        <Carousel>
          <Carousel.Item>
            <img  height={200} alt="1" src="./img/img1.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img height={200} alt="2" src="./img/img2.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img height={200} alt="3" src="./img/img3.jpg" />
          </Carousel.Item>
        </Carousel>
      </div>
    </header>
    )
  }
}

export default Header
