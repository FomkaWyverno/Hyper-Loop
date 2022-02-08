const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const ipc = ipcMain;

let win;

function createWindow() {
    win = new BrowserWindow({
        width:1280,
        height:720,
        minHeight:360,
        minWidth:720,
        show: false,
        frame: false,
        webPreferences: {
            nodeIntegration:true,

            contextIsolation:false,
            devTools:true,
            preload: path.join(__dirname,'preload.js')
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/main.html'),
        protocol: 'file',
        slashes: true
    }));
    win.once('ready-to-show', () => {
        win.show();
    });
    win.on('close', () => {
        win = null;
    });


    ipc.on('closeApp', () => {
        win.close();
    });
    ipc.on('reSizeApp',(skip,date) =>{
        if (date == 0) {
            win.maximize();
        } else {
            win.restore();
        }
    });
    ipc.on('minimizeApp', () => {
        win.minimize();
    });

    win.on('maximize', () => {
        win.webContents.send('isMax');
    });
    win.on('unmaximize',()=>{
        win.webContents.send('isMin');
    });
}


app.on('ready', createWindow);