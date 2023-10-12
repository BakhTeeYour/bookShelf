export const SearchIcon = ({strokeWidth = 1, color = '#9CABC2', width = 25, height = 25}: any) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6.58847 13.1769C3.46968 13.1769 0.941406 10.6487 0.941406 7.52987C0.941406 4.41109 3.46968 1.88281 6.58847 1.88281C9.70725 1.88281 12.2355 4.41109 12.2355 7.52987C12.2355 10.6487 9.70725 13.1769 6.58847 13.1769Z"
                  stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M11.3484 11.6416L10.99 11.293L10.2927 12.0098L10.6511 12.3584L11.3484 11.6416ZM12.8276 14.4756C13.0256 14.6681 13.3421 14.6638 13.5347 14.4658C13.7272 14.2679 13.7228 13.9513 13.5249 13.7588L12.8276 14.4756ZM10.6511 12.3584L12.8276 14.4756L13.5249 13.7588L11.3484 11.6416L10.6511 12.3584Z"
                fill={color}/>
        </svg>
    );
};
