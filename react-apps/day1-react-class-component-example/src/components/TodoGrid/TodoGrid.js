import React from 'react';
import styles from './TodoGrid.module.css';

class TodoGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };    
  }

  render(){
    return (
      <div className={styles.TodoGrid}>
        TodoGrid Component
      </div>
    );
  }
}

export default TodoGrid;
