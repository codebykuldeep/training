import { Component } from 'react';
import classes from './Counter.module.css';
import {connect, useDispatch, useSelector} from'react-redux';

import { counterActions } from '../store/index';

const Counter = () => {
  const {counter,showCounter} = useSelector(state=> state.counter);
  const dispatch = useDispatch();
  // const showCounter = useSelector(state=>state.showCounter)
  
  
  

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler =()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler =()=>{
    dispatch(counterActions.decrement());
  }

  const increaseHandler =()=>{
    dispatch(counterActions.increase(5));
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//REDUX 


// const Counter = () => {
//   const counter = useSelector(state=> state.counter);
//   const dispatch = useDispatch();
//   const showCounter = useSelector(state=>state.showCounter)

//   const toggleCounterHandler = () => {
//     dispatch({type:'toggle'})
//   };

//   const incrementHandler =()=>{
//     dispatch({type:'increment'});
//   }
//   const decrementHandler =()=>{
//     dispatch({type:'decrement'});
//   }

//   const increaseHandler =()=>{
//     dispatch({type:'increase',payload:5});
//   }


//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounter && <div className={classes.value}> {counter} </div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increment by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;


// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
  

//   toggleCounterHandler(){

//   }

//   render(){
//     return (
//           <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}> {this.props.counter} </div>
//             <div>
//               <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//               <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//           </main>
//         );
//   }

// }
// const mapStateToProps = state =>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps = dispatch=>{
//   return{
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
