import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const IncrementDispatchHandler = () => {
    dispatch({type: 'increment'})
  };
  const IncreaseHandler = () => {
    dispatch({type: 'increase', amount: 5})
  }
  const DecrementDispatchHandler = () => {
    dispatch({type: 'decrement'})
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementDispatchHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increment by 5</button>
        <button onClick={DecrementDispatchHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
