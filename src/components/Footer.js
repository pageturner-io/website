import React, { Component } from 'react';
//import './Footer.css';

class Footer extends Component {

  get currentYear() {
    return new Date().getUTCFullYear()
  }

  render() {
    return (
      <footer className="container--fixed footer">
        <div className="grid">
          <div className="grid__col-xs-2 grid__col--bleed-x footer__copyright">
            &copy; Pageturner {this.currentYear}
          </div>
          <div className="grid__col-xs-10 grid__col--bleed-x footer__links">
            <ul className="list">
              <li className="list__item">
                <a href="https://twitter.com/pageturnerio">Twitter</a>
              </li>
              <li className="list__item">
                <a href="https://facebook.com/pageturnerio">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
