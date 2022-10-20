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












const btnList = document.querySelector('.buttons')
const text = document.querySelector('.text')
console.log(btnList)

const number = ['1','2','3','4','5','6','7','8','9','.'];
const action = ['+', '-', '+/-', 'AC', '/', '%'];

let firstNum = '';
let lastNum = '';
let sign = '';
let finish = false;


btnList.addEventListener('click', onClickBtn)

function onClickBtn (evt){
    
    if(!evt.target.classList.contains('btn')){
        return;
    }
    
    
    const value = evt.target.textContent;
    // если нажали на 0-9
    if(number.includes(value)){
        if(firstNum === '' && sign === ''){
        firstNum += value
        console.log(firstNum, lastNum, sign)
        text.textContent = firstNum;
        }
    }
    // работает второе(lastNum) число
    else {
        lastNum += value;
        text.textContent = lastNum;
        
        return
    }
    // console.log(firstNum,lastNum, sign)


    // if(action.includes(value)){
    //     sign += value;
    //     text.textContent = sign;
    //     return;
    // }
}
    // делаем кнопку "="
//     if(value === '='){
//         switch (sign){
//             case '+':
//             firstNum = (+firstNum) + (+lastNum);
//             break;

//             case '-':
//             firstNum = firstNum - lastNum;
//             break;

//             case 'x':
//                 firstNum = firstNum * lastNum;
//                 break;
            
//             case '/':
//                 if(lastNum === '0'){
//                     return 'Ты дурак?'
//                 }
//                 firstNum = firstNum / lastNum;
//                 break;

//             case '+/-':
//                 firstNum = firstNum * (-1);
//                 break;

//             case '%':
//                 firstNum = firstNum % lastNum;
//                 break;
//         }
//         finish = true;
//         text.textContent = firstNum;
//         console.log(firstNum, lastNum, sign);
//     }
    
// }


// чистим кнопкой "АС"
const remove = document.querySelector('.remove')
console.log(remove)

remove.addEventListener('click', onClear);

function onClear (evt){
    text.innerHTML = '';
}