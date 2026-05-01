

let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button=> {
    button.addEventListener('click', ()=> {
        let value = button.innerText;

        if (value === 'C') {
            display.value = '';
        }
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
        else if (value === '←') {
            display.value = display.value.slice(0, -1);

        }
        else {
            display.value += value;
        }

    })

})