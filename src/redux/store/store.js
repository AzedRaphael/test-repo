import {configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit"
import authReducer from "../slice/authSlice"


const rootReducer = combineReducers({
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware:  getDefaultMiddleware({
        serializableCheck:false
    })
});

export default store;