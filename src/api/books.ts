import axios from "axios";
import {apiRoutes} from "../consts/apiRoutes";

const key = 'AIzaSyDnZd5JbaNW34J_ZZkGkq_bCbkAoY2cBn4'

const getBooks = (q: string, orderBy: string, filter: string, startIndex: string) => axios.get(apiRoutes.getBooks(q, filter), {
    params: {orderBy, key, startIndex}
});

export const booksApi = {
    getBooks,
};