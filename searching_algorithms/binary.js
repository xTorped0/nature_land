
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function linearSearch(arr, target) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === target) {
			return i; // return the index of the found element
		}
	}
	return -1; // return -1 if the element is not found
}

var testArray1 = Array.from({ length: 1000 }, (_, i) => i+1);
var testArray2 = Array.from({ length: 10000 }, (_, i) => i+1);
var testArray3 = Array.from({ length: 100000 }, (_, i) => i+1);

function test(handler, array, target, text) {
	console.time(`Execution Time for ${array.length} elements [${text}]`);
	handler(array, target)
	console.timeEnd(`Execution Time for ${array.length} elements [${text}]`);
}

test(binarySearch, testArray1, 674, 'BINARY');
test(binarySearch, testArray2, 7425, 'BINARY');
test(binarySearch, testArray3, 34465, 'BINARY');
console.log('\n');
test(linearSearch, testArray1, 674, 'LINEAR');
test(linearSearch, testArray2, 7425, 'LINEAR');
test(linearSearch, testArray3, 34465, 'LINEAR');