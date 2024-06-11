import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../features/todoSlice';
import TodoItem from './ToDoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTodos());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = todos.map((todo) => <TodoItem key={todo._id} todo={todo} />);
  } else if (status === 'failed') {
    content = <p>Error fetching todos</p>;
  }

  return (
    <div className='bg-dark d-flex justify-content-between align-items-center text-white' style={{  flexDirection: 'column', width:"100%",  }}>
      <div>{content}</div>
    </div>
  );
};

export default TodoList;
