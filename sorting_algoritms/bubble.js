function bubbleSort(arr) {
	var len = arr.length; // Отримати довжину масиву
	for (var i = 0; i < len; i++) { // Пройтися по масиву
		for (var j = 0; j < len - 1; j++) { // Пройтися по масиву від 0 до len - 1
			if (arr[j] > arr[j + 1]) { // Якщо поточний елемент більший за наступний елемент
				var temp = arr[j]; // Поміняти елементи місцями
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr; // Повернути відсортований масив
}

// Generate an array with 100 elements
var testArray1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
// Generate an array with 1000 elements
var testArray2 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

console.time('Execution Time for 100 elements');
bubbleSort(testArray1)
console.timeEnd('Execution Time for 100 elements');

console.time('Execution Time for 1000 elements');
bubbleSort(testArray2)
console.timeEnd('Execution Time for 1000 elements');