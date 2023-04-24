/*
Given two non-empty arrays of integers, write a function that determinse whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array, but that are in the same order as they appear in the array. 
For instance, the numbers [1, 3, 4] form a subsequence of the
array [1, 2, 3, 4], and so do the numbers [2, 4]. 
Note that a single number in an array and the array itself are both valid
subsequences of the array.
*/

function isValidSubsequence(array, sequence) {
  let seqPointer = 0;
  for (let i = 0; i < array.length; i++) {
    let currentEl = array[i]
    // console.log("ARRAY ELEMENT:", currentEl)
    if (sequence[seqPointer] === currentEl) {
      console.log(sequence[seqPointer])
      seqPointer += 1
    }
  }
  return sequence[seqPointer] === undefined
}

let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

console.log(isValidSubsequence(array, sequence))

