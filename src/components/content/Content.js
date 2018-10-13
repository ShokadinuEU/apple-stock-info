import React from 'react'
import './content.scss'

const Content = () => {
  return (
    <content>
      <div className="main-content">
        <div className="text-content">
          <h2>Here will be the header</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam laborum distinctio inventore, libero illum voluptates eum ullam minus architecto at explicabo. Quia officiis explicabo, ea omnis dolor molestias at, vitae minima sunt magnam consequatur asperiores ipsa dolore minus reiciendis!</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore corrupti consectetur? Velit soluta quaerat deleniti ipsum magni repellat. Ipsum eveniet deleniti nostrum cum? Adipisci eos fuga, magni facere nesciunt veniam aliquid!</p>
        <ul className="li-content">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
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

export default Content