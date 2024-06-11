import { configureStore } from "@reduxjs/toolkit";
import fetchAllData from "./slices/fetchAllData";
import likeSlice from "./slices/likeSlice";


const store = configureStore({
    reducer: {
        data: fetchAllData,
        likedata: likeSlice,
    }
})

export default store;