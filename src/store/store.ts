import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import Books from "./slices/books";



const store = () =>
    configureStore({
        reducer: {
            books: Books,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true
    });

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export default store;