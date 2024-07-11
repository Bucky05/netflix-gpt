import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import userSlice from "./userSlice";
const appStore = configureStore({
    reducer: {
        user : userSlice
    }
})

export default appStore