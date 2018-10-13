import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
      // footer with link to github creator profile
      <div className="footer-main">
        <div className="our-store">
          <h4>Our Store</h4>
          <span className="address">141 South Grand Avenue</span>
          <span className="address-two">Los Angeles, CA 90015</span>
          <span className="phone">(231) 748-2411</span>
          <p>62 George Road E48NF, London, Essex</p>
        </div>
        <div className="blog-posts">
          <h4>Blog Posts</h4>
          <p className="complains">Lorem ipsum dolor sit amet.</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br></br><br></br>
          <span className="owner"> | Created by <a href="https://github.com/ShokadinuEU"
          target="_blank" rel="noopener noreferrer" className="sub-owner">
           ShokadinuEU</a>&reg; | </span>
        </div>
        <div className="support">
          <h4>Support</h4>
          <span>Terms & Conditions</span>
          <span>FAQ</span>
          <span>Track Order</span>
          <span>Services</span>
        </div>
      </div>
    )
}

export default Footer
