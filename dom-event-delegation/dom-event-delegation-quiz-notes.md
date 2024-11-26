# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event for example the click function of a button had reached its target element for execution.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of the bubbling phase actually were the listener function response to the parent of the child element.
- What DOM element property tells you what type of element it is?
  nodeName, for example a tagname is very similar to nodename. For example if you have a div element both nodeName and tagname will return DIV but tagName will always be in uppercase while nodeName can vary in case depending on the browser.
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a childs property name and returns the closest array on a list for example.
- How can you remove an element from the DOM?
  remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  But utilizing the parent element which will cause a bubbling effect to add the event listener to all its children.

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
