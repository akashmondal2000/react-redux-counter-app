import { useSelector, useDispatch  } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from "../store/counterSclice.js"


const Counter = () => {
    const counter = useSelector( state => state.counter.counter );
    const show = useSelector( state => state.counter.showCounter );
    const dispatch = useDispatch();


    const toggleCounterHandler = ()=>{
        dispatch(counterAction.toggleCounter())
    };

    const incrementHandeler =()=>{
        dispatch( counterAction.increment())
    };

    const increaseHandler =()=>{
        dispatch(counterAction.increase(10))
    }

    const decrementHandler =()=>{
        dispatch( counterAction.decrement())
    }
  return (
    <main className={classes.counter}>
        <h1>Counter App</h1>
        {show && <div className={classes.value}> {counter}</div>}
        <div className={classes.buttons}>
            <button onClick={incrementHandeler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler} > Toggle Counter </button>
    </main>
  )
}

export default Counter;