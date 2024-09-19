let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = Function('return ' + display.value)();
        display.value = Number.isInteger(result) ? result : result.toFixed(4);
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        let value = parseFloat(display.value);
        if (value >= 0) {
            display.value = Math.sqrt(value).toFixed(4);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function power() {
   appendToDisplay('**');
}

function sin() {
   try {
       display.value = Math.sin(parseFloat(display.value) * Math.PI / 180).toFixed(4);
   } catch (error) {
       display.value = 'Error';
   }
}

function cos() {
   try {
       display.value = Math.cos(parseFloat(display.value) * Math.PI / 180).toFixed(4);
   } catch (error) {
       display.value = 'Error';
   }
}