
const display = document.querySelector('.display')
const displayResult = document.querySelector('.display-result')

const updateDisplay = () => {
    if(display.innerHTML.length > 13){
        display.classList.replace('fs-1', 'fs-5')
    }else{
        display.classList.replace('fs-5', 'fs-1')
    }
}
//input number
const buttons = document.querySelectorAll('.numpad')
for(let item of buttons){
    item.addEventListener('click', () => {
        if(display.innerHTML != '0'){
            display.innerHTML += item.innerHTML
            updateDisplay()
        }else{
            if(item.innerHTML == '.'){
                display.innerHTML = '0.'
            }else{
                display.innerHTML = item.innerHTML
            }
        }
        
    })
}

//input operator
const insert = (num) => {
    display.innerHTML += " " + num;
    displayResult.innerHTML = display.innerHTML
    display.innerHTML = '0'
}

//Hasil operasi
const getResult = () => {
    let prev = displayResult.innerHTML
    let result = eval(prev + display.innerHTML)
    displayResult.innerHTML = ''
    display.innerHTML =result
    return display.innerHTML;
}

//Invers
const inversButton = document.querySelector('.invers')
inversButton.addEventListener('click', () => display.innerHTML *= -1)

//percent
const percentButton = document.querySelector('.percent')
percentButton.addEventListener('click', () => display.innerHTML /= 100)

//Output Hasil
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    getResult()
    updateDisplay()
})


//Clear All
const clear = document.querySelector('.clear-all')
clear.addEventListener('click', () => {
    display.innerHTML = '0'
    displayResult.innerHTML = ''
    updateDisplay()
})

//Delete
const del = document.querySelector('.delete')
del.addEventListener('click', () => {
    let prev = display.innerHTML
    if(prev.length <= 1){
        display.innerHTML = '0'
    }else{
        display.innerHTML = prev.substring(0, prev.length -1)
    }
    updateDisplay()
})

//toggle themes
const indicator = document.querySelector('#indicator')
const change = document.querySelectorAll('.switch')
const container = document.querySelector('.container-fluid')
const themes = () => {
    if(indicator.classList.contains('active')){
        container.style.backgroundColor = '#091921'
        display.style.color = 'cyan'
        displayResult.style.color = 'cyan'
        indicator.style.backgroundColor = 'cyan'
        change.forEach((item) => {
            item.style.backgroundColor = '#091921'
            item.style.color = 'cyan'
        })
    }else{
        container.style.backgroundColor = 'white'
        display.style.color = 'black'
        displayResult.style.color = 'black'
        indicator.style.backgroundColor = 'black'
        change.forEach((item) => {
            item.style.backgroundColor = 'white'
            item.style.color = 'black'
        })
    }
}

indicator.addEventListener('click', () => {
    indicator.classList.toggle('active')
    themes()
})

//themes font 
const fontThemes = document.querySelectorAll('.font-themes')
const calc = document.querySelector('#calculator')
fontThemes[0].addEventListener('click', () => {
    calc.style.fontFamily = "Orbitron", sans-serif;;
})
fontThemes[1].addEventListener('click', () => {
    calc.style.fontFamily = 'Montserrat';
})
