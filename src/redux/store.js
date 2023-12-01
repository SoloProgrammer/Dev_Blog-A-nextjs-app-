
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/redux/slices/authSlice'
import commentsReducer from '@/redux/slices/commentsSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        comments: commentsReducer
    }
})
export default store