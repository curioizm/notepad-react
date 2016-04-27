'use strict'

import React from 'react'
import ipc from 'ipc'

require('../styles/editor')

let cls = (check) => {
  return check ? 'wdwp-break' : 'wdwp-normal'
}

export default class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      check: false
    }
  }
  componentDidMount () {
    ipc.on('wordWrap', (msg) => {
      this.setState({ check: msg })
    })
  }
  render () {
    return (
      <textarea className={cls(this.state.check)}></textarea>
    )
  }
}
