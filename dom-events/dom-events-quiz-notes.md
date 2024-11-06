# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  debuggin, tracking errors, testing making sure we are working with the correct data.
- What is the purpose of events and event handling?
  When we want to make our web browsers create functions. Dynamic web page.
  Listening for user interaction so we can use code after this has been done.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener function.
- What is a callback function?
  It is a function passed into another function as an argument.
- What object is passed into an event listener callback when the event fires?
  Call back functions are used to respond to events triggered by user interactions.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is going to refer to the element that is reponsible for firing the event. For example since the button is what was interacted with to trigger the click event, when event.target is logged it will print the html representation of the button element. What ever button was interactive with before the event was run.
- What is the difference between these two snippets of code?
  ````js
  element.addEventListener('click', handleClick);
  ```This one is the correct one to use it is actually initializing the function. This is just passing the reference.
  ```js
  element.addEventListener('click', handleClick());
  ```It calls the function even if the click event did not take place.
  ````

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
