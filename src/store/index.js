import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 , showCounter : true};

//  hare we are preparing a slice of our golbal state
/* "createSlice()" once an object as an argument */ 
createSlice({
  name: 'counter',
  initialState,
  reducers:{
    /*1. every method hare well then automatically recive the latest State*/

    /*2. these methods will be called for you by redux and they will recive the current 
    "state". also to the "action", we will use that in a second parameter */

    /*3. hare we don't need the "action" because these methods will automatically be called
    for you depending on which action was triggered.
    so we don't need to write our own "if checks" anymore  */

    /*4. we will soon be abel to identify these different reducer and dispatch actions thet 
    target different reducers */

    increment(state){
      state.counter++;
      /* Now in method hare in the reducers map we now also can do something else then we did 
      before. 

      Now hare we are allowed to mutate the state so hare we can set "state.counter++" 
      for example, for incrementing it
      Now this was forbidden before and emphasized that it is forbidden. I aslo did emphasize 
      it because hare it seems to be allowed. 
      
      But the importent part is the word seems. we still must not manipulate the existing state
      but the good thing is when using "redux toolkit" and it's function like create slice,
      we can't accidently manipulate the existing state.

      because redux toolkit internally uses another package called "imgur", which will 
      detect code like this "state.counter++;", and which will automatically clone 
      the existing state, create a new state object keep all the state which we are not 
      editing, and override the state which we are editing in an immutable way. 
      
      so we still have immutable code hare "state.counter++;", 
      even though it does look not look like it ,
      Because of this internally used packeg and therefor we as a developer have a much 
      easier time working with redux.
      Because we don't have to create a copy manually and keep all the code we are not 
      chenging 
      "
       return {
        counter: state.counter + 1,
        showCounter : state.showCounter,
      };
      "
      instad, we just chenging the code we wenna change and internally it's 
      translated into immutable code 

      */ 
    }, 
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.amount
      /* Hare for "increase" method now we need a paylod, we now need a extra data */
      /* Now when using redusx toolkit can still have reducers that listen to actions 
      that have an "extra payload" "extra data", 
      because these reducer function hare won't  just received the state, they also still
      do get the "action". 
      we just don't need to accept it in the other two reducers
      */ 
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }

});
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter : state.showCounter,
    };
  }

  if(action.type === "increase"){
    return {
        counter : state.counter + action.amount,
        showCounter: state.showCounter,
    }
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if(action.type === "toggle"){
    return {
      showCounter: !state.showCounter ,
      counter:state.counter,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
