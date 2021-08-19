//left side
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) return pin;
    return getPin();
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// right side (event bubble)
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') calcInput.value = '';
    }
    else calcInput.value = calcInput.value + number;
})

//submit
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNoti = document.getElementById('notify-success');
    const failNoti = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successNoti.style.display = 'block';
        failNoti.style.display = 'none';
    }
    else {
        failNoti.style.display = 'block';
        successNoti.style.display = 'none';
    }
}