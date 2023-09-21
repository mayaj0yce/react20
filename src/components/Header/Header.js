import React from 'react'
// import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <section class="hero is-warning center">
      <div class="hero-head">
        <nav class='navbar'>
          <div class='container'>
            <div class='navbar-brand'>
              {/* eslint-disable-next-line */}
              <a class='title'>
                MayaJ0yce Thayne
              </a>
            </div>
            <nav class="navbar is-warning" role="navigation"
              aria-label="main navigation">
              <div class="navbar-item has-dropdown is-hoverable">
                {/* eslint-disable-next-line */}
                <a class="navbar-link">
                  menu
                </a>

                <div class="navbar-dropdown text-is-black">
                  <a class="navbar-item" href="/">
                    About Me
                  </a>
                  <a class="navbar-item" href="/contact">
                    Contact Info
                  </a>
                  <a class="navbar-item" href="/resume">
                    Resume
                  </a>
                  <a class="navbar-item" href="/portfolio">
                    Portfolio
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </section>

  )
}

export default Header