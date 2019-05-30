import React, { memo } from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import messenger from '../img/social/messenger.svg'

const Social = ({ title, href, src, ...otherImageProps }) => {
  return <a title={title} href={href} target="_blank" rel="noopener noreferrer">
    <img
      src={src}
      {...otherImageProps}
    />
  </a>
}

const socialStyle = { width: '1em', height: '1em' };

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                  </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                  </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/products">
                      Products
                  </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                  </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                  </a>
                  </li>
                </ul>
              </section>
            </div>

            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                  </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                  </Link>
                  </li>
                </ul>
              </section>
            </div>

            <div className="column is-4 social">
              <Social
                title="facebook"
                href="https://www.facebook.com/ExtraordinaryPet/"
                src={facebook} style={socialStyle}
                alt="Extraordinary Pet Facebook Page"
              />
              <Social
                title="twitter"
                href="https://twitter.com"
                src={twitter} style={socialStyle}
                alt="Extraordinary Pet Twitter Page" />
              <Social
                title="instagram"
                href="https://instagram.com"
                src={instagram} style={socialStyle}
                alt="Extraordinary Pet Instagram Page" />
              <Social
                title="messenger"
                href="https://m.me/ExtraordinaryPet"
                src={messenger} style={socialStyle}
                alt="Extraordinary Pet Messenger Chat" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default memo(Footer) 
