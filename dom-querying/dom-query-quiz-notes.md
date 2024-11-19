# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  debugging,reference, accessibility
- What is a "model"?
  a "model" refers to the structure and representation of a web page as an object-oriented hierarchy.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document represents each element (tags, attributes, text)
  It is the root of the node and has access to all descendants.
- What is the word "object" referring to in the phrase Document Object Model?
  Representation of web pages content in the form of objects.
- What is a DOM Tree?
  A DOM tree represents each element as a node in the tree.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector) , get ElementByIde(id)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector), get ElementByClassName(classname)
- Why might you want to assign the return value of a DOM query to a variable?
  For easy access and readability.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  To join the typescript with javascript.
- What does `document.querySelector()` take as its argument and what does it return?
  returns the first element that matches a specified css selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  returns a nodelist of all elements in the document that match a specified css selector.

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
