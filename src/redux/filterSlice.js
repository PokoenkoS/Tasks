import { statusFilters } from "./constants";

const { createSlice } = require("@reduxjs/toolkit");

const filterInitialState = {
    status: statusFilters.all,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status=action.payload;
        },
    },

});

export const {setStatusFilter} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;