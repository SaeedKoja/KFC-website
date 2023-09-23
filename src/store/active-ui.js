import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activePage: 10
};

const activeSlice = createSlice({
    name: "active",
    initialState: initialState,
    reducers: {
        replaceActiveState(state, action) {
            state.activePage = action.payload;
        },
    }
});

export default activeSlice.reducer;
export const activeAction = activeSlice.actions;
