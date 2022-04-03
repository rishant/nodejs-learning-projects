import React, { useState } from 'react';
import './Todo.css';

//https://www.youtube.com/watch?v=oKZYa_DCVMs&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=6

const Todo = (props) => {

  let todoListData = [{
    id: 1,
    taskName: "Food Prepration"
  }, {
    id: 2,
    taskName: "Eating"
  }, {
    id: 3,
    taskName: "School Visiting"
  }];

  const [myArray, setMyArray] = useState(todoListData);

  const add = (newObject) => {
    myArray.push(newObject);
    setMyArray(myArray);
  };

  const update = (updatedObject) => {
    myArray.map(ele => {
      if (ele.id === updatedObject.id) {
        ele.taskName = updatedObject.taskName;
      }
      return ele;
    });
    setMyArray(myArray);
  };

  const remove = (id) => {
    let newTodoListData = myArray.filter(ele => ele.id !== id);
    setMyArray(newTodoListData);
  };

  const clearArray = () => {
    setMyArray([]);
  };

  const repopulateArray = () => {
    setMyArray(todoListData);
  };
  
  return (
    <>
      {
        myArray.map(element => {
          return (<div className="Todo" key={element.id}>
            Todo: task: {element.taskName} | <button className='btn' onClick={() => {remove(element.id)}}>Remove</button>
          </div>);
        })
      }
      <button className='btn' onClick={clearArray}>Clear</button> | 
      <button className='btn' onClick={repopulateArray}>Repopulate</button>
    </>
  )
};

export default Todo;
