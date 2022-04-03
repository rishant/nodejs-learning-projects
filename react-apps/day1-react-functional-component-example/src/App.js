import React, { useState } from 'react';
import './App.css';
import TodoHome from './components/TodoHome/TodoHome';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(100);
  const [isMale, setIsMale] = useState(true);

  return (
    <div className="App">
      <h1 >My name is {name}</h1>
      <h2 >I am {age} years old</h2>
      <h3 >I am {isMale ? "Male" : "Female"}</h3>

      <h1 className='App-heading'>This is Todo App using React Function-Component</h1>
      <TodoHome/>
    </div>
  );
}

export default App;
