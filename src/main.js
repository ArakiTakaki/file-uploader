"use strict"
const { app,BrowserWindow } = require("electron");
const path = require('path');

// console.log('entry html:', path.join(__dirname, './index.html'));
// 画面の拡大縮小制御
// webFrame.setZoomLevelLimets(1, 1);

app.on("window-all-closed",function(){
  if(process.platform !== "darwin"){
    app.quit();
  }
});


app.on("ready",function(){
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    x: 0,
    y: 0,
    kiosk: false,
    fullscreen: false, 
    frame: true,
  });

  mainWindow.loadFile(path.join(__dirname, './index.html'));
  mainWindow.setMenu(null);

  // devtoolを開く
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed",function(){
  	app.quit();
  });
});

