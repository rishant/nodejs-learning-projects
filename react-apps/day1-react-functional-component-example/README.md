## props
## state hook
## effect hook
## Business Logic in seprate service JS file.
### redux-store (connect api, dispach)
### redux-store props (useDispatch)
### redux-store state (componentMapToState)


Functional components have got a tool to work with the same methods using only one Hook useEffect. You can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined. 

--------------------FunctionalComponent--------------------------------
const FunctionalComponent = () => {
const [count, setCount] = React.useState(0);
return (
   <div>
     <p>count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Click</button>
   </div>
 );
};
------------------------------------------------------------------------

--------------------ClassComponent--------------------------------------
class ClassComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     count: 0
   };
 }
 
 render() {
   return (
     <div>
       <p>count: {this.state.count} times</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Click
       </button>
     </div>
   );
 }
}
------------------------------------------------------------------------