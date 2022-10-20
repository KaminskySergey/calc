const btnOpen = document.querySelector('[data-action="open-modal"]');
// console.log(btnOpen)
const backdrop = document.querySelector('.js-backdrop');
// console.log(backdrop)
const btnClose = document.querySelector('[data-action="close-modal"]');
// console.log(btnClose);



btnOpen.addEventListener('click', onBtnOpen);

btnClose.addEventListener('click', onBtnClose);

backdrop.addEventListener('click', onBackdropClose);

function onBtnOpen(){
window.addEventListener('keydown', oncloseEscape)
document.body.classList.add('show-modal');
}

function onBtnClose(){
window.removeEventListener('keydown', oncloseEscape)
document.body.classList.remove('show-modal');
}

function onBackdropClose(evt){
    if(evt.target === evt.currentTarget){
        onBtnClose();
    }
}

function oncloseEscape(evt){
    console.log(evt.code)
    if(evt.code === 'Escape'){
        onBtnClose();
    }
}
