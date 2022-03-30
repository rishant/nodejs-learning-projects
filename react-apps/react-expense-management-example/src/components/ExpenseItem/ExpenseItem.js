import React from 'react';
import PropTypes from 'prop-types';
import './ExpenseItem.css';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

    You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.`);
  }

  componentDidMount() {
    console.log(`#componentDidMount`);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(`componentDidUpdate ${prevProps}`);
    console.log(`componentDidUpdate ${prevState}`);
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    console.log(`shouldComponentUpdate ${nextProps}`);
    console.log(`shouldComponentUpdate ${nextState}`);
  }
  */
  componentDidCatch(error, info) {
    console.error(`componentDidCatch ${error}`);
    console.info(`componentDidCatch ${info}`);
  }

  static getDerivedStateFromError(error) {
    console.error(`getDerivedStateFromError ${error}`);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    } 
    return (  
      <div className="ExpenseItem">
        ExpenseItem Component
        <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
      </div>
    );
  }
}
 
export default ExpenseItem;