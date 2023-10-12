import {FC} from "react";

interface Interface {
    categories: string;
    img: string;
    title: string;
    authors: string[];
    onClick: () => void;
}

export const BooksCard: FC<Interface> = ({categories, img, authors, title,  onClick}) => {
    return (
        <div className='flex flex-col p-3 gap-5 bg-secondary-10 w-[350px] h-[576px] cursor-pointer' onClick={onClick}>
            <div className='mx-auto mt-8'>
                <img className='w-[250px] h-[300px]' src={img && img} alt="imgLogo"/>
            </div>
            <div className='ml-4 flex flex-col gap-3 mb-10'>
                <p className={`underline underline-offset-4 text-secondary-250 h-[18px]`}>{categories}</p>
                <p className='text-xl font-bold'>{title?.length > 64 ? title.slice(0, 60) + '...' : title}</p>
                <p className='text-secondary-250'>{authors?.map(e  => <span key={e} className='first:ml-0 ml-1'>{e}</span>)}</p>
            </div>
        </div>
    )
}