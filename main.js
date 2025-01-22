const arr = [1, 2, 3];

const newValue = 'test';

arr[0] = newValue;

arr[arr.length - 1] = newValue;

const middleIndex = Math.floor(arr.length / 2);
arr[middleIndex] = newValue;

console.log(arr);
