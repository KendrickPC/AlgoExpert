/*
Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order. 
*/

// function sortedSquaredArray(array) {
//   // Write your code here.
//   const results = []
//   for (let num of array) {
//     results.push(num ** 2)
//   }
//   return results.sort((a, b) => a - b)
// }

function sortedSquaredArray(array) {
  const resultingArr = new Array(array.length) // 
  let insertionPoint = resultingArr.length - 1
  console.log("resultingArr:", resultingArr) // [ <7 empty items> ]
  console.log("insertionPoint:", insertionPoint) // 6
  let pointer1 = 0;
  let pointer2 = array.length - 1

  while (pointer1 <= pointer2) {
    let elementLeft = Math.abs(array[pointer1])
    let elementRight = Math.abs(array[pointer2])

    console.log(elementLeft)
    console.log(elementRight)
    if (elementRight > elementLeft) {
      console.log("resultingArr[insertionPoint]", resultingArr[insertionPoint])
      resultingArr[insertionPoint] = elementRight ** 2
      pointer2 -= 1
    } else if (elementLeft > elementRight) {
      console.log("resultingArr[insertionPoint]", resultingArr[insertionPoint])
      resultingArr[insertionPoint] = elementLeft ** 2
      pointer1 += 1
    } else if (elementLeft === elementRight) {
      resultingArr[insertionPoint] = elementLeft ** 2
      pointer1 += 1
    }
    insertionPoint -= 1
  }
  return resultingArr
}

// const array = [1, 2, 3, 5, 6, 8, 9]
// const array = [-7, -5, -4, 3, 6, 8, 9]
const array = [-10, -5, 0, 5, 10]

console.log(sortedSquaredArray(array))