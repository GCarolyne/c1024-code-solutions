# typescript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of a loop?

  It is to loop through a arrays, objects, numbers.

- What is the purpose of a **condition** expression in a loop?

  The condition expression makes the loop run until it shows us to be false.

- What does "iteration" mean in the context of loops?

  It is each time the loop passes through the cycle.

- _When_ does the **condition** expression of a `while` loop get evaluated?

  It is a expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution continues with the statement after the while loop.

- _When_ does the **initialization** expression of a `for` loop get evaluated?

  Executes once upon entering the loop.

- _When_ does the **condition** expression of a `for` loop get evaluated?

  Checked before every loop iteration. If false, the loop stops.

- _When_ does the **final** expression of a `for` loop get evaluated?

  Executes after the body on each iteration.

- Besides a `return` statement, which exits its entire function block, which keyword exits a loop before its **condition** expression evaluates to `false`?

  break;

- What does the `++` increment operator do?

  It increments the loop to run again until the condition returns false.

- How do you iterate through the keys of an object?

  // function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in obj) {
  keys.push(key);

      We use the for in loop!

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
