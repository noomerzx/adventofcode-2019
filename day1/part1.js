const fs = require('fs')

function main() {
  const textArray = fs.readFileSync("./input.txt").toString().split("\n")
  let result = 0
  textArray.forEach((input) => {
    result += Math.floor(input / 3) - 2
  })
  console.log(result)
}

main()
