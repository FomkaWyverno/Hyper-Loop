const buttonMenu = document.querySelector('.frameElement__boxSvg');
const settingMenu = document.querySelector('.setting__menu');

settingMenu.style.display = 'block';
hideMenu(settingMenu);


buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('openMenu');
    if (buttonMenu.classList.contains('openMenu')) {
        openMenu(settingMenu);
    } else {
        hideMenu(settingMenu);
    }
});


function hideMenu(menu) {
    menu.style.top = -menu.clientHeight;
}
function openMenu(menu) {
    menu.style.top = '100%';
}