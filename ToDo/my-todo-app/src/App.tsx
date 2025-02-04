import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { Todo } from "./types";
import { todoService } from "./feathers";
import reactlogo from './assets/react.svg';
import vitelogo from '../public/vite.svg';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Fetch initial todos
    todoService.find().then((res: any) => setTodos(res.data));

    // Listen for real-time updates
    todoService.on("created", (todo: Todo) => setTodos((prev) => [...prev, todo]));
    todoService.on("patched", (updatedTodo: Todo) =>
      setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)))
    );
    todoService.on("removed", (deletedTodo: Todo) =>
      setTodos((prev) => prev.filter((todo) => todo.id !== deletedTodo.id))
    );
  }, []);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <a >
        <img src={vitelogo} className="logo" />
        <img src={reactlogo} className="logo"/>
      </a>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
