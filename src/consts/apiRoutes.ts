export const apiRoutes = {
    getBooks: (q: string, category: string) => `https://www.googleapis.com/books/v1/volumes?q=${q+category}`
}