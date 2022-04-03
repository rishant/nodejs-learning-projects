import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Summary from './components/Summary/Summary';
import Todo from './components/Todo/Todo';

import { useState } from 'react';

function App() {

  const [myName, setMyName] = useState();

  let expenseDate = new Date();
  let expenseTitle = "Food Panda";

  const changeName = (event) => {
    console.log(event.target.value);
    setMyName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Learn React</h1>
      <ExpenseItem expenseDate={expenseDate} expenseTitle={expenseTitle} />
      <hr />
      <h1>{myName}</h1>
      <input type='text' onChange={changeName} />
      <hr />
      <Summary summaryId="#summaryId"/>
      <Todo/>
    </div>
  );

}

export default App;
