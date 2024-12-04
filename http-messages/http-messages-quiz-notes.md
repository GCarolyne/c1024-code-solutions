# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  They are service requesters. A client is someone that requests a resource from a server. Something some service, someone is requesting a resource from a server.
- What is a server?
  A server is a provider of a resource or service.
- Which HTTP method does a browser issue to a web server when you visit a URL?
  The get method is used to request data from the server.
  POST method when submitting a form
  HEAD to fetch metadata header only without the full response ody.
  OPTIONS : to discover the methods supported by the server for a specific resource.
- What three things are on the start-line of an HTTP **request** message?
  POST / HTTP/ 1.1 on request
  HTTP method
  the request target
  and the version of the HTTP

- What three things are on the start-line of an HTTP **response** message?

The protocal version
A status code
Status text

Status range something in 200 reponse range is successful 100 would be informational.

- What are HTTP headers?
  Additional information of what occured between the client and the server. You can send additional requests for example a API key.
- Where would you go if you wanted to learn more about a specific HTTP Header?mdn web docs
  HTTP cat site
- Is a body required for a valid HTTP request or response message?
  no it depends on the status quo or message??

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
