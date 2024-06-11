import { createSlice } from "@reduxjs/toolkit";
import hotelsData from '../../data.json';


const fetchAllData = createSlice({
    name: 'data',
    initialState: { data: hotelsData },
    reducers: {
        
    }
})

export default fetchAllData.reducer;