import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiriWave9 from '../vendor/siriwave'

class SiriWave extends Component {
  static propTypes = {
    speed: PropTypes.number,
    amplitude: PropTypes.number,
    autostart: PropTypes.bool,
    cover: PropTypes.bool,
    speedInterpolationSpeed: PropTypes.number,
    amplitudeInterpolationSpeed: PropTypes.number
  }

  static defaultProps = {
    speed: 1,
    amplitude: 0.8,
    autostart: true,
    cover: true,
    speedInterpolationSpeed: 0.01,
    amplitudeInterpolationSpeed: 0.01
  }

  constructor(props, defaultProps) {
    super(props, defaultProps)

    this.siriWave = null
    this.siriWaveRef = React.createRef()
  }

  componentDidMount() {
    const {
      speed,
      amplitude,
      autostart,
      cover,
      speedInterpolationSpeed,
      amplitudeInterpolationSpeed
    } = this.props

    this.siriWave = new SiriWave9({
      width: this.siriWaveRef.current.clientWidth,
      height: this.siriWaveRef.current.clientHeight,
      container: this.siriWaveRef.current,
      speed,
      amplitude,
      autostart,
      cover,
      speedInterpolationSpeed,
      amplitudeInterpolationSpeed
    })
  }

  render() {
    return (
      <div className='siri-wave' ref={ this.siriWaveRef } />
    )
  }
}

export default SiriWave
