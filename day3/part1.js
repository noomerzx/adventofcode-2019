const fs = require('fs')

function draw(op, lastResult) {
  let result = []
  let startPoint = {
    x: 0,
    y: 0
  }
  if (lastResult.length > 0) {
    startPoint = {
      x: lastResult[lastResult.length - 1].x,
      y: lastResult[lastResult.length - 1].y
    }
  } else {
    result.push(startPoint)
  }
  const count = op.substring(1, op.length)
  for(i = 0;i < count;i ++) {
    let point = {
      x: startPoint.x,
      y: startPoint.y
    }
    if (op[0] === 'R') {
      point.x += i + 1
    } else if (op[0] === 'L') {
      point.x += 0 - (i + 1)
    } else if (op[0] === 'U') {
      point.y += i + 1
    } else if (op[0] === 'D') {
      point.y += 0 - (i + 1)
    }
    result.push(point)
  }
  return result
}

function findDistance (input, result, index) {
  if (index >= input.length) {
    return result
  }
  const opt = input[index]
  result = [...result, ...draw(opt, result)]
  
  return findDistance(input, result, index + 1)
}

function main() {
  const inputLine = fs.readFileSync("./input.txt").toString().split("\n")
  const input1 = inputLine[0].toString().split(",")
  const input2 = inputLine[1].toString().split(",")
  const wire1 = findDistance(input1, [], 0)
  const wire2 = findDistance(input2, [], 0)
  const crossedPoint = res = wire1.filter((item) => {
    return wire2.find((item2) => item.x === item2.x && item.y === item2.y)
  }).filter((item) => item.x !== 0 && item.y !== 0)
  const distances = crossedPoint.map((item) => Math.abs(item.x) + Math.abs(item.y))
  console.log(crossedPoint)
  console.log(distances)
}

main()
