
// ----------------------------------------------------String-------------------------------------------------

// The String object is used to represent and manipulate a sequence of characters.
// Strings are useful for holding data that can be represented in text form

// # _______________________Constructor_______________________

// String()   constructor 

// The String() constructor creates String objects. When called as a function, it returns primitive values of type String.

// Syntax  : new String(thing)
// Syntax : String(thing)

// It returns When String is called as a constructor (with new), it creates a String object, which is not a primitive.

// When String is called as a function, it coerces the parameter to a string primitive. Symbol values would be converted to "Symbol(description)", where description is the description of the Symbol, instead of throwing.

// String() is the only case where a symbol can be converted to a string without throwing, because it's very explicit.

// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world"); // b === "Hello world" is true

// console.log(a === "Hello world" );
// // Output : false
// console.log(b === "Hello world" );
// // Output : true

// a instanceof String; 
// // is true

// b instanceof String; 
// // is false

// console.log(typeof a);
// // Output : "object"

// console.log(typeof b); 
// // Output : "string"



// ##______________________Properties________________________

// String : length

// The length data property of a String value contains the length of the string in UTF-16 code units.

// Syntax : length

// const str = 'Life, the universe and everything. Answer:';

// console.log(`${str} ${str.length}`);
// Output : Life, the universe and everything. Answer: 42

// const str=""
// console.log(str.length);
// Output : 0

// const str= " "
// console.log(str.length);
// // Output : 1

// const str = null 
// console.log(str.length);
// // Output : error

// const str = undefined 
// console.log(str.length);
// // Output : error







// #__________________________________Methods________________________________________

// 1. String.protype.at()

// This is use to visit any index of a String ...

// Example

// let myStr = "I am Manish"
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

// const str1="Manish "
// const str2="Sharma"
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

// 10. indexOf()

// This method is used to search strings , and return their indes values
// It always returns the index of first occurance of searchTerm

// Syntax : indexOf(searchSring)
// Syntax : indexOf(searchSring, position)

// const tempStr=`I am Manish Sharma`
// console.log(tempStr.indexOf("am"));
// // Output : 2

// console.log(tempStr.indexOf(""));
// // Output : 0 // as null string is passed

// console.log(tempStr.indexOf());
// // Output : -1 // as nothing is passsed

// console.log(tempStr.indexOf("5"));
// // Output : -1 // as Not present in the string

// // If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.

// console.log(tempStr.indexOf("am",0));
// // Output : 2 // As position is less than 2

// console.log(tempStr.indexOf("am",3));
// // Output : -1 // As position is greter than 2

// 11. lastIndexOf()

// This methiods find the searchString in the given String , and retuns the index of the last occurrence of it .

// Syntax : lastIndexOf(searchString)
// Syntax : lastIndexOf(searchString, position)

//  If position is greater than the length of the calling string, the method searches the entire string. If position is less than 0, the behavior is the same as for 0 — that is, the method looks for the specified substring only at index 0.

// const tempstr = "I am Manish Sharma"

// console.log(tempstr.lastIndexOf("m"));
// // Output : 16

// console.log(tempstr.lastIndexOf(""));
// // Output : 18  // As it retuns last index so it retuns end null position

// console.log(tempstr.lastIndexOf());
// // OUtput : -1 // As it undefined

// console.log(tempstr.lastIndexOf("8"));
// // Output : -1 // As it is not in the String

// 12. match()

// This method of String values retrieves the result of matching this string against a regular expression.

// It returns An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

// Syntax : match(regexp)

// const a = ` I am a human , and a student of Computer Scince`
// const b = 'a'
// console.log(a.match(b))
// Output : [
//           'a',
//          index: 3,
//          input: ' I am a human , and a student of Computer Scince',
//          groups: undefined
//      ]

// const c = a.match(/[A-Z]/g)
// console.log(c)
// // Output : [ 'I', 'C', 'S' ]

// const c = a.match(/[0-9]/g)
// console.log(c)
// // Output : null // as no number is present

// 13. matchAll()

// The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

// Syntax : matchAll(regexp)

// A regular expression object, or any object that has a Symbol.matchAll method. If regexp is not a RegExp object and does not have a Symbol.matchAll method, it is implicitly converted to a RegExp by using new RegExp(regexp, 'g'). If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown

// It returns An iterable iterator object (which is not restartable) of matches or an empty iterator if no matches are found. Each value yielded by the iterator is an array with the same shape as the return value of RegExp.prototype.exec().

// Code:-

// const regexp = "t" ;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array[0]);
// // output: [ '1', index: 4, input: 'test1test2', groups: undefined ]

// console.log(array[1]);
// // Output : [ 't', index: 3, input: 'test1test2', groups: undefined ]
// console.log(array[2]);
// // output : [ 't', index: 8, input: 'test1test2', groups: undefined ]
// console.log(array[3]);
// // Output : [ 't', index: 5, input: 'test1test2', groups: undefined ]

// console.log(array[4]);
// // Output : undefined

// 14. normalize()

// It returns the Unicode Normalization form of the string.

// Syntax : normalize()
// Syntax : normalize(form)

// Code :-

// const strOne = '\u9733';
// const strSecond = "\u0065"

// console.log(strOne.normalize('NFC'))
// console.log(strSecond.normalize('NFC'))

// console.log(strSecond.normalize())
// // By observing Output we can say if .normalize() methods parameter is undefined  it uses 'NFC'
// console.log(strOne.normalize('NFD'))

// 15. padEnd()

// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

// Syntax : padEnd(targetLength)
// Syntax : padEnd(targetLength, padString)

//  targetLength :-
//  The length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, the current string will be returned as-is.

// padString :-
// The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied.

// The default value for this parameter is " " , that is space .

// It returns A String of the specified targetLength with the padString applied at the end of the current string.

// Code :-

// const strFirst = 'Manish';

// console.log(strFirst.padEnd(25, '_'));
// // Expected output: "Manish___________________"

// const strSec = '200';

// console.log(strSec.padEnd(5));
// // Expected output: "200  "

// console.log(strSec.padEnd(-5));
// // Expected output: "200  "
// // as it is Negative length it only print current string

// console.log(strSec.padEnd(5,2));
// // Expected output: "20022"

// console.log(strSec.padEnd(-5,2));
// // Expected output: "200"
// // as it is Negative length it only print current string

// const line = "I am Manish Sharma"
// console.log(strSec.padEnd(10,line));
// // Expected output: "200I am Ma"
// // Targetlength is includes the current string and padString both .
// // TargetLength = strSec.length( fixed ) + line.length( dependent )

// console.log(strSec.padEnd(25,line));
// // Expected output: "200I am Manish SharmaI am"
// // Here after all character stored it started repeating the padString till it stores 25 characters . It doen't reapeating the strSec string .

// console.log(strSec.padEnd(0,line));
// // Expected output: "200"

// // Here we can observe that it does not matter what length is given in the padEnd() , the first string on which we perform the method means strSec string is printed fully .

// console.log(strSec.padEnd());
// It doen't show error , It shows the current output as it is.

// 16. padStrart()

// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length.
// The padding is applied from the start of this string.

// Syntax : padStart(targetLength)
// Syntax : padStart(targetLength, padString)

// It returns A String of the specified targetLength with padString applied from the start.

// Code :-
// const String1 = "Manish"
// const line = "I am a Student"

// console.log(String1.padStart(15,line));
// Output : I am a StManish
// // Here we observe that , for padStart() method also the current_string is printed fully , then after the padStirng is added infront of the current_string

// // Targetlength is includes the current string and padString both .
// // TargetLength = line.length( dependent ) +strSec.length( fixed )

// console.log(String1.padStart(20,'*'));
// // Output : **************Manish

// // console.log(String1.padStart(20,*));
// // Output : Error * should be in '*' form

// console.log(String1.padStart(20));
// // Output :               Manish
// // If the padString is not passed , it prints the " " (space)

// console.log(String1.padStart(1));
// console.log(String1.padStart());
// // Both's Output : Manish

// console.log(String1.padStart(15.7,line));
// Output : I am a StManish
// The length will be converted into Integer

// console.log(String1.padStart(6+4,line));
// // Output : I amManish
// // It shows the value after completing the arithmetic operation

// 17. raw()
// The String.raw() static method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

// Syntax : String.raw(strings)
// Syntax : String.raw(strings, sub1)
// Syntax : String.raw(strings, sub1, sub2)
// Syntax : String.raw(strings, sub1, sub2, /* …, */ subN)

// String.raw`templateString`

// It returns The raw string form of a given template literal.

// console.log(String.raw`Hi\n${2 + 3}!`);

// 18. repeat()

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

// Syntax : repeat(count)

// It returns A new string containing the specified number of copies of the given string.

// Thrown if count is negative or if count overflows maximum string length.

// const myString = "Mansih"
// console.log(myString.repeat(2))
// Output : MansihMansih

// console.log(myString.repeat(-2))
// Output : Error ( Invalid count )

//  console.log(myString.repeat())
//  // Output :
//  // It shows empty string in ouput
//  console.log(typeof myString.repeat());
//  // Output : String

// console.log(myString.repeat(2.8))
// // Output : MansihMansih
// // Count will be converted into Integer

// console.log(myString.repeat(Infinity))
// // Output : RangeError (Invalid count value: Infinity)

// console.log(myString.repeat(10/2))
// // Output : MansihMansihMansihMansihMansih
// // It shows the value after completing the arithmetic operation

// console.log(({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2));
// // 'abcabc' (repeat() is a generic method)
// // Output : abcabc

// 19. replace()

// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.

// If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// Syntax : replace(pattern, replacement)

// It returns A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

// Note :- 
// {  This method does not mutate the string value it's called on. It returns a new string.

// A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the g flag, or use replaceAll() instead.

// If pattern is an object with a Symbol.replace method (including RegExp objects), that method is called with the target string and replacement as arguments. Its return value becomes the return value of replace(). In this case the behavior of replace() is entirely encoded by the @@replace method — for example, any mention of "capturing groups" in the description below is actually functionality provided by RegExp.prototype[@@replace].

// If the pattern is an empty string, the replacement is prepended to the start of the string.  }

// Code :- 

// const newline = `I am Manish Sharma`

// console.log(newline.replace(" ","_"));
// // Output : I_am Manish Sharma
// // Here we observe that only the first occurance will be changed 

// console.log(newline.replace("l","_"));
// // Output : I am Manish Sharma
// // Nothing is changed as th pattern is not found , it returns the same string

// console.log(newline.replace("","_"));
// // Output : _I am Manish Sharma

// console.log(newline.replace("M",""));
// // Output : I am anish Sharma

// console.log(newline.replace());
// // Output : I am Manish Sharma

// // console.log(newline.replace(M,"0"));
// // Output : ReferenceError: M is not defined

// console.log(newline.replace("M",0));
// // Output : I am 0anish Sharma

// console.log(newline.replace("M" , undefined));
// // Output : I am undefinedanish Sharma

// console.log(newline.replace("M" , null));
// // Output : I am nullanish Sharma

// console.log(newline.replace("M" , 'null'));
// // Output : I am nullanish Sharma



// 20. replaceAll()

// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// Syntax : replaceAll(pattern, replacement)

// It returns A new string, with all matches of a pattern replaced by a replacement.

// Exception : Thrown if the pattern is a regex that does not have the global (g) flag set (its flags property does not contain "g").

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey'));
// // Output : I think Ruth's - is cuter than your -!

// console.log(paragraph.replaceAll('dog', '-'));
// // Output : I think Ruth's monkey is cuter than your monkey!

// console.log(paragraph.replaceAll());
// // Output : I think Ruth's dog is cuter than your dog!

// console.log(paragraph.replaceAll('+', 'monkey'));
// // Output : I think Ruth's dog is cuter than your dog!

// console.log(paragraph.replaceAll('dog', null));
// // Output : I think Ruth's null is cuter than your null!



// 21. search()

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// Syntax : search(regexp)

// It returns The index of the first match between the regular expression and the given string, or -1 if no match was found.

// const paragraph1 = "I think Ruth's dog is cuter than your dog!";

// // console.log(paragraph1.search(" "));
// // Output : 1
// // It shows the only first occurance of the regrx

// console.log(paragraph1.search("tha"));
// // Output : 28


// console.log(paragraph1.search(""));
// // Output : 0

// console.log(paragraph1.search());
// // Output : 0

// console.log(paragraph1.search(null));
// // output : -1
// // Here null is act as a string and so it cant found null in the paragraph and return -1

// console.log(paragraph1.search("Manish"));
// // output : -1

// console.log(paragraph1.search(/[^\w\s']/g));
// // output : 41

// console.log(paragraph1.charAt(paragraph1.search(/[^\w\s']/g)));
// // output :  !

// console.log(paragraph1[41]);
// // output : !

// console.log(paragraph1[paragraph1.search(/[^\w\s']/g)]);
// // output :  !



// 22. slice()

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// Syntax : slice(indexStart)
// Syntax : slice(indexStart, indexEnd)

// It returns A new string containing the extracted section of the string.

// slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character through the eighth character (characters indexed 4, 5, 6, and 7):

/*
// If indexStart >= str.length, an empty string is returned.
// If indexStart < 0, the index is counted from the end of the string. More formally, in this case, the substring starts at max(indexStart + str.length, 0).
// If indexStart is omitted, undefined, or cannot be converted to a number, it's treated as 0.
// If indexEnd is omitted, undefined, or cannot be converted to a number, or if indexEnd >= str.length, slice() extracts to the end of the string.
// If indexEnd < 0, the index is counted from the end of the string. More formally, in this case, the substring ends at max(indexEnd + str.length, 0).
// If indexEnd <= indexStart after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), an empty string is returned.
*/ 

// code :-

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(4));
// // Output :  quick brown fox jumps over the lazy dog.
// // Here we can observe that the indexstart's value is not count as the taking the starting index as 0 . The strating index is counted or taking as 1 here 

// console.log(str.slice(60));
// // Output : 
// // Empty string as Indexx value is more than the string's length 

// console.log(str.slice(-4));
// // Output : dog.
// // It takes the last index of the sting as -1

// console.log(str.slice(0));
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice(-0));
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice());
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice(""));
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice("fox"));
// // Output : The quick brown fox jumps over the lazy dog.

// let val ;
// console.log(str.slice(val));
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice(-1000));
// // Output : The quick brown fox jumps over the lazy dog.

// console.log(str.slice(4, -4));
// Output : quick brown fox jumps over the lazy

// console.log(str.slice(-4, -4));
// // Output : 
// // Empty string

// const  sl = "dog"
// console.log(str.slice( sl));
// // Output : The quick brown fox jumps over the lazy dog.



 //  23. split()

 // The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// Syntax : split(separator)
// Syntax : split(separator, limit)

// It returns An Array of strings, split at each point where the separator occurs in the given string.

// Note :- If separator is a non-empty string, the target string is split by all matches of the separator without including separator in the results. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like myString.split("\t"). If separator contains multiple characters, that entire character sequence must be found in order to split. If separator appears at the beginning (or end) of the string, it still has the effect of splitting, resulting in an empty (i.e. zero length) string appearing at the first (or last) position of the returned array. If separator does not occur in str, the returned array contains one element consisting of the entire string.If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters", without empty strings on either ends of the resulting string.

// Code :- 
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');

// console.log(words);
// // Output : ['The',   'quick','brown', 'fox', 'jumps', 'over','the',   'lazy', 'dog.']

// console.log(words[0]);
// // Output : The

// console.log(str.split());
// // Output : [ 'The quick brown fox jumps over the lazy dog.' ]

// console.log(str.split("fox"));
// // Output : [ 'The quick brown ', ' jumps over the lazy dog.' ]

// console.log(str.split(" ", 3));
// // Output : [ 'The', 'quick', 'brown' ]




// 24. startsWith()

// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// Syntax : startsWith(searchString)
// Syntax : startsWith(searchString, position)

// It returns true if the given characters are found at the beginning of the string, including when searchString is an empty string; otherwise, false.

// searchString :-
// The characters to be searched for at the start of this string. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes startsWith() to search for the string "undefined", which is rarely what you want.

// position :-
// The start position at which searchString is expected to be found (the index of searchString's first character). Defaults to 0.

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Output : true

// console.log(str1.startsWith(''));
// // Output : true

// console.log(str1.startsWith());
// // Output : false

// console.log(str1.startsWith('5'));
// // Output : false

// console.log(str1.startsWith(null));
// // Output : false

// console.log(str1.startsWith(undefined));
// // Output : false

// console.log(str1.startsWith(str1[0]));
// // Output : true

// // console.log(str1.startsWith(asdasd));
// // Output : ReferenceError: asdasd is not defined


// console.log(str1.startsWith("tur",2));
// // Output : true

// // console.log(str1.length);
// console.log(str1.startsWith('',20));
// // Output : true


// console.log(str1.startsWith('',25));
// // Output : true

// console.log(str1.startsWith("mas",25));
// // Output : false




// 25. substring()

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// Syntax : substring(indexStart)
// Syntax : substring(indexStart, indexEnd)

// It returns A new string containing the specified part of the given string.

// Note :-
/*
// substring() extracts characters from indexStart up to but not including indexEnd. In particular:

// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

// Any argument value that is NaN is treated as if it were 0.

*/

// code :- 

// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Output : oz
// console.log(str);
// // Output : Mozilla

// console.log(str.substring());
// // Output : Mozilla

// console.log(str.substring(-3));
// // Output : Mozilla

// console.log(str.substring(0,-5));
// // Output : 
// // Empty string 

// console.log(str.substring(-1,-4));
// // Output : 
// // Empty string 

// console.log(str.substring(0,0));
// // Output : 
// // Empty string 

// console.log(str.substring(5,0));
// // Output : Mozil





// 26. toLocaleLowerCase()

// The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

// Syntax : toLocaleLowerCase()
// Syntax : toLocaleLowerCase(locales)

// It returns A new string representing the calling string converted to lower case, according to any locale-specific case mappings.

// Code :-

// const mystr = "MANISH HelloW sI "

// console.log(mystr.toLocaleLowerCase());
// // Output : manish hellow si 

// console.log(mystr.toLocaleLowerCase("22"));
// // Output : RangeError: Incorrect locale information provided

// console.log(mystr.toLocaleLowerCase(""));
// // Output : RangeError: Incorrect locale information provided

// console.log(mystr.toLocaleLowerCase("tr"));
// // // Output : manısh hellow sı

// console.log(mystr.toLocaleLowerCase("us"));
// // // Output : manısh hellow sı

// console.log(mystr.toLocaleLowerCase("eng"));
// // // Output : manısh hellow sı




// 27. toLocaleUpperCase()

// The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.

// Syntax : toLocaleUpperCase()
//  Syntax : toLocaleUpperCase(locales)

// It returns A new string representing the calling string converted to upper case, according to any locale-specific case mappings.

// Code :- 

// const mystr = "I am Manish Sharma"

// console.log(mystr.toLocaleUpperCase());
// // Output : I AM MANISH SHARMA

// console.log(mystr.toLocaleUpperCase(0));
// // Output : I AM MANISH SHARMA

// // console.log(mystr.toLocaleUpperCase(""));
// // Output : RangeError: Incorrect locale information provided

// console.log(mystr.toLocaleUpperCase('eng'));
// // Output : I AM MANISH SHARMA



// 28. toLowerCase()

// The toLowerCase() method of String values returns this string converted to lower case.

// The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.

// Syntax : toLowerCase()

// Code :- 
// const mystr = "MANISH HELLO!"

// console.log(mystr.toLowerCase());
// // Output : manish hello!

// console.log(mystr.toLowerCase(12));
// // Output : manish hello!




// 29. toString()

// the toString() method of String values returns this string value.

// Syntax : toString()

// Note :- 
/*
// The String object overrides the toString method of Object; it does not inherit Object.prototype.toString(). For String values, the toString method returns the string itself (if it's a primitive) or the string that the String object wraps. It has the exact same implementation as String.prototype.valueOf().

// The toString() method requires its this value to be a String primitive or wrapper object. It throws a TypeError for other this values without attempting to coerce them to string values.

// Because String doesn't have a [@@toPrimitive]() method, JavaScript calls the toString() method automatically when a String object is used in a context expecting a string, such as in a template literal. However, String primitive values do not consult the toString() method to be coerced to strings — since they are already strings, no conversion is performed.
*/

// const stringObj = new String('foo');

// console.log(stringObj);
// // Output : [String: 'foo']

// const aStr = toString(45)
// console.log(typeof aStr);
// // Output : string

// console.log( aStr);
// // Output : [object Undefined]

// let b= 45
// console.log(typeof b.toString());
// // Output : string
// console.log(b.toString());
// // Output : 45




// 30. toUpperCase()

// The toUpperCase() method of String values returns this string converted to uppercase.

// Syntax : toUpperCase

// The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

// Code :- 

// const MyStr = "I am Manish Sharma"

// console.log(MyStr.toUpperCase());
// // Output : I AM MANISH SHARMA



// 31. toWellFormed()

// The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

// Syntax : toWellFormed()

// It returns A new string that is a copy of this string, with all lone surrogates replaced with the Unicode replacement character U+FFFD. If str is well formed, a new string is still returned (essentially a copy of str).

// Code :-

// const strings = [
//     // Lone leading surrogate
//     "ab\uD800",
//     "ab\uD800c",
//     // Lone trailing surrogate
//     "\uDFFFab",
//     "c\uDFFFab",
//     // Well-formed
//     "abc",
//     "ab\uD83D\uDE04c",
//   ];
  
//   for (const str of strings) {
//     console.log(str.toWellFormed());
//   }
//   // Logs:
//   // "ab�"
//   // "ab�c"
//   // "�ab"
//   // "c�ab"
//   // "abc"
//   // "ab😄c"



// 32. trim()

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// It returns a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

// If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).

// Syntax : trim()

// Code :-

// const a = `    I am Manish Sharma    `

// console.log(`+${a}+`)
// // Output : +    I am Manish Sharma    +
// console.log(`+${a.trim()}+`)
// // Output : +I am Manish Sharma+



// 33. trimEnd()

// The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

// Syntax : trimEnd()

// It returns A new string representing str stripped of whitespace from its end (right side). Whitespace is defined as white space characters plus line terminators.

// Code :-

// const mystr= `     I am Manish Sharma       `

// console.log(`+${mystr}+`);
// // Output : +     I am Manish Sharma       +
// console.log(`+${mystr.trimEnd()}+`);
// // Output : +     I am Manish Sharma+




// 34. trimStart()

// The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

// Syntax : trimStart()

// It returns A new string representing str stripped of whitespace from its beginning (left side). Whitespace is defined as white space characters plus line terminators.

// Code :-

// const mystr= `     I am Manish Sharma       `

// console.log(`+${mystr}+`);
// // Output : +     I am Manish Sharma       +
// console.log(`+${mystr.trimStart()}+`);
// // Output : +I am Manish Sharma       +




// 35. valueOf()

// The valueOf() method of String values returns this string value.

// Syntax : valueOf()

// It returns A string representing the primitive value of a given String object.

// Code :- 
// const stringObj = new String('foo');

// console.log(stringObj);
// // Output : [String: 'foo']

// console.log(stringObj.valueOf());
// // Output : foo

