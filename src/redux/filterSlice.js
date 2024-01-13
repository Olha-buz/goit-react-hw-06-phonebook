const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    input: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: {
            reducer(state, action) {
                state.input = action.payload
            }
        }
    }

});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;