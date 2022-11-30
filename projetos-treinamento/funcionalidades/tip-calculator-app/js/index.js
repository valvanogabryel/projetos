const errorMessage = document.querySelector('span#error-message');
const customBtn = document.getElementById('custom');
customBtn.addEventListener('click', btnTransform);

const billInput = document.querySelector('input#bill');
const peopleNumInput = document.querySelector('input#people-num');
billInput.addEventListener('input', billTransform);
peopleNumInput.addEventListener('input', peopleNumInputTransform);

const tips = document.querySelectorAll('div.tips');
tips.forEach(tipVal => {
    tipVal.addEventListener('click', handleTipClick);
});

const results = document.querySelectorAll('.results-price');

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', reset);

let billValue = 0.0;
let peopleNum = 1;
let tipValue = 0.15;
const placeholderPrice = '$0.00';

function billTransform() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function peopleNumInputTransform() {
    peopleNum = parseFloat(peopleNumInput.value);
    calculateTip();
}

function handleTipClick(event) {
    tips.forEach(tipVal => {
        tipVal.classList.remove('active');
        if (event.target.innerHTML == tipVal.innerHTML) {
            tipVal.classList.add('active');
            tipValue = convertToDecimal(tipVal.innerHTML);
        };
    });
}

function convertToDecimal(percentage) {
    return parseFloat(percentage) / 100;
}

function calculateTip() {
    if (peopleNum >= 1) {
        tips.forEach(tipBtn => {
            tipBtn.addEventListener('click', calculateTip);
        });
        let tipResult = parseFloat((billValue / peopleNum) * tipValue).toFixed(2);
        results[0].innerHTML = `$${tipResult}`;
        calculateTotal(tipResult);

        //error stylish remove
        peopleNumInput.classList.remove('not-allowed');
        errorMessage.classList.add('hide');
        errorMessage.classList.remove('show');
    } else {
        error();
    };
}

function calculateTotal(tipAmount) {
    let total = parseFloat(billValue / peopleNum + Number(tipAmount)).toFixed(2);
    results[1].innerHTML = `$${total}`;
}

function reset() {
    billInput.value = '';
    peopleNumInput.value = '';
    billValue = 0.0;
    peopleNum = 1;
    tipValue = 0.15;
    results[0].innerHTML = placeholderPrice;
    results[1].innerHTML = placeholderPrice;
}

function error() {
    errorMessage.classList.remove('hide');
    errorMessage.classList.add('show');
    peopleNumInput.classList.add('not-allowed');
}

function btnTransform() {
    customBtn.type = 'number';
    customBtn.placeholder = '0';
    customBtn.addEventListener('input', customTest);
};

function customTest() {
    let customValue = customBtn.value;
    convertToDecimal(customValue);
    return customValue;
}

const isNumberInput = () => {
    return customBtn.type == 'number' ? 'cu' : 'cuzin';
}

if (isNumberInput) {
    console.log(customValue)
}
