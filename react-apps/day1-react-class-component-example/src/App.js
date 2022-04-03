import React from 'react';
import './App.css';
import TodoHome from './components/TodoHome/TodoHome';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: 100,
      isMale: true
    };
  }

  render() {
    return (
      <div className="App">
        <h1 >My name is {this.state.name}</h1>
        <h2 >I am {this.state.age} years old</h2>
        <h3 >I am {this.state.isMale ? "Male" : "Female"}</h3>

        <h1 className='App-heading'>This is Todo App using React Class-Component</h1>
        <TodoHome/>
      </div>
    );
  }

}

export default App;
