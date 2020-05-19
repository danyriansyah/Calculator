const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

//number//
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})
//variabel number//
let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

const inputNumber = (number) => {
  if (currentNumber === '0'){
    currentNumber = number
  } else {
    currentNumber += number
  }
}

//operator//
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

//sama dengan//

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate ()
  updateScreen(currentNumber)
})

const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case "+":
      result = (parseFloat(prevNumber)*100000000000000 + parseFloat(currentNumber)*100000000000000)/100000000000000
      break
    case "-":
      result = (parseFloat(prevNumber)*100000000000000 - parseFloat(currentNumber)*100000000000000)/100000000000000
      break
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      break
  }
  currentNumber = result
  calculationOperator = ''
}

//ac//
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

//desimal//
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

