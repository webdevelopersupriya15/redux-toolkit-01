import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value: 'John Wick',
};
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers: {
    }
})

export default userSlice.reducer


