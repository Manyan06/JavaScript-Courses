// Problem 2: You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array

//Approach 1: Use a new array to store the non-zero elements and then fill the rest of the array with zeros.
//Time complexity: O(n), Space complexity: O(n)

//Approach 2: Use two pointers to keep track of the position of the non-zero elements and the position to fill with zeros later.
//Time complexity: O(n), Space complexity: O(1)

//BEST APPROACH: Use a single pointer to keep track of the position of the non-zero elements and swap them with the zeros in the array.
//Time complexity: O(n), Space complexity: O(1)

function pushZerosToEnd(arr) {
  let count = 0; 
  const n=arr.length ;
  for (let i = 0; i<n; i++) {
      if (arr[i] !== 0){
          [arr[i] , arr[count]] = [arr[count] , arr[i]];
          count ++;
      }
  }
}

const arr = [0, 1, 0, 3, 12];
pushZerosToEnd(arr);
console.log(arr.join(" ")); // Output: [1, 3, 12, 0, 0]