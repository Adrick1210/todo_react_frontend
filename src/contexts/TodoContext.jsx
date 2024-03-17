import React, { createContext, useState, useEffect } from 'react';
import { todosLoader } from '../loader'; 


const initialState = [];

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await todosLoader();
      setTodos(response);
    };
    fetchData();
  }, []);

  const refreshTodos = async () => {
    const response = await todosLoader();
    setTodos(response);
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((t) => (t._id === todo._id ? todo : t));
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, refreshTodos, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}