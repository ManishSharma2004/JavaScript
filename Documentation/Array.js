// 

// ----------------------------Array------------------------------

// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations

// ________________________Constructor________________________________

// The Array() constructor creates Array objects.

// Syntax : new Array()
// Syntax : new Array(element1)
// Syntax : new Array(element1, element2)
// Syntax : new Array(element1, element2, /* …, */ elementN)
// Syntax : new Array(arrayLength)

// Syntax : Array()
// Syntax : Array(element1)
// Syntax : Array(element1, element2)
// Syntax : Array(element1, element2, /* …, */ elementN)
// Syntax : Array(arrayLength)


// Note: Array() can be called with or without new. Both create a new Array instance.

// Thrown if there's only one argument (arrayLength) that is a number, but its value is not an integer or not between 0 and 232 - 1 (inclusive).

// ___________________________Properties_____________________________

// 1. Array[@@species] 

// The Array[@@species] static accessor property returns the constructor used to construct return values from array methods.

// Syntax : Array[Symbol.species]

// 

// const a = class Array {
//     static get [Symbol.species]() {
//       return this;
//     }
//   }
// console.log(a);


// 2. Array.prototype[@@unscopables]

// A null-prototype object with property names given below and their values set to true.

// 
// var keys = [];

// with (Array.prototype) {
//   keys.push("something");
// }
// console.log(keys);

// Output : [ 'something' ]



// 3. Array: length

// The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

// console.log(clothing.length);

// The array object observes the length property, and automatically syncs the length value with the array's content. This means:Setting length to a value smaller than the current length truncates the array — elements beyond the new length are deleted.
// Setting any array index (a nonnegative integer smaller than 232) beyond the current length extends the array — the length property is increased to reflect the new highest index.
// Setting length to an invalid value (e.g. a negative number or a non-integer) throws a RangeError exception.




// ____________________________________Methods___________________________________________

// 1. prototype[@@iterator]()

// The [@@iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.

// The initial value of this property is the same function object as the initial value of the Array.prototype.values property.

// array[Symbol.iterator]()

// It returns The same return value as Array.prototype.values(): a new iterable iterator object that yields the value of each index in the array.

// Code :-

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1[Symbol.iterator]();

// for (const value of iterator1) {
//   console.log(value);
// }
// // Output :- a \n b \n c


// const iterator2 = array1[Symbol.iterator](20);
// for (const value of iterator2) {
//     console.log(value);
//   }
// // Output :- a \n b \n c



// 2. at()

// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Syntax : at(index)

// It returns The element in the array matching the given index. Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.

// Code :-

// const array = [1,2,3,4,5,6]

// console.log(array.at(2));
// // Output : 3
// console.log(array.at(-2));
// // Output : 5
// console.log(array.at(8));
// // Output : undefined



// 3. concat()

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Syntax : concat()
// Syntax : concat(value1)
// Syntax : concat(value1, value2)
// Syntax : concat(value1, value2, /* …, */ valueN

// It returns a new Array instance .

// The concat() method is a copying method. It does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains the same elements as the ones from the original arrays.

// The concat() method preserves empty slots if any of the source arrays is sparse.

// Code :-

// const arr1 = [1,2,3,4,5]
// const arr2 = [1,2,3,4,5]

// // console.log(arr1.concat(arr2))
// // Output : [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// console.log(arr1.concat())
// // Output : [1, 2, 3, 4, 5]

// console.log(arr1.concat(6))
// // Output : [1, 2, 3, 4, 5, 6]

// console.log(arr1.concat(6,7,8))
// // Output : [1, 2, 3, 4, 5, 6, 7, 8]




// 4. copyWithin()

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// Syntax : copyWithin(target, start)
// Syntax : copyWithin(target, start, end)

// It returns The modified array.

// target :-

// Zero-based index at which to copy the sequence to, converted to an integer. This corresponds to where the element at start will be copied to, and all elements between start and end are copied to succeeding indices.

// Negative index counts back from the end of the array — if -array.length <= target < 0, target + array.length is used.
// If target < -array.length, 0 is used.
// If target >= array.length, nothing is copied.
// If target is positioned after start after normalization, copying only happens until the end of array.length (in other words, copyWithin() never extends the array).


// start :-

// Zero-based index at which to start copying elements from, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// If start < -array.length, 0 is used.
// If start >= array.length, nothing is copied.


// end :- 

// Zero-based index at which to end copying elements from, converted to an integer. copyWithin() copies up to but not including end.

// Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
// If end < -array.length, 0 is used.
// If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be copied.
// If end implies a position before or at the position that start implies, nothing is copied.

// const array1 = ['a', 'b', 'c', 'd', 'e'];

// console.log(array1.copyWithin(0, 2, 4));
// Output : [ 'c', 'd', 'c', 'd', 'e' ]

// console.log(array1.copyWithin(1, 3));
// Output : [ 'c', 'd', 'e', 'd', 'e' ]

