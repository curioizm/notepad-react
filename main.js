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
      },
      {
        label: '上書き保存(&S)',
        accelerator: 'Ctrl+S'
      },
      {
        label: '名前を付けて保存(&A)...'
      },
      { type: 'separator' },
      {
        label: 'ページ設定(&U)...'
      },
      {
        label: '印刷(&P)...',
        accelerator: 'Ctrl+P'
      },
      { type: 'separator' },
      {
        label: 'メモ帳の終了(&X)'
      }
    ]
  },
  {
    label: '編集(&E)',
    submenu: [
      {
        label: '元に戻す(&U)',
        accelerator: 'Ctrl+Z'
      },
      { type: 'separator' }
    ]
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
    label: '表示(&V)',
    submenu: [
      {
        label: 'ステータスバー(&S)'
      }
    ]
  },
  {
    label: 'ヘルプ(&H)',
    submenu: [
      {
        label: 'ヘルプの表示(&H)'
      }
    ]
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
