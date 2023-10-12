import { FC } from 'react';
import {IIconsProps} from "../intefaces/icons";


export const PaginationIcon: FC<IIconsProps> = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.0664 5.43994L11.373 14.1333C10.3464 15.1599 10.3464 16.8399 11.373 17.8666L20.0664 26.5599"
            stroke="#232329"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
