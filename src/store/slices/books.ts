import {createSlice} from "@reduxjs/toolkit";

interface IBooksSlice {
    loading: boolean;
    error: string | null;
    books: IBooks.IBook | null;
    selectedBook: IBooks.VolumeInfo | null;
    params: {
        category: string,
        sortingBy: string,
    }
}

const initialState: IBooksSlice = {
    loading: false,
    error: null,
    books: null,
    selectedBook: null,
    params: {category: '+category:', sortingBy: 'relevance'}
};

const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        startFetchingBooks: (state) => {
            state.loading = true;
        },
        stopFetchingBooks: (state) => {
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setSelectedBooks: (state, action) => {
            state.selectedBook = action.payload
        },
        setParams: (state, action) => {
            state.params[action.payload.params as keyof typeof initialState.params] = action.payload.data
        },
    },
});

export const {startFetchingBooks, stopFetchingBooks, setBooks, setError, setSelectedBooks, setParams} = BooksSlice.actions;
export default BooksSlice.reducer;