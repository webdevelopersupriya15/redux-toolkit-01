import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux-slices/userSlices";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
