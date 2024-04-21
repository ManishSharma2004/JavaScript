// 

// ----------------------------Array------------------------------ // 

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






// 5. entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// Syntax : entries()

// It returns A new iterable iterator object.

// When used on sparse arrays, the entries() method iterates empty slots as if they have the value undefined.

// The entries() method is generic. It only expects the this value to have a length property and integer-keyed properties.

// Code :-

// const Array = [ 1, 2, 3, 4]
// const ArrayEntries = Array.entries()

// for (const i of ArrayEntries) {
//     console.log(i)
// }
// //    Output : [ 0, 1 ]
// //             [ 1, 2 ]
// //             [ 2, 3 ]
// //             [ 3, 4 ]

// for (const [index, element] of Array.entries()) {
//     console.log(index, element);
//   }

// // Output : 0 1
// //          1 2
// //          2 3
// //          3 4

// for (const element of [, "a"].entries()) {
//     console.log(element);
// }
// // Output : [ 0, undefined ]
// //          [ 1, 'a' ]





// 6. every()

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Syntax : every(callbackFn)
// Syntax : every(callbackFn, thisArg)

// It returns true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.

// callbackFn :-

// A function to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:

//  element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array every() was called upon.

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // Output : true

// const array2 = [1, 30, 39, 29, 10, 13 ,40];
// console.log(array2.every(isBelowThreshold));
// // Output : false

// const array3 = [];
// console.log(array3.every(isBelowThreshold));
// // Output : true

// const array4 = ["10", "20", "50"];
// console.log(array4.every(isBelowThreshold));
// // Output : false

// const array5 = ["10", "20"];
// console.log(array5.every(isBelowThreshold));
// // Output : true





// 7. fill()

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// Syntax : fill(value)
// Syntax : fill(value, start)
// Syntax : fill(value, start, end)

// It returns The modified array, filled with value.

// start :-

// Zero-based index at which to start filling, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// If start < -array.length or start is omitted, 0 is used.
// If start >= array.length, no index is filled.


//  end :-
// Zero-based index at which to end filling, converted to an integer. fill() fills up to but not including end.

// Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
// If end < -array.length, 0 is used.
// If end >= array.length or end is omitted, array.length is used, causing all indices until the end to be filled.
// If end implies a position before or at the position that start implies, nothing is filled.

// value :-

// Value to fill the array with. Note all elements in the array will be this exact value: if value is an object, each slot in the array will reference that object.

// Note :- 
// The fill() method is a mutating method. It does not alter the length of this, but it will change the content of this.

// The fill() method fills empty slots in sparse arrays with value as well.

// The fill() method is generic. It only expects the this value to have a length property. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

// Code :- 

// const array1 = [1, 2, 3, 4];

// console.log(array1);
// console.log(array1.fill(0));
// // Output : [0, 0, 0, 0]

// console.log(array1.fill(2, 2));
// // // Expected output: Array [0, 0, 2, 2]

// // array1 = [1, 2, 3, 4]
// console.log(array1.fill(2, -2));
// // output : [ 1, 2, 2, 2 ]

// console.log(array1.fill());
// // output: [ undefined, undefined, undefined, undefined ]

// console.log(array1.fill(6,8));
// //output: [ 1, 2, 3, 4 ]

// console.log(array1.fill(6,2,2));
// // //output: [ 1, 2, 3, 4 ]

// console.log(array1.fill(6,1,2));
// //output: [ 1, 6, 3, 4 ]
// Here end index is act as index end-1

// console.log(array1.fill(6,2,9));
// //output: [ 1, 2, 6, 6 ]



// 8. filter()

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Syntax : filter(callbackFn)
// Syntax : filter(callbackFn, thisArg)

// It returns A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

// Code :- 

// const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  filterdByMe = (num) => num > 5; 

// let filteredArray = Array.filter(filterdByMe);

// console.log(filteredArray);
// // Output : [ 6, 7, 8, 9, 10 ]




// 9. find()

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// Syntax : find(callbackFn)
// Syntax : find(callbackFn, thisArg)

// It returns The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

// Code :-

// const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const  filterdByMe = (num) => num > 5;

// console.log(Array.find(filterdByMe));
// Output : 6

// console.log(Array.find());
// // Output : TypeError: undefined is not a function

// console.log(Array.find(filterdByMe,4));
// Output : 6



// 10. findIndex()

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.


// Syntax : findIndex(callbackFn)
// Syntax : findIndex(callbackFn, thisArg)

// It returns The index of the first element in the array that passes the test. Otherwise, -1.

// Code :-

// const Array = [ 1, 2, 3, 4, 5]

// const functionGt3  = (n) => n>3

// console.log(Array.findIndex(functionGt3));
// // Output : 3

// console.log(Array.findIndex());
// Output : TypeError: undefined is not a function

// const functionGt5  = (n) => n>5
// console.log(Array.findIndex(functionGt5));
// Output : -1

//  const ArrayChr = [ 'a','b','c']
// const functionGta  = (n) => n>'a'
// console.log(ArrayChr.findIndex(functionGta));
// Output : 1




// 11. findLast()

// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// Syntax : findLast(callbackFn)
// Syntax : findLast(callbackFn, thisArg)

// It returns The last (highest-index) element in the array that satisfies the provided testing function; undefined if no matching element is found.

// Code :-

// const arr = [ 1, 2, 3, 4, 8]
// const functionGt3  = (n) => n>'3'

// console.log(arr.findLast(functionGt3));
// // Output : 8


//  const ArrayChr = [ 'a','b','c']
// const functionGta  = (n) => n>'a'

// console.log(ArrayChr.findLast(functionGta));
// // Output : c



// 12. findLastIndex()

// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// Syntax : findLastIndex(callbackFn)
// Syntax : findLastIndex(callbackFn, thisArg)

// It returns The index of the last (highest-index) element in the array that passes the test. Otherwise -1 if no matching element is found.

// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber));
// Output : 3 // That means 130



// 13. flat()

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Syntax : flat()
// Syntax : flat(depth)

// Depth :
//      The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// It returns A new array with the sub-array elements concatenated into it.

// Code :- 

// const arr = [1,[2,[3,[4,[5,6]]]]]

// console.log(arr.flat())
// // Output :  [ 1, 2, [ 3, [ 4, [Array] ] ] ] // not displaying after 4th depth

// console.log(arr.flat(2));
// // Output : [ 1, 2, 3, [ 4, [ 5, 6 ] ] ]

// console.log(arr.flat(6));
// // Output : [ 1, 2, 3, 4, 5, 6 ]


// const arr1 = [1,[2,[3,[4,[5,6],7],8]]]

// console.log(arr1.flat(3));
// // Output : [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]



// 14. flatMap()

// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// Output : flatMap(callbackFn)
// Output : flatMap(callbackFn, thisArg)

// It returns A new array with each element being the result of the callback function and flattened by a depth of 1.

// Code :-

// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);




// 15. foreach()

// The forEach() method of Array instances executes a provided function once for each array element.

// Syntax : forEach(callbackFn)
// Syntax : forEach(callbackFn, thisArg)

// It returns None (undefined).

// // Code :-

// const Array = [1, 2, 3, 4, 5, 6]

// Array.forEach((element) => console.log(element));



// 16. from()

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Syntax : Array.from(arrayLike)
// Syntax : Array.from(arrayLike, mapFn)
// Syntax : Array.from(arrayLike, mapFn, thisArg)

// arrayLike :-
// An iterable or array-like object to convert to an array.

// mapFn :-
// A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:

    // element
    // The current element being processed in the array.

    // index
    // The index of the current element being processed in the array.

// thisArg :-
// Value to use as this when executing mapFn.

// It returns A new Array instance.

// Code :-

// console.log(Array.from("Manish"));
// Output : [ 'M', 'a', 'n', 'i', 's', 'h' ]

// console.log(Array.from(1020));
// Output : []

// console.log(Array.from());
// Output : TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))

// console.log(Array.from("Man - ish sh   arma"));
// Output : [
//   'M', 'a', 'n', ' ', '-',
//   ' ', 'i', 's', 'h', ' ',
//   's', 'h', ' ', ' ', ' ',
//   'a', 'r', 'm', 'a'
// ]



// 17. formAsync()

// The Array.fromAsync() static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.

// Syntax : Array.fromAsync(arrayLike)
// Syntax : Array.fromAsync(arrayLike, mapFn)
// Syntax : Array.fromAsync(arrayLike, mapFn, thisArg)

// It returns A new Promise whose fulfillment value is a new Array instance.

// Code :- 



// 18. includes()

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.


// Syntax : includes(searchElement)
// Syntax : includes(searchElement, fromIndex)

// It returns A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

// Code :-

// const Array = [1, 2, 3, 4, 5, 6, 7]

// console.log(Array.includes(4))
// // Output : true
// console.log(Array.includes(0))
// // Output : false
// console.log(Array.includes())
// // Output : false
// console.log(Array.includes('a'))
// // Output : false
// console.log(Array.includes(4,3))
// // Output : true



// 19. indexOf()

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Syntax : indexOf(searchElement)
// Syntax : indexOf(searchElement, fromIndex)

// It returns The first index of searchElement in the array; -1 if not found.

// fromIndex :- 
// Zero-based index at which to start searching, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
// If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
// If fromIndex >= array.length, the array is not searched and -1 is returned.
// Code :-

// const Array = [1, 2, 3, 4, 5, 6]
// console.log(Array.indexOf(3))
// // Output : 2
// console.log(Array.indexOf(5,2))
// // Output : 4
// console.log(Array.indexOf(3,0))
// // Output : 2
// console.log(Array.indexOf())
// // Output : -1
// console.log(Array.indexOf(3,4))
// // Output : -1
// console.log(Array.indexOf(4,9))
// // Output : -1
// console.log(Array.indexOf('a'))
// // Output : -1




// 20. isArray()

// The Array.isArray() static method determines whether the passed value is an Array.

// Syntax : Array.isArray(value)

// It returns true if value is an Array; otherwise, false. false is always returned if value is a TypedArray instance.

// Code:-

// const arr = [1,2,3,4,5,6,7,8,9]

// console.log(Array.isArray(arr));
// // Output : true
// console.log(Array.isArray([1, 3, 5]));
// // Output : true
// console.log(Array.isArray('[]'));
// // Output : false
// console.log(Array.isArray(new Array(5)));
// // Output : true
// console.log(Array.isArray(new Int16Array([15, 33])));
// // Output : false




// 21. join()

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// Syntax : join()
// Syntax : join(separator)

// It returns A string with all array elements joined. If array.length is 0, the empty string is returned.

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"

// console.log(elements.join('/'))
// Output : Fire/Air/Water



// 22. keys()

// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

// Syntax : keys()

// It returns A new iterable iterator object.

// Code :-

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }
// // Output :  0  1  2




// 23. lastIndexOf()

// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// Syntax : lastIndexOf(searchElement)
// Syntax : lastIndexOf(searchElement, fromIndex)

// It returns The last index of searchElement in the array; -1 if not found.

// fromIndex :- 

// Zero-based index at which to start searching backwards, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= fromIndex < 0, fromIndex + array.length is used.

// If fromIndex < -array.length, the array is not searched and -1 is returned. You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so searchElement is never found.

// If fromIndex >= array.length or fromIndex is omitted, array.length - 1 is used, causing the entire array to be searched. You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.


// Code :- 

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // Output : 3

// console.log(animals.lastIndexOf('Tiger'));
// // Output : 1




// 24. map()

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// Syntax : map(callbackFn)
// Syntax : map(callbackFn, thisArg)

// It returns A new array with each element being the result of the callback function.

// Code :-

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);
// console.log(map1);
// // Output : [2, 8, 18, 32]

// const map2 = array1.map((x) => x / 5);
// console.log(map2);
// // Output : [ 0.2, 0.8, 1.8, 3.2 ]



// 25. of()

// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// Syntax : Array.of()
// Syntax : Array.of(element1)
// Syntax : Array.of(element1, element2)
// Syntax : Array.of(element1, element2, /* …, */ elementN)

// It returns A new Array instance.

// Code :-

// console.log(Array.of('foo', 2, 'bar', true));
// Output : ["foo", 2, "bar", true]

// console.log(Array.of());
// Output : []

// console.log(Array.of("M","A","N","I","S","H"));
// Output : [ 'M', 'A', 'N', 'I', 'S', 'H' ]

// console.log(Array.of(" ", "0", "1", "A"));
// Output : [ ' ', '0', '1', 'A' ]



// 26. pop()

// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// Syntax : pop()

// It returns The removed element from the array; undefined if the array is empty.

// Code :-

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// // Output: "tomato"

// console.log(plants);
// // Output: ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// // Output : [ 'broccoli', 'cauliflower', 'cabbage' ]





// 27. push()

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// Syntax : push()
// Syntax : push(element1)
// Syntax : push(element1, element2)
// Syntax : push(element1, element2, /* …, */ elementN)

// It returns The new length property of the object upon which the method was called.

// Code :- 

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');

// console.log(count);
// // Output : 4

// console.log(animals);
// // Output : Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');

// console.log(animals);
// // Output : [ 'pigs','goats','sheep','cows','chickens', 'cats','dogs' ]

// animals.push(" ")
// console.log(animals)
// // // Output : [ 'pigs','goats','sheep','cows','chickens', 'cats','dogs', ' ' ]






// 28. reduce()

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Syntax : reduce(callbackFn)
// Syntax : reduce(callbackFn, initialValue)

// It returns The value that results from running the "reducer" callback function to completion over the entire array.

// initialValue :-

// A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

// Code :-

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4 

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Output : 10






// 35. splice()

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

// Syntax : splice(start)// Syntax : 
// Syntax : splice(start, deleteCount)
// Syntax : splice(start, deleteCount, item1)
// Syntax : splice(start, deleteCount, item1, item2)
// Syntax : splice(start, deleteCount, item1, item2, /* …, */ itemN)


// start :-

// Zero-based index at which to start changing the array, converted to an integer.
// Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// If start < -array.length, 0 is used.
// If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
// If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.

// deleteCount :-

// An integer indicating the number of elements in the array to remove from start.
// If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.
// If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

// it returns An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

// Code :-

// const months = ['Jan', 'March', 'April', 'June'];

// months.splice(1, 0, 'Feb');
// console.log(months);
// // Output : ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// console.log(months);
// // Output : [ 'Jan', 'Feb', 'March', 'April', 'May' ]







// 36. toLocaleString()

// The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

// Syntax : toLocaleString()
// Syntax : toLocaleString(locales)
// Syntax : toLocaleString(locales, options)

// Locales :- 
// A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

// Options :-
// An object with configuration properties. For numbers, see Number.prototype.toLocaleString(); for dates, see Date.prototype.toLocaleString().

// It returns A string representing the elements of the array.

// Code :- 

// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

// console.log(localeString);
// Output : 1,a,12/21/1997, 2:12:00 PM
