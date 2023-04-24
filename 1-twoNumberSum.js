/*
Write a function that takes in a non-empty array of distinct integers and an 
integer representing a target sum. If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any
order. If no two numbers sum up to the target sum, the function should return
an empty array.

Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to intself in order to obtain
the target sum.

You can assume taht there will be at most one pair of numbers summing up
to the target sum.
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const results = []
  const hashMap = {}
  for (let num of array) {
    let potentialMatch = targetSum - num
    if (potentialMatch in hashMap) {
      results.push(num, potentialMatch)
      // return results
    } else {
      hashMap[num] = true
    }
  }
  console.log(hashMap)
  return results
}

const array = [3, 6, -4, 8, 11, 1, -1, 6]
const targetSum = 10

console.log(twoNumberSum(array, targetSum))