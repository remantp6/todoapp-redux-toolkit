import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    users: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.users.push({id:nextTodoId++, list:action.payload});
    },
    deleteTodo: (state, action) => {
      state.users = state.users.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      //console.log("values from updateTodo reducer", action.payload);
      const { id, name, email } = action.payload;
     //console.log("id console", id);
      const todoUpdate = state.users.find(todo => todo.id === id);
      if (todoUpdate) {
        todoUpdate.list.name = name;
        todoUpdate.list.email = email;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
