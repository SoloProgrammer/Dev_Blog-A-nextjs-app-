export const server = {
    URL: {
        local: "http://localhost:3000",
        production: "dev-blog-a-nextjs-3p5i6t99j-solo-programmers-projects.vercel.app"
    }
}

export const api = {
    getCategories: () => {
        return `${server.URL.production}/api/categories`
    },
    getPosts: (query) => {
        return `${server.URL.production}/api/posts${query}`
    },
    getSinglePost: (slug) => {
        return `${server.URL.production}/api/posts/${slug}`
    },
    savePost: (slug) => {
        return `${server.URL.production}/api/posts/${slug}/save`
    },
    getPostComments: (query) => {
        return `${server.URL.production}/api/comments${query}`
    },
    createNewComment: () => {
        return `${server.URL.production}/api/comments`
    },
    deleteComment: (query) => {
        return `${server.URL.production}/api/comments${query}`
    },
    updateComment: (query) => {
        return `${server.URL.production}/api/comments${query}`
    },
    getUser: () => {
        return `${server.URL.production}/api/user`
    },
    addReply: (commentId) => {
        return `${server.URL.production}/api/comments/${commentId}/reply`
    },
    getReplies: (commentId) => {
        return `${server.URL.production}/api/comments/${commentId}/reply`
    },
    updateReply: (commentId, query) => {
        return `${server.URL.production}/api/comments/${commentId}/reply${query}`
    },
    deleteReply: (commentId, query) => {
        return `${server.URL.production}/api/comments/${commentId}/reply${query}`
    }
}

