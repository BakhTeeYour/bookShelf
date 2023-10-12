import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { IPagination } from './Pagination';
import {PaginationIcon} from "../../icons/PaginationIcon";

export const Pagination: FC<IPagination.IProps> = (
    {itemsCountPerPage = 6, onChange, defaultPage = 1, pageRangeDisplayed = 6}) => {

    const [pageRange, setPageRange] = useState<number[]>();
    const [currentPage, setCurrentPage] = useState<number>(defaultPage);
    const totalPage = Math.ceil(pageRangeDisplayed / itemsCountPerPage);

    useEffect(() => {
        if (totalPage <= 7) {
            setPageRange(Array.from({ length: totalPage }, (_, index) => index + 1));
            return;
        }
        if (currentPage <= 4) {
            setPageRange([1, 2, 3, 4, 5, 0, totalPage]);
            return;
        }
        if (currentPage >= totalPage - 3) {
            setPageRange([
                1,
                0,
                totalPage - 4,
                totalPage - 3,
                totalPage - 2,
                totalPage - 1,
                totalPage,
            ]);
            return;
        }
        else {
            setPageRange([
                1,
                0,
                currentPage - 1,
                currentPage,
                currentPage + 1,
                0,
                totalPage,
            ])
        }
    }, [totalPage, currentPage]);

    return (
        <div className="flex justify-center items-center my-10">
            <button className="w-8 h-8 mr-5 rounded-10 flex items-center justify-center" disabled={currentPage === 1} onClick={() => {
                setCurrentPage(currentPage - 1)
                onChange(currentPage-1)}}>
                <PaginationIcon />
            </button>
            <div className="flex gap-3">
                {pageRange?.map((el, index) => {
                    return (
                        <div onClick={() => {
                            el && setCurrentPage(el);
                            onChange(el)
                        }}
                             className={classNames(
                                 `w-10 h-10 text-2xl ${el && 'cursor-pointer'} transition-colors duration-100 font-semibold rounded-10 flex items-center justify-center`,
                                 currentPage === el ? 'bg-primary-100 text-white' : 'bg-inherit text-dark-100'
                             )}
                             key={index}
                        >
                            {el ? `${el}` : '...'}
                        </div>
                    );
                })}
            </div>
            <button className="w-8 h-8 ml-5 rounded-10 flex items-center justify-center" disabled={currentPage === totalPage} onClick={() => {
                setCurrentPage(currentPage + 1)
                onChange(currentPage+1)}
            }>
                <PaginationIcon className="rotate-180" />
            </button>
        </div>
    );
};
