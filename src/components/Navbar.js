import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  useEffect(() => {
    active
      ? setNavBarActiveClass('is-active')
      : setNavBarActiveClass('')
  }, [active])

  const _toggleHamburger = () => setActive(!active);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">

            <h1 className="title">ReptileNation</h1>
            {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => _toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            {/* Left nav items here */}
          </div>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/gallery">
              Gallery
            </Link>
            {/* <Link className="navbar-item" to="/products">
              Products
            </Link> */}
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            {/* <Link className="navbar-item" to="/contact">
              Contact
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
