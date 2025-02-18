// Selection Sort
// Time complexity for this algorithm is O(n^2)
const my_array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("Input array", my_array);

// After first go through, array will be => [5, 64, 34, 25, 12, 22, 11, 90];
const n = my_array.length;
// selectionSort();

function selectionSort() {
  for (let i = 0; i < n; i++) {
    let min_index = i;
    for (let j = i + 1; j <= n; j++) {
      if (my_array[min_index] > my_array[j]) {
        min_index = j;
      }
    }
    const min_value = my_array.splice(min_index, 1);
    my_array.splice(i, 0, ...min_value);
  }
}

// Selection Sort with improvement.
// The code above is doing shifting operation twice for each loop:
// 1 for removing found lowest value, which causes shifting all following values to the up,
// second time for inserting that lowest value at the front of array, which causes all following elements shift to down.
// We will not see shifting operations in high level programming languages, but they require extra time for computer to do.
// So instead of removing a lowest value, and inserting it at the front of array, we can just swap values.
selectionSortWithSwap();

function selectionSortWithSwap() {
  for (let i = 0; i < n; i++) {
    let min_index = i;
    for (let j = i + 1; j <= n; j++) {
      if (my_array[min_index] > my_array[j]) {
        min_index = j;
      }
    }
    [my_array[i], my_array[min_index]] = [my_array[min_index], my_array[i]];
  }
}

console.log("Sorted array", my_array);
