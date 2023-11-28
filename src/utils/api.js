export const server = {
    URL: {
        local: "http://localhost:3000"
    }
}

export const api = {
    getCategories: () => {
        return `${server.URL.local}/api/categories`
    },
    getPosts: (query) => {
        return `${server.URL.local}/api/posts${query}`
    },
    getSinglePost: (slug) => {
        return `${server.URL.local}/api/posts/${slug}`
    },
    savePost: (slug) => {
        return `${server.URL.local}/api/posts/${slug}/save`
    },
    getPostComments: (query) => {
        return `${server.URL.local}/api/comments${query}`
    },
    createNewComment: () => {
        return `${server.URL.local}/api/comments`
    },
    deleteComment: (query) => {
        return `${server.URL.local}/api/comments${query}`
    },
    updateComment: (query) => {
        return `${server.URL.local}/api/comments${query}`
    },
    getUser:()=>{
        return `${server.URL.local}/api/user`
    }
}

