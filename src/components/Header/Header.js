import React from 'react'
// import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <section class="hero is-primary center">
      <div class="hero-head">
        <nav class='navbar'>
          <div class='container'>
            <div class='navbar-brand'>
              <a class='title'>
                MayaJ0yce Thayne
              </a>
            </div>
            <nav class="navbar is-light" role="navigation"
              aria-label="main navigation">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
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