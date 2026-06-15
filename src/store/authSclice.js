import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = { isAuthenticated: false };


const authenticationSclice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authenticationSclice.actions;
export default authenticationSclice.reducer;