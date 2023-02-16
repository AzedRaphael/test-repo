import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    password: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN_DETAILS:(state, action)=>{
        const {email} = action.payload
        state.email = email
        // state.isLoggedIn = false;
        // state.email = null;
        // state.password = null;
    }
  }
});

export const {SET_LOGIN_DETAILS} = authSlice.actions;

export const selectIsLoggedIn = (state)=>state.auth.isLoggedIn;
export const selectEmail = (state)=>state.auth.email;
export const selectPassword = (state)=>state.auth.password;

export default authSlice.reducer