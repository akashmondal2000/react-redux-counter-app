import { configureStore } from "@reduxjs/toolkit";
import counterSclice from "./counterSclice.js";
import authenticationSclice from './authSclice.js'; 

const store = configureStore({
  reducer: {
    counter: counterSclice,
    auth: authenticationSclice,
  },
});

export default store;
