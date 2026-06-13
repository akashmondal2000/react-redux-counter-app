import { useSelector, useDispatch  } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
    const counter = useSelector( state => state.counter );
    const show = useSelector( state => state.showCounter );
    const dispatch = useDispatch();


    const toggleCounterHandler = ()=>{
        dispatch({type: 'toggle'})
    };

    const incrementHandeler =()=>{
        dispatch( { type: 'increment' })
    };

    const increaseHandler =()=>{
        dispatch({type:"increase", amount: 5 } )
    }

    const decrementHandler =()=>{
        dispatch( { type: "decrement"})
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