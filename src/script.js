// LIGHT - DARK MODE SWITCH

const rootEl = document.documentElement;
const colorModeSwitchBtnEl = document.querySelector('.sidebar__section-theme-button');

function switchColorModes(e) {
    rootEl.classList.toggle('dark');
}


// EVENT LISTENERS

colorModeSwitchBtnEl.addEventListener('click',switchColorModes);