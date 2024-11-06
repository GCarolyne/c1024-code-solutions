# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  This method creates a new element.
  But it does not add it to the page.
- How do you add an element as a child to another element?
  appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  a string representing the attribute you want to assign and the value you want to assign. The first argument is what I want to update and the second is the value of that attribute.
- What steps do you need to take in order to insert a new element into the page?
  We need to create the dom element by defining a new variable.
  Give it content attribute
  and append it to a parent.
- What is the `textContent` property of an element object for?
  It is to retrieve all the text of the html document. innertext displays all and text Content retrieves only the visible texxt from the page.

- Name two ways to set the `class` attribute of a DOM element.
  element.setAttribute() method or class . name property
  by creating a new dom element using the document.createElement
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  more organized , readable, reuseability, abstraction : abstracting logic away.

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
