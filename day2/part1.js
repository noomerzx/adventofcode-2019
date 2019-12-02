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
  numberArray[1] = '12'
  numberArray[2] = '2'
  const result = operateNumber(numberArray, 0)
  console.log(result)
}

main()
