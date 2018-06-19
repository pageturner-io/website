import React, { Component } from 'react'
import SiriWave from './SiriWave'

class Hero extends Component {
  render() {
    return (
      <section className="grid hero hero--index">
        <div className="grid__col-xs-3"></div>
        <div className="grid__col-xs-6 grid--justify-center grid--align-center">
          <SiriWave />
          <h1 className="title title--hero">
            <em>Shhh…</em> Can you hear that? It’s the sound of the Web.
          </h1>
          <p className="description description--hero">
            Pageturner lets you hear any article on the Web, so you can enjoy the great content you already read while on the go.
          </p>

          <div className="grid hero__cta grid--justify-center grid--align-center">
            <div className="grid__col-xs-12 grid__col-sm-5">
              <a href="#how-it-works" className="btn btn--secondary">
                How it works
              </a>
            </div>
            <div className="grid__col-xs-12 grid__col-sm-5">
              <a href="/register" className="btn btn--primary">Register now</a>
            </div>
          </div>
        </div>
        <div className="grid__col-xs-3"></div>
      </section>
    )
  }
}

export default Hero
