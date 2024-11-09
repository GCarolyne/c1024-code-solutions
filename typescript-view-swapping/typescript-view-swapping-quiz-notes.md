# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event target is always going to be the element that the event took place on.

- What is the effect of setting an element to `display: none`?
  The element will be hidden from the page and the rest of the content will be pushed up on the page.
- What does the `element.matches()` method take as an argument and what does it return?
  It takes a CSS selector as a argument and it returns a boolean.
- How can you retrieve the value of an element's attribute?
  getAttribute method to get the current value of the attribute argument.
- At what steps of the solution would it be helpful to log things to the console?
  Anytime we feel uncertain.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  Every time we would want to add another tab we would have to keep adding eventlisterners. It is associated to the parent and using the bubbling effect from the children upwards.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  A loop allows me to check all of them.

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
