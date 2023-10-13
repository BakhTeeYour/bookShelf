import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {customLocalStorage} from "../../utils/localStorage";
import {setSelectedBooks} from "../../store/slices/books";

export const CurrentBookPage = () => {
    const {selectedBook} = useAppSelector((state) => state.books);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleClick = () => {
        navigate(-1);
        dispatch(setSelectedBooks(null));
    }
    useEffect(() => {
        dispatch(setSelectedBooks(customLocalStorage.get('currBook')));
    }, []);

    return (
        <div className="lg:flex w-full h-screen">
            <div className='lg:w-1/2 bg-secondary-10 lg:h-screen  lg:flex lg:items-center lg:justify-center h-1/2'>
                <p className='lg:absolute underline text-secondary-250 ml-2 underline-offset-4 cursor-pointer text-xl lg:top-10 lg:left-10'
                   onClick={handleClick}>{`< Back to main`}</p>
                <img className='lg:w-[600px] mx-auto mt-2 lg:h-[700px] w-[280px] h-[340px]' src={selectedBook?.imageLinks?.thumbnail}
                     alt="logo"/>
            </div>
            <div className='lg:w-1/2 lg:h-screen bg-white h-1/2'>
                <div className='ml-4 flex flex-col gap-5 lg:my-10'>
                    <p className={`underline text-xl underline-offset-4 text-secondary-250 h-[18px] mt-5`}>{selectedBook?.categories?.map((e, i) =>
                        <span key={i}>{e}</span>)}</p>
                    <p className='text-2xl font-bold'>{selectedBook?.title}</p>
                    <p className='text-secondary-250 text-xl'>{selectedBook?.authors?.map((e, i) => <span key={i}
                        className='first:ml-0 ml-1'>{e}</span>)}</p>
                    <div className='border min-h-[200px] mr-4'>
                        <p className='p-5 text-xl lg:overflow-auto lg:h-[640px]'>{selectedBook?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}