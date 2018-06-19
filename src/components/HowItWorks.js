import React, { Component } from 'react'
import content from '../config/howItWorks.json'

class HowItWorks extends Component {
  render() {
    return (
      <section id="how-it-works" className="grid howitworks howitworks--index page__section">

        {content.steps.map((step, index) =>
          <article key={index} className={`grid__col-xs-12 howitworks__step howitworks__step--${index % 2 === 0 ? "even": "odd"} container--fixed`}>
            <h2 className="howitworks__step__subtitle">{step.subtitle}</h2>
            <h1 className="howitworks__step__title">{step.title}</h1>
            <p className="howitworks__step__paragraph">{step.text}</p>
          </article>
        )}
      </section>
    )
  }
}

export default HowItWorks
