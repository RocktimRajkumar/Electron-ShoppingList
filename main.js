const electron = require('electron');
const url = require('url');
const path = require('path');


const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// Listen for the app to be ready 
app.on('ready', function () {

    // create new window
    mainWindow = new BrowserWindow({});

    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainWindowTemplate);

    // insert menu
    Menu.setApplicationMenu(mainMenu);

});


//  Create menu Template
const mainWindowTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item'
            },
            {
                label: 'Clear Item'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];