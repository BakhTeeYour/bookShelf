import React from 'react'

export const SelectIcon = ({width = 13, color='black', strokeWidth=1.5}) => {
    return (
        <svg width={width} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.6665 4.96019L5.18236 8.47605L12.2265 1.44434" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
