import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import Books from "./slices/books";
import thunk from 'redux-thunk';


const store = () =>
    configureStore({
        reducer: {
            books: Books,
        },
        middleware: [thunk],
        devTools: true
    });

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export default store;