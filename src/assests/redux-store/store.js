import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../redux-slices/userSlices";



export const store=configureStore({
    reducer:{
        user:userSlice
    }
});