import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CurrentBookPage} from "./components/CurrentBookPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/book',
        element: <CurrentBookPage/>
    }
])

root.render(
    <Provider store={store()}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>
);
reportWebVitals();
