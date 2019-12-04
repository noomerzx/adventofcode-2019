function checkAdjectionSpecial(input) {
  const d1 = input[0]
  const d2 = input[1]
  const d3 = input[2]
  const d4 = input[3]
  const d5 = input[4]
  const d6 = input[5]
  if (d1 === d2 && d2 !== d3) {
    return true
  } else if (d1 !== d2 && d2 === d3 && d3 !== d4) {
    return true
  } else if (d2 !== d3 && d3 === d4 && d4 !== d5) {
    return true
  } else if (d3 !== d4 && d4 === d5 && d5 !== d6) {
    return true
  } else if (d4 !== d5 && d5 === d6) {
    return true
  } else {
    return false
  }
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
    if (checkAdjectionSpecial(i.toString()) && checkNumberAlwayInscrease(i.toString())) {
      result.push(i)
    }
  }
  console.log(result)
  console.log(result.length)
}

main()
