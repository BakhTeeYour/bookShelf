import {setBooks, setError, startFetchingBooks, stopFetchingBooks} from "../store/slices/books";
import {booksApi} from "../api/books";
import {AppDispatch, AppThunk} from "../store/store";


export const getBooks = (search: string, sortBy: string, filter: string, startIndex: string, books?: IBooks.IBook): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(startFetchingBooks());
        const {data}: { data: IBooks.IBook } = await booksApi.getBooks(search, sortBy, filter, startIndex);
        if (Number(startIndex) > 0) {
            dispatch(setBooks({...books, totalItems: data.totalItems, items: [...books?.items!, ...data.items]}));
            return;
        }
       dispatch(setBooks(data));
    } catch (e) {
        dispatch(setError('Error'))
    } finally {
        dispatch(stopFetchingBooks())
    }
};