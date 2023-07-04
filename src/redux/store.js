import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, taskReducer } from "./reducer";

 export const store = configureStore({
    reducer:{
        tasks: taskReducer,
        filter: filterReducer,
    }
})