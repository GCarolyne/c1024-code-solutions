'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
writeTodos();
function readTodos() {
  const todosJSON = localStorage.getItem('todos-storage');
  if (todosJSON) {
    return JSON.parse(todosJSON);
  }
  return [];
}
