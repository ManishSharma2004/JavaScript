// 

// ---------------------------String-------------------------------

// The String object is used to represent and manipulate a sequence of characters.

// #____Methods____

// 1. String.protype.at()

// This is use to visit any index of a String ...

// Example 

let myStr = "I am Manish"
// console.log(myStr.at(2));
// console.log(myStr.at(-2));

//For this +index are calculated , as the firs index is 0 
// For -index -1 is the lastest index
// Default index is 0


// 2.charAt()

//It is same as at() method 

// console.log(myStr.charAt());
// Default index is 0;

// 3.charCodeAt()
//The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

//charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().

// 4. codePoinAt()

// It returns the UNI COde , that is non negative integer .
//Note that the index is still based on UTF-16 code units, not Unicode code points.

// console.log(myStr.codePointAt(2));


// 5. concat()

const str1="Manish "
const str2="Sharma"
// console.log(str1.concat(str2));
// console.log(str1.concat(',',str2));
// console.log("".concat(',',str2));
// console.log(str1); //Output : Manish //

// let str3 = str1.concat("-",str2);
// console.log(str3);

//It is used concatenate the Stings arguments to thisi string and returns a new string


// 6. endsWith()

// It is used check wheather a string ends with given character or not.
// This retuns True or False 

// console.log(str1.endsWith(" ")); 
// // Output : true

// console.log(str2.endsWith("s"));
// // Output : false 

// console.log(str1.endsWith(" ",6))
// // Output : false

// console.log(str1.endsWith(" ",7));
// // Output : Ture 

// Syntax : endsWith(searchString, endPosition)

// Here endPosition is calculated as the first index is 1 , not as 0


// 7. fromCharCode()

// It convers UNI code in Strings 

// console.log(String.fromCharCode(189));
// // Output : ½
// console.log(String.fromCharCode(48));
// // Output : 0
// console.log(String.fromCharCode(190));
// // Output : ¾


// 8. fromCodePoint()

// It's a static method which returns a String created from specific sequence of code points.

//An integer between 0 and 0x10FFFF (inclusive) representing a Unicode code point.


// console.log(String.fromCodePoint(9733))
// // Output : ★
// console.log(String.fromCodePoint(9734))
// // Output : ☆
// console.log(String.fromCodePoint(9735))
// // Output :  ☇
// console.log(String.fromCodePoint(9842))
// // Output : ♲


//  9. includes()

// This method of String values performs a case-sensitive search to determine whether a given string may be found within this string or not .

// It returns true or false as appropriate.

// Syntax : includes(searchString, position)

//  const newstr = `I am Manish Sharma`
//  const word = "am"
// console.log(newstr.includes(word));
// // Output : true 

// console.log(newstr.includes("man"));
// // Output : false 

// console.log(newstr.includes("m"));
// // Output : true 

// console.log(`The newstr includes the word "am" ${newstr.includes(word) ? 'is' : 'is not '} true`);

// console.log(newstr.includes(""));
// // Output : true // As it is a Null string

// console.log(newstr.includes());
// // Output : false // As it is Undefined

// console.log(newstr.includes(null));
// // Output : true // As null is a object type 

// console.log(newstr.includes(undefined));
// // Output : false

// console.log(newstr.includes("I",0));
// Output : True  // Here position index starts with 0

