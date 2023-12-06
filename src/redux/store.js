
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/redux/slices/authSlice'
import commentsReducer from '@/redux/slices/commentsSlice'
import categoriesReducer from '@/redux/slices/cayegoriesSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        comments: commentsReducer,
        categories: categoriesReducer
    }
})
export default store