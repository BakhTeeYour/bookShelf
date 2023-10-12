import {createSlice} from "@reduxjs/toolkit";

interface IBooksSlice {
    loading:  boolean;
    error: string | null;
    books: IBooks.IBook | null;
    selectedBook: IBooks.VolumeInfo | null
}

const initialState: IBooksSlice = {
    loading: false,
    error: null,
    books: null,
    selectedBook: null,
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
    },
});

export const  {startFetchingBooks, stopFetchingBooks, setBooks, setError, setSelectedBooks} = BooksSlice.actions;
export  default BooksSlice.reducer;