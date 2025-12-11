# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

This bug is occurring because `return "Your grade is: " + letter;` is using the global declaration of `letter` since inside the if-else code block it is redeclaring the `letter` variable and can not be accessed outside the if-else block.The return statement also defaults to undefined since letter wasn't assigned to anything and JavaScript auto assigns it as undefined.

**Part B:**

To fix the bug

```js
const getLetterGrade = (score) => {
  let letter = ""; //leave it as an empty string in case an invalid score was given it won't return undefined or a message that an invalid score was give up to how the programmer wants to set it up
  if (score >= 90) {
    letter = "A"; //got rid of the `redeclaration` and just reassigned the global variable
  } else if (score >= 80) {
    letter = "B"; //got rid of the `redeclaration` and just reassigned the global variable
  } else if (score >= 70) {
    letter = "C"; //got rid of the `redeclaration` and just reassigned the global variable
  } else {
    letter = "F"; //got rid of the `redeclaration` and just reassigned the global variable
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**
`console.log(originalSettings.volume);` will log 75 because `const newSettings = originalSettings;` did not copy the key-values of `originalSettings` but rather its refrence code hence both `newSettings` and `originalSettings` will point to the same object inside the heap.

**Part B:**
We will simply tell java script we want to copy the key-values of `originalSettings` rather then the reference code by doing the following below.
**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; //creates a copy of the values of originalSettings rather then coping the reference code
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

The first iteration of filter ,the value will be the 0 index of `products` in this case an object containing `{ name: "Laptop", price: 1000, inStock: true }`.

The value return is determined by this expression :`return product.inStock;` which goes through the `products` 0th index object and with in that object goes through the keys until it finds `inStock` key (this is done through the dot notation).Once it finds the key it will access the value of that key and since the value is a boolean it will resolve the return value only when true.

Once `products` has been iterated through it will return and array of objects that are in Stock.For example in the first iteration after the callback function the whole object `{ name: "Laptop", price: 1000, inStock: true }` will be pushed into the new array filter creates.
