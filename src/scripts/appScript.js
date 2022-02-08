const { ipcRenderer } = require('electron');

const ipc = ipcRenderer;

closeApp.addEventListener('click', ()=>{
    ipc.send('closeApp');
});

resizeApp.addEventListener('click', ()=> {
    ipc.send('reSizeApp',resizeApp.getAttribute('data-state'));
});

rollUpApp.addEventListener('click', () => {
    ipc.send('minimizeApp');
})

ipc.on('isMax', ()=> {
    resizeEvent(resizeApp,1);
});
ipc.on('isMin', () => {
    resizeEvent(resizeApp,0);
})


function resizeEvent(button,type) {
    button.setAttribute('data-state',type);
    if (button.getAttribute('data-state') == 0) {
        button.classList.remove('fullscreen');
    } else {
        button.classList.add('fullscreen');
    }
}