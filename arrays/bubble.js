// Bubble Sort
// Time Complexity for this algorithm is O(n^2)
const my_array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("Input array", my_array);

// After first go through, array will be => [34, 25, 12, 22, 11, 64, 5, 90];
const n = my_array.length; // 8
// bubbleSort();

function bubbleSort() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (my_array[j] > my_array[j + 1]) {
        [my_array[j], my_array[j + 1]] = [my_array[j + 1], my_array[j]];
      }
    }
  }
}

// Bubble Sort with minor improvement.
// If there is no any swapes on iteration, it should be terminated as it is already sorted.
// This is much more efficient when array is nearly sorted. For example: [7, 3, 9, 12, 11]
// After first go through, array will be sorted => [3, 7, 9, 11, 12];
betterBubbleSort();

function betterBubbleSort() {
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i; j++) {
      if (my_array[j] > my_array[j + 1]) {
        [my_array[j], my_array[j + 1]] = [my_array[j + 1], my_array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}
console.log("Sorted array", my_array);
