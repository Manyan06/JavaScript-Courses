  // Problem 1: Find the secondlargest number in an array

  //Approach 1 : Sort the array in descending order and return the second element.
  //Time complexity: O(nlogn), Space complexity: O(1)

  //Approach 2: Two iterations through the array. FIRST: Find the largest number, SECOND: Iterate through the array again to find the secondlargest number.
  //Time complexity: O(2n), Space complexity: O(1)

  //BEST APPROACH: Iterate through the array, keeping track of the largest and second largest numbers.
  //Time complexity: O(n), Space complexity: O(1)

  function getSecondLargest(arr) {
    const n = arr.length;
    let largest = -1, secondLargest = -1;
    for(let i = 0; i<n; i++) {
      if(arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      } else {
        return -1;
      }      
    }
    return secondLargest;
  }

  console.log(getSecondLargest([1, 2, 3, 4, 5])); // Output: 4
  
/// console.log(getSecondLargest([5, 5, 5, 5])); // Output: -1
  console.log(getSecondLargest([5, 4, 3, 2, 1])); // Output: 4
  console.log(getSecondLargest([1, 2, 3, 4, 5])); // Output: 4