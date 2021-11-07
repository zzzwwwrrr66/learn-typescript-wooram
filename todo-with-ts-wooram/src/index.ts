interface TODO_OBJ { // interface 중복되는걸 막을수있음;
  id: number,
  title: string,
  done: boolean,
}
let todoItems: TODO_OBJ[];

// api
function fetchTodoItems() {
  const todos: Array<TODO_OBJ> = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): TODO_OBJ[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TODO_OBJ): void { // :void == 리턴값이 없을때
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: {title: string, id: number,  done: boolean}): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(( item:{done: boolean} ) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  let addItems: TODO_OBJ[] = [
    {id: 4, title: '나는', done: false},
    {id: 5, title: '우람', done: false}
  ]
  for(let i = 0; i < addItems.length; i++){
    addTodo(addItems[i]);
  }
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
