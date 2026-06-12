import classes from './Counter.module.css'; 

const Counter = () => {

    const toggleCounterHandler = ()=>{

    };

  return (
    <main className={classes.counter}>
        <h1>Counter App</h1>
        <div className={classes.value}> Counter Value hare </div>
        <button onClick={toggleCounterHandler} > Toggle Counter </button>

    </main>
  )
}

export default Counter;