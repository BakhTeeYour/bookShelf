import {useAppDispatch, useAppSelector} from "../../store/hooks";
import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {getBooks} from "../../services/books";
import {Input} from "../../ui-components/Input";
import {Select} from "../../ui-components/Select";
import {categories, sortBy} from "../../consts/selectOptions";
import {BooksCard} from "../../components/BooksCard";
import {customLocalStorage} from "../../utils/localStorage";
import {If} from "../../ui-components/If";
import {LoaderIcon} from "../../icons/loader";

export const MainPage = () => {
    const {loading, books} = useAppSelector((state) => state.books);

    const [booksName, setBooksName] = useState('');
    const [category, setCategory] = useState('+category:');
    const [sort, setSort] = useState('relevance');

    const [searchParams, setSearchParams] = useSearchParams();
    const [currIndex, setCurrIndex] = useState(searchParams.get('currPage') || '0');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        !books && dispatch(getBooks(booksName, sort, category, '0'));
    }, [sort, category]);

    useEffect(() => {
        setSearchParams({currPage: currIndex!});
    }, [currIndex]);


    const handleLoadMore = () => {
        setCurrIndex(prev => `${+prev! + 30}`);
        console.log(currIndex)
        dispatch(getBooks(booksName, sort, category, `${+currIndex + 30}`, books!));
    };
    const handleClickByEnter = (event: React.KeyboardEvent<HTMLElement>) => {
        event.key === 'Enter' && dispatch(getBooks(booksName, sort, category, '0'));
    };
    const handleClick = () => {
        dispatch(getBooks(booksName, sort, category, '0'));
    };
    return (
        <div className="flex flex-col items-center mt-12 h-screen">
            <div className='flex flex-col items-center gap-5'>
                <p className='text-5xl font-bold text-white'>Search for books</p>
                <Input value={booksName}
                       onChange={(ev) => setBooksName(ev.target.value)}
                       placeholder='Enter books name'
                       isSearchIcon={true}
                       onKeyDown={handleClickByEnter}
                       onClick={handleClick}/>
                <div className='flex gap-5 w-full'>
                    <Select listTitle='Select a category'
                            placeholder='Category'
                            options={categories}
                            onSelect={(selectedItem) => setCategory(selectedItem.uid)}/>
                    <Select listTitle='Select sorting'
                            placeholder='Sorting by'
                            options={sortBy}
                            onSelect={(selectedItem) => setSort(selectedItem.uid)}/>
                </div>
            </div>
            <main className='w-full bg-white my-10 flex flex-col gap-3 h-screen'>
                <p className='text-xl w-full text-center mt-2'>Found {books?.totalItems} results</p>
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    {books?.items?.map((items, index) => (
                        <BooksCard
                            key={index}
                            categories={items.volumeInfo.categories && items.volumeInfo.categories[0]}
                            img={items.volumeInfo.imageLinks?.thumbnail!}
                            title={items.volumeInfo.title}
                            authors={items.volumeInfo.authors}
                            onClick={() => {
                                navigate('/book')
                                customLocalStorage.set('currBook', items.volumeInfo)
                            }}/>
                    ))}
                </div>
                <If condition={loading}><LoaderIcon/></If>
                <If condition={!loading}>
                    <button className='py-3 mt-5 px-10 mx-auto text-white rounded-xl bg-primary-100'
                            onClick={handleLoadMore}>Load more
                    </button>
                    <br/>
                </If>
            </main>
        </div>
    );

}