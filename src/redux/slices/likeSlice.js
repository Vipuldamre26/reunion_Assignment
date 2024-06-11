import { createSlice } from "@reduxjs/toolkit";

const addLikeSlice = createSlice({
    name: 'like',
    initialState: { likedata: [] },
    reducers: {
        addCard: (state, action) => {
            state.likedata = action.payload;
        }
    }
})


export default addLikeSlice.reducer;

export const { addCard } = addLikeSlice.actions;