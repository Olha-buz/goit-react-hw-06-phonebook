const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    reducers: {
        addFilter(state, action) {
            state.input = action.payload
        }
    }
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;