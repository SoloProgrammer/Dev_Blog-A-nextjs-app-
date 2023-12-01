import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: []
}

const comments = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        updateComments: (state, { payload }) => {
            state.comments = payload
        },
        updateComment: (state, { payload: { commentId, desc } }) => {
            state.comments = state.comments.map(c => {
                if (c.id === commentId) {
                    c.desc = desc
                }
                return c
            })
        },
        incrementRepliesCount: (state, { payload: { commentId } }) => {
            state.comments = state.comments.map(c => {
                if (c.id === commentId) {
                    c.replyCount += 1
                }
                return c
            })
        },
        addReplies: (state, { payload: { commentId, replies } }) => {
            state.comments = state.comments.map(c => {
                if (c.id === commentId) {
                    c.replies = replies
                }
                return c;
            })
        }
    }
})

export const { incrementRepliesCount, updateComments, updateComment, addReplies } = comments.actions
export default comments.reducer