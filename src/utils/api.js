const isProduction = process.env.NODE_ENV === 'production';

export const server = {
    URL: isProduction
        ? "https://dev-blog-a-nextjs-3p5i6t99j-solo-programmers-projects.vercel.app"
        : "http://localhost:3000"
};

export const api = {
    getCategories: () => {
        return `${server.URL}/api/categories`
    },
    getPosts: (query) => {
        return `${server.URL}/api/posts${query}`
    },
    getSinglePost: (slug) => {
        return `${server.URL}/api/posts/${slug}`
    },
    savePost: (slug) => {
        return `${server.URL}/api/posts/${slug}/save`
    },
    getPostComments: (query) => {
        return `${server.URL}/api/comments${query}`
    },
    createNewComment: () => {
        return `${server.URL}/api/comments`
    },
    deleteComment: (query) => {
        return `${server.URL}/api/comments${query}`
    },
    updateComment: (query) => {
        return `${server.URL}/api/comments${query}`
    },
    getUser: () => {
        return `${server.URL}/api/user`
    },
    addReply: (commentId) => {
        return `${server.URL}/api/comments/${commentId}/reply`
    },
    getReplies: (commentId) => {
        return `${server.URL}/api/comments/${commentId}/reply`
    },
    updateReply: (commentId, query) => {
        return `${server.URL}/api/comments/${commentId}/reply${query}`
    },
    deleteReply: (commentId, query) => {
        return `${server.URL}/api/comments/${commentId}/reply${query}`
    }
}

