'use strict'

import React from 'react'
import { render } from 'react-dom'

import Editor from './components/editor'

let appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

render(<Editor />, appNode)
