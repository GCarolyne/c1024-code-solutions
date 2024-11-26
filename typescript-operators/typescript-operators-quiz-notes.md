# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& returns the last value if the firrst is truthy, otherwise it returns the first value.

|| returns the result of the first truthy value it finds, going left to right

&& is useful for conditionally evaluating an expression (esp.useful in React)

|| is useful for assinging default values to variables.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Starting from left to right as soon as the expression is ready to be evaluated it will return it and not check the rest if the first expression is true. Exits early.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

?? is the same sa || execpt that the first value must be explicitly undefined or null before the second value is taken.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It is a shortcut version of if else where the boolean expression is to the left of ?, the truthy operation.

- What is the `?.` (optional chaining) operator? When would you use it?

It tries to perform the following chained operation only if the current value is defined and non null. It is more succinct than checking if the variable is defined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It spreads and adds and creates a new array from a exsisting one.

- What data types can be spread into an array? Into an object?
  Anything itterable, anything that has its own properties..

- How does spread syntax differ from rest syntax?
  Spread syntax expands unpacks
  Rest compacts values into

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
