import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import { useState } from 'react';

function App() {

  const [myName, setMyName] = useState();

  const changeName = (event) => {
    console.log(event.target.value);
    setMyName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Learn React</h1>
      <ExpenseItem/>

      <h1>{ myName }</h1>
      <input type='text' onChange={changeName}/>
    </div>
  );
}

export default App;
