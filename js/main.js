const {app, BrowserWindow, ipcMain, Menu, Tray} = require('electron');
const path = require('path');
const url = require('url');

//init win
let win;

function createWindow(){
    //Create browser window
    win = new BrowserWindow({
        width:900,
        height:700,
        minWidth: 900,
        minHeight: 700,
        maxWidth: 1200,
        maxHeight: 800,
        icon: path.join(__dirname, "build", "weather.png"),
        frame: false,
        center: true,
        transparent: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    }));
}

//Run create window function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

