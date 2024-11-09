/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): Todo {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
  console.log('the type of', typeof todosJSON);
  console.log('todosJSON', todosJSON);
}
writeTodos();

function readTodos(): Todo {
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
