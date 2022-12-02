const errorMessage = document.querySelector('span#error-message');
const customTip = document.getElementById('custom');
customTip.addEventListener('click', btnTransform);

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

        //(error) stylish remove
        peopleNumInput.classList.remove('not-allowed');
        errorMessage.classList.add('hide');
        errorMessage.classList.remove('show');
    } else {
        error();
    }

    if (billValue >= 1000) {
        billInput.value = 1000;
    }
    if (peopleNum >= 50) {
        peopleNumInput.value = 50;
    }
}

function calculateTotal(tipAmount) {
    let total = parseFloat(billValue / peopleNum + Number(tipAmount)).toFixed(2);
    results[1].innerHTML = `$${total}`;
}

function btnTransform() {
    tips.forEach(tipVal => {
        tipVal.classList.remove('active');
    });
    customTip.type = 'number';

    if (customTip.value == 0) {
        resetCustomBtn();
    } else {
        customTip.addEventListener('input', getCustomValue);
    }
}

function getCustomValue() {
    let customPercentage = customTip.value;
    let customValue = convertToDecimal(customPercentage);
    if (customValue <= 80) {
        tipValue = customValue;
        calculateTip();
    } else {
        error();
    }
}

function reset() {
    billInput.value = '';
    peopleNumInput.value = '1';
    customTip.type = 'button';
    customTip.value = 'Custom';
    billValue = 0.0;
    peopleNum = 1;
    results[0].innerHTML = placeholderPrice;
    results[1].innerHTML = placeholderPrice;
}

function error() {
    if (peopleNum < 1) {
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
        peopleNumInput.classList.add('not-allowed');
    }
}

const resetCustomBtn = () => {
    setTimeout(() => {
        customTip.type = 'button';
    }, 2000);
}