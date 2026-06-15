import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 , showCounter : true};

//  hare we are preparing a slice of our golbal state
/* "createSlice()" once an object as an argument */  
const counterSclice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment(state){
      state.counter++;
    }, 
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.payload
    },

    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }

});

const store = configureStore({
  reducer :  counterSclice.reducer,
});

export const counterAction = counterSclice.actions;
export default store;
