import React, { Component } from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import '../scss/pages/index.css'

class IndexPage extends Component {
  render() {
    return (
      <div className="page__index">
        <Hero />
        <HowItWorks />
      </div>
    )
  }
}

export default IndexPage
