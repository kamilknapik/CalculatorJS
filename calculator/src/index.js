let firstScore = '';
let SecScore = '';
let resultOne = undefined;
let lastValue = '';
let put = false;

const scoreF1 = document.querySelector('.scoreFirst');
const scoreF2 = document.querySelector('.scoreSec');
const allNumber = document.querySelectorAll('.number');
const valueNumber = document.querySelectorAll('.value');
const plain = document.querySelector('.plain');
const allClear = document.querySelector('.clear');
const lastClear = document.querySelector('.last_clear');

// appear after click

valueNumber.forEach( operation => {
    operation.addEventListener('click', (targerVar)=>{
        if (!SecScore) return;
        put= false;
        const operationName = targerVar.target.innerText;
        if(firstScore && SecScore && lastValue){
            Value();
        } else {
            resultOne = parseFloat(SecScore);
        }
        clear(operationName);
        lastValue = operationName;
        console.log(resultOne);
    });
});

// all operator functions

function Value() {
    if (lastValue === 'x') {
        resultOne = parseFloat(resultOne) * parseFloat(SecScore);
    } else if (lastValue === '+') {
        resultOne = parseFloat(resultOne) + parseFloat(SecScore);
    } else if (lastValue === '-') {
        resultOne = parseFloat(resultOne) - parseFloat(SecScore);
    } else if (lastValue === '/') {
        resultOne = parseFloat(resultOne) / parseFloat(SecScore);
    } else if (lastValue === '%') {
        resultOne = parseFloat(resultOne) % parseFloat(SecScore);
    }
}

// put

allNumber.forEach( number => {
    number.addEventListener('click', (targetVar)=> {
        if( targetVar.target.innerText === '.' && !put){
            put = true;
        }else if(targetVar.target.innerText === '.' && put){
            return;
        }
        SecScore += targetVar.target.innerText;
        scoreF2.innerText = SecScore;
    })
});

// RESULT 

plain.addEventListener('click', (targetVar)=> {
    if( !firstScore || !SecScore ) return;
    put = false;
    Value();
    clear();
    scoreF2.innerText = resultOne;
    SecScore = resultOne;
    dis1Numb = '';
});
//  --------- CLEAR ---------

// clear after click and jump on the top

function clear(name = '') {
    firstScore += SecScore + ' ' + name + ' ';
    scoreF1.innerText = firstScore;
    scoreF2.innerText = '';
    SecScore = '';
    
};

// clear ALL "C"

allClear.addEventListener('click', (targetVar)=> {
scoreF1.innerText = '0';
scoreF2.innerText = '0';
firstScore = '';
SecScore = '';
resultOne = '';
});

// Clear last element "CE"

lastClear.addEventListener('click', (targetVar)=> {
    scoreF2.innerText = '0';
    dis2Numb = '';
})
