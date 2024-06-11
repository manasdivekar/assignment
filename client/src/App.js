import React from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';

const App = () => {
  return (
    <div className='bg-dark  ' style={{height:"100vh"}}>
      <h1 className='text-white d-flex justify-content-center align-items-center' style={{paddingTop:"40px",paddingBottom:"40px",}} >Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
