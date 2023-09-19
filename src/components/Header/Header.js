import React from 'react'
// import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <section class="hero is-info">
      <div class="hero-body">
        <p class='title'>
          MayaJ0yce Thayne
        </p>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            About Me
          </a>
          
            <div class="navbar-dropdown is-boxed">
            <a  class="navbar-link" href="/contact">
              Contact Info
              </a>
              <a class="navbar-link" href="/resume">
                Resume
              </a>
              <a class="navbar-item" href="/portfolio">
                Portfolio
              </a>
            </div>

          </div>
          </div>
       
        </section>
        )
}

        export default Header