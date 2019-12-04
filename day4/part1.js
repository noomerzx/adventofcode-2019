function checkAdjection(input) {
  let result = false
  for(i = 0;i < input.length;i++) {
    if (i < (input.length - 1) && input[i] === input[i + 1]) {
      result = true
      break
    }
  }
  return result
}

function checkNumberAlwayInscrease(input) {
  let result = true
  let temp = 0
  for(i = 0;i < input.length;i++) {
    if (input[i] >= temp) {
      temp = input[i]
    } else {
      result = false
    }
  }
  return result
}

function main() {
  let result = []
  const start = 372304
  const end = 847060
  for(let i = start;i < end; i++) {
    if (checkAdjection(i.toString()) && checkNumberAlwayInscrease(i.toString())) {
      result.push(i)
    }
  }
  console.log(result)
  console.log(result.length)
}

main()
