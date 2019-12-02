const fs = require('fs')

function calculateFuel(fuel) {
  let result = Math.floor(fuel / 3) - 2
  if (result <= 0) {
    return 0
  } else {
    return result + calculateFuel(result)
  }
}

function main() {
  const textArray = fs.readFileSync("./input.txt").toString().split("\n")
  let result = 0
  textArray.forEach((input) => {
    result += calculateFuel(input)
  })
  console.log(result)
}

main()
