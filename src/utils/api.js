export const server = {
    URL: {
        local: "http://localhost:3000"
    }
}

export const api = {
    categories: (params, query) => {
        return `${server.URL.local}/api/categories`
    },
    posts: (params, query) => {
        return `${server.URL.local}/api/posts`
    },
}

