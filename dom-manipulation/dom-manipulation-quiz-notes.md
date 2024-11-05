# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  className property of DOM elements allows you to access and manipulate the CSS classes applied to an element. It represents a space separated list of class names associated with the element.

- How do you update the CSS class attribute of an element using JavaScript?
  We use the assignment operator to assign it to the class name
- What is the `textContent` property of element objects?
  It referes to the text the element property might have.
- How do you update the text within an element using JavaScript?
  Center functionality of the text.
- Is the `event` parameter of an event listener callback always useful?
  It is not always useful but we always have access to it. We dont have to use the event object but sometimes we will and it will be useful in that sense.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  It would be more complicated. I would have to access the text content of element and have to do a lot of dom operations.

- Why is storing information about a program in variables better than only storing it in the DOM?

Dom operations are very performance heavy we would create dom bottle necks.
variables help with the performance of the dom.
Keeps the logic seperated, easy access.
By storing a variable I can reuse it in multipile functions.
If I didnt have it I would have to keep re

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
