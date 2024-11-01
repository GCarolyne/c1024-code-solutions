# css-layout-classes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do two div elements "vertically stack" on one another by default?

Two <div> elements stack vertically by default because they are block-level elements. Block-level elements take up the full width available and start on a new line, which means when you place one <div> after another, the second one appears below the first. This behavior is part of the CSS box model and the default display property for <div> elements, which is set to display: block.

If you want to arrange them side by side, you can change their display property to inline-block, flex, or grid, depending on your layout needs.

- What is the default `flex-direction` of an element with `display: flex`?

The default flex-direction of an element with display: flex is row. This means that the flex items will be laid out horizontally in a row from left to right. If you want to change the direction, you can use the flex-direction property and set it to column, row-reverse, or column-reverse.

- What are the three primary components of a page layout? (Which helper classes do you need?)
  The three primary components of a page layout are:

Header: This typically contains the site title, logo, navigation links, and any introductory information.

Main Content: This is where the primary information of the page resides. It can include articles, images, videos, or any other significant content.

Footer: This section usually includes copyright information, additional navigation links, social media links, and other relevant information.

Helper Classes You Might Need
To structure these components effectively, you might use various helper classes depending on your CSS framework or custom styles. Common classes include:

Container: For wrapping the layout and providing a max-width and centering.
Row: For creating a flex or grid row to hold columns.
Column: For defining individual columns within a row.
Text Alignment Classes: For controlling text alignment (e.g., .text-center, .text-left).
Spacing Utilities: For margins and padding (e.g., .m-2, .p-3).
These classes help in creating a responsive and organized layout.

- What is the minimum number of **columns** that you should put in a **row**?
  typically one
- What is the purpose of a **container**?

The purpose of a container in web design is to provide a responsive fixed-width or fluid layout for your content. Here are some key functions:

Max Width: A container typically sets a maximum width to keep the content from stretching too wide on larger screens, enhancing readability.

Centering: It often centers the content horizontally on the page, creating a more balanced layout.

Padding and Spacing: Containers usually come with built-in padding, providing space around the content to prevent it from touching the edges of the viewport.

Responsive Design: Containers help maintain a responsive layout by adjusting their width based on the screen size, ensuring a consistent appearance across different devices.

Organizational Structure: They help in organizing the layout by defining sections of the page, making it easier to manage and style different components.

Using containers effectively can significantly improve the overall design and usability of a webpage.

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
