import { useState, useEffect } from 'react';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Head from './Head';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
      setTodos(result.data);
    });
  });

  const TodoList = ({ todos }) => {
    return (
      <ol className="list-group list-group-numbered">
        {todos.map((todo) => (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{todo.title}</div>
              {todo.id}
            </div>

            <input type="checkbox" checked={todo.completed} />
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="animeLeft">
      <Head title="Todo" /> {todos ? <TodoList todos={todos} /> : <NotFound />}
    </div>
  );
}

export default TodoList;
