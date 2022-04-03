import React from 'react';
import styles from './TodoForm.module.css';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };    
  }

  render() {
    return (
      <div className={styles.TodoForm}>
        TodoForm Component
        <label>Todo Title: </label><input id="titleName" type="text" className={styles.addButton}/>
        <button onClick={this.props.add} className={styles.addButton}>Add</button>
        <button onClick={() => {this.props.update(this.props.titleName)}} className={styles.addButton}>Remove</button>
      </div>
    );
  }
}

export default TodoForm;
