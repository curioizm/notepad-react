'use strict'

let app = require('app')
let BrowserWindow = require('browser-window')

require('crash-reporter').start()

console.dir(BrowserWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  let mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null })
})
