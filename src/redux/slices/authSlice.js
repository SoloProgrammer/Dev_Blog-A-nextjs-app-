import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const auth = createSlice({
    initialState,
    name: 'authSlice',
    reducers: {
        addUser: (state, { payload }) => {
            state.user = payload
        },
        savePost: (state, { payload }) => {
            state.user.savedPosts.push(payload.postId)
        },
        unSavePost: (state, { payload }) => {
            state.user.savedPosts = state.user.savedPosts.filter(pid => pid !== payload.postId)
        }
    }
})

export const { addUser, savePost, unSavePost } = auth.actions
export default auth.reducer