const refs = {
    textRef: document.querySelector('.text'),
    btnListRef: document.querySelector('.buttons')
}
let preNum = '';
let currentNum = '';
console.log(refs.btnListRef)
console.log(refs.textRef)
let counterValue = 0;
refs.btnListRef.addEventListener('click', onClickBtn)

function onClickBtn(evt) {
    if(!evt.target.classList.contains('btn')){
        return;
    }
    const value = evt.target.textContent;
    console.log(value)

    switch (value) {
        case 'AC': 
        refs.textRef.textContent = '';
        break;
        case '+/-':
        refs.textRef.textContent = eval(refs.textRef.textContent * (-1))
        case '=':
        refs.textRef.textContent = eval(refs.textRef.textContent).toFixed(3);
        break;
        default: 
        refs.textRef.textContent += value
    }

    
}











