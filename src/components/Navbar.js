import React, { Component } from 'react';
//import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="grid nav nav--main">
        <ul className="container--fixed grid__col-xs-12 grid--wrap grid--direction-row grid--align-center">
          <li className="nav__item">
            <a className="nav__item__link nav__item__link--logo" href="/">
              Pageturner
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
