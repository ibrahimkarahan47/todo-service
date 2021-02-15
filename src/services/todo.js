function getTodos() {
  return {
    todos: global.TODOS,
  };
}

function createTodo({ todo }) {
  global.TODOS.push(todo);
  return {
    todo,
    success: true,
  }
}

function removeTodo({ id }) {
  if(global.TODOS.length > 0){
    if(global.TODOS.find(todo => todo.id === id)){
      global.TODOS = global.TODOS.filter(todo => todo.id !== id)
      return {
        success: true,
      }
    }
    return {
      success: false,
    }
  }
  return {
    success: false,
  }
}

function updateTodo({ id }) {
  if(global.TODOS.length > 0){
    const todo =  global.TODOS.find(todo => todo.id === id);
    if(todo){
      todo.done = true;
      global.TODOS[ global.TODOS.indexOf(todo)] = todo;
      return {
        todo,
        success: true,
      }
    }
  }
  return {
    success: false,
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  removeTodo,
};
