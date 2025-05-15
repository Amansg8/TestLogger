import React, { useState } from 'react';
import './App.css';
import { logError } from './logger';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  // Simulate a runtime error for demonstration
  React.useEffect(() => {
    // Uncomment the next line to force a runtime error and trigger logging
    throw new Error('Simulated runtime error for logging demonstration');
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      const errMsg = 'Cannot add empty todo.';
      setError(errMsg);
      await logError(errMsg);
      return;
    }
    setTodos([...todos, input]);
    setInput('');
    setError('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo App</h1>
        <form onSubmit={handleAddTodo}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a todo"
          />
          <button type="submit">Add</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
