'use strict'

let app = require('app')
let BrowserWindow = require('browser-window')
let Menu = require('menu')

let mainWindow = null
let chkWordWrap = false

const template = [
  {
    label: 'ファイル(&F)',
    submenu: [
      {
        label: '新規(&N)',
        accelerator: 'Ctrl+N',
        click: () => { console.log('aaa!') }
      },
      {
        label: '開く(&O)...',
        accelerator: 'Ctrl+O'
      }
    ]
  },
  {
    label: '編集(&E)'
  },
  {
    label: '書式(&O)',
    submenu: [
      {
        label: '右端で折り返す(&W)',
        type: 'checkbox',
        checked: chkWordWrap,
        click: () => {
          chkWordWrap = !chkWordWrap
          mainWindow.webContents.send('wordWrap', chkWordWrap)
        }
      }
    ]
  },
  {
    label: '表示(&V)'
  },
  {
    label: 'ヘルプ(&H)'
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

require('crash-reporter').start()

console.dir(BrowserWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null })
})
