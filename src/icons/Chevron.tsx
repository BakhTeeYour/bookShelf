import { FC } from 'react';

interface IChevronProps {
    className?: string;
    width?: number;
    color?: string;
}
export const Chevron: FC<IChevronProps> = ({ className, width=18, color='black' }) => (
    <svg
        width={width}
        viewBox="0 0 18 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M16.9201 8.04989L10.4001 1.52989C9.63008 0.759893 8.37008 0.759893 7.60008 1.52989L1.08008 8.04989"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
