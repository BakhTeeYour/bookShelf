import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {customLocalStorage} from "../../utils/localStorage";
import {setSelectedBooks} from "../../store/slices/books";

export const CurrentBookPage = () => {
    const {selectedBook} = useAppSelector((state) => state.books);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setSelectedBooks(customLocalStorage.get('currBook')));
    }, []);

    return (
        <div className="flex w-full h-screen">
            <div className='w-1/2 bg-secondary-10  flex items-center justify-center'>
                <p className='absolute underline text-secondary-250 underline-offset-4 cursor-pointer text-xl top-10 left-10'
                   onClick={() => navigate(-1)}>{`< Back to main`}</p>
                <img className='lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]' src={selectedBook?.imageLinks?.thumbnail}
                     alt="logo"/>
            </div>
            <div className='w-1/2 bg-white'>
                <div className='ml-4 flex flex-col gap-5 my-10'>
                    <p className={`underline text-xl underline-offset-4 text-secondary-250 h-[18px]`}>{selectedBook?.categories?.map(e =>
                        <span>{e}</span>)}</p>
                    <p className='text-2xl font-bold'>{selectedBook?.title}</p>
                    <p className='text-secondary-250 text-xl'>{selectedBook?.authors?.map(e => <span
                        className='first:ml-0 ml-1'>{e}</span>)}</p>
                    <div className='border min-h-[200px] mr-4'>
                        <p className='p-5 text-xl overflow-auto h-[640px]'>{selectedBook?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}