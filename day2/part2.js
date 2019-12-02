const fs = require('fs')

function operateNumber (input, index) {
  const code = input[index]
  if (code === '99') {
    return input
  } else {
    const target1 = input[index + 1]
    const target2 = input[index + 2]
    const target3 = input[index + 3]
    if (code === '1') {
      input[target3] = (parseInt(input[target1]) + parseInt(input[target2])).toString()
    } else if (code === '2') {
      input[target3] = (parseInt(input[target1]) * parseInt(input[target2])).toString()
    }
    return operateNumber(input, index + 4)
  }
}

function main() {
  let numberArray = fs.readFileSync("./input.txt").toString().split(",")
  // required before operate number
  let input1 = '0'
  let input2 = '0'
  let result = ''
  do {
    console.log('input1 = ' + input1 + ' / input2 = ' + input2)
    numberArray[1] = input1
    numberArray[2] = input2
    result = operateNumber([...numberArray], 0)
    if (input1 !== '99') {
      input1 = (parseInt(input1) + 1).toString()
    } else if (input1 === '99' && input2 === '99') {
      break;
    } else {
      input1 = '0'
      input2 = (parseInt(input2) + 1).toString()
    }
    console.log('result = ', result[0])
  } while (result[0] !== '19690720')
  console.log(100 * (parseInt(input1) - 1) + parseInt(input2))
}

main()
