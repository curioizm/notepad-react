import React from 'react'
import { render } from 'react-dom'

import Editor from './components/editor'

var remote = require('remote')
var BrowserWindow = remote.require('browser-window')
var newWindow = new BrowserWindow({})
newWindow.loadURL(`file://${__dirname}/dist/index.html`)

let appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

render(<Editor />, appNode)
