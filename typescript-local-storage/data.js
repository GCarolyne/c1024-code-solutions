'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
  console.log('the type of', typeof todosJSON);
  console.log('todosJSON', todosJSON);
}
writeTodos();
function readTodos() {
  const readTod = localStorage.getItem('todos-storage');
  console.log('readTod', readTod);
  console.log('the type of', typeof readTod);
  if (readTod === 'string') {
    const todoIDJSON = JSON.parse(readTod);
    console.log('todoIDJSON', todoIDJSON);
  } else;
  const todos = readTodos();
  console.log('todos', todos);
}
readTodos();