import {useSelector, useDispatch} from 'react-redux'

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const IncrementDispatchHandler = () => {
    // dispatch({type: 'increment'}) //used for CreateStore redux
    dispatch(counterActions.increment()) //used with the redux toolkit
  };
  const IncreaseHandler = () => {
    // dispatch({type: 'increase', amount: 5}) //used for CreateStore redux
    dispatch(counterActions.increase(10)) //used with the redux toolkit // { type: UNIQUE_IDENTIFIER_NAME, payload: 10 }
  }
  const DecrementDispatchHandler = () => {
    // dispatch({type: 'decrement'}) //used for CreateStore redux
    dispatch(counterActions.decremenet()) //used with the redux toolkit
  };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'}) //used for CreateStore redux
    dispatch(counterActions.toggleCounter()) //used with the redux toolkit
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementDispatchHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increment by 10</button>
        <button onClick={DecrementDispatchHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
