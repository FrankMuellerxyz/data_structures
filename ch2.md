# Arrays

A Javascript Array is actually a specialized type of JavaScript object, with the indices being property names that can be integeres used to represent offsets. However, when integers are used for indices, they are convereted to strings interally in order to conform to the requirements for JavaScript objects. Because Javascript arrays are just objects, they are not quites as efficient as arrays of other programming languages.

- You can create an array the normal way you would in other languages:

```
 let numbers [];

- You can also create an array by calling the Array constructor, including adding elements to it by sending them as parameters:

```
let myArray = new Array();
```

- You can read the length of the array by accessing the length property of the object of the array:

```
let lengthOfArray = myArray.length;
```

Arrays do not need to contain elements of the same type

```
let myArray = [1, "name", true, null];
```

We can verify that an object is an Array by calling and passing the object to the Array.isArray() function:

```
let number = 1;
let arr = [1,2,3,4,5];
console.log(Array.isArray(number)); // displays "false"
console.log(Array.isArray(arr)); // displays "true"
