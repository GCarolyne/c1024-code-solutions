# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  It is static.

- How does setting `position: relative` on an element affect document flow?
  Allows it to be positioned relative to its normal position in the document flow. No impact on document flow. Z-ined is set it allows the element to stack about or below other elements that may overlap. Positioning context.

- How does setting `position: relative` on an element affect where it appears on the page?
  Offsetting: You can use the top, right, bottom, and left properties to move the element from its original position. For example, top: 10px; would move the element down by 10 pixels from where it would normally be.

Original Position: The element will still occupy its original space in the document flow, meaning other elements will be laid out as if the relatively positioned element is still in its original spot. This contrasts with position: absolute, where the element is removed from the document flow.

Stacking Context: A relatively positioned element can create a new stacking context, allowing you to control the z-order of overlapping elements using the z-index property.

Overall, position: relative allows for adjustments in positioning while keeping the layout intact, making it a useful tool for minor tweaks and creating positioning contexts for child elements.

- How does setting `position: absolute` on an element affect document flow?
  Has a significant impact on document flow. It is removed from the document flow. Other elements will behave as if it does not exist. They will not shift to fill the space where the absolutely positioned element would have been.
  The element is positioned relative to the nearest positioned ancestor. If no such ancestor exists it will be positioned relative to the initial containing block, usually the viewport. Overlapping, it can overlap with other elements without affecting their positioning.
  Summary: postion:absolute allows for precise placement of elements without disrupting the layout of surrounding content.
- How does setting `position: absolute` on an element affect where it appears on the page?
  It does not disrupt the flow of other elements.
- How do you constrain an absolutely positioned element to a containing block?
  To constrain an sbolutely positioned element to a containing block, you need to ensure that it has a positioned ancestor. Set the position of the containning block parent element to relative. set the postio
- What are the four box offset properties?
  top,right,bottom,left

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
