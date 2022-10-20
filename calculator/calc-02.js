const btnList = document.querySelector('.buttons')
const text = document.querySelector('.text')
console.log(btnList)

const number = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+', '-', '+/-', '/', '%', 'x'];

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
        if(lastNum === '' && sign === ''){
        firstNum += value
        text.textContent = firstNum;
        console.log(firstNum, lastNum, sign)
        }
        else if (firstNum !== '' && lastNum !== ''){
            lastNum = value;
            
            text.textContent = lastNum
        }
        
         // работает второе(lastNum) число
        else{
        lastNum += value;
        text.textContent = lastNum
        console.log(firstNum, lastNum, sign)
        }
        
    }

    if(action.includes(value)){
        sign = value;
        text.textContent = sign;
        console.log(firstNum, lastNum, sign)
        return
        
    }

    // делаем кнопку "="
    if(value === '='){
        if(lastNum === ''){
            lastNum = firstNum;
        }
        switch (sign){
            case '+':
            firstNum = (+firstNum) + (+lastNum);
            break;

            case '-':
            firstNum = firstNum - lastNum;
            break;

            case 'x':
                firstNum = firstNum * lastNum;
                break;
            
            case '/':
                if(lastNum === '0'){
                    text.textContent =  'Ты дурак?';
                    return;
                }
                firstNum = firstNum / lastNum;
                break;

            case '+/-':
                firstNum = (firstNum * -1);
                break;

            case '%':
                firstNum = firstNum % lastNum;
                break;
        }
        finish = true
        text.textContent = firstNum;
        console.log(firstNum, lastNum, sign);
    }
    
}
// чистим кнопкой "АС"
const remove = document.querySelector('.remove')
console.log(remove)

remove.addEventListener('click', onClear);

function onClear (evt){
    text.textContent = 0;
}