import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, taskReducer } from "./reducer";

 export const store = configureStore({
    reducer:{
        tasks: taskReducer,
        filters: filtersReducer,
    }
})