import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { IInput } from './Input';
import {If} from "../If";
import {SearchIcon} from "../../icons/SearchIcon";


const labelStyles = {
    default: 'text-xs font-medium leading-1 text-secondary-900 mb-2',
    primary: 'text-sm font-bold text-primary-100 mb-2'
}

export const Input: FC<IInput.IProps> = ({
                                             value,
                                             error = false,
                                             errorText,
                                             placeholder = '',
                                             onChange = () => {},
                                             onBlur = () => {},
                                             onFocus = () => {},
                                             lengthLimit = 0,
                                             name,
                                             title = '',
                                             type='text',
                                             className = '',
                                             primary = false,
                                             onKeyDown,
                                             isSearchIcon = false,
                                             onClick = () => {}
                                         }) => {
    const [active, setActive] = useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setActive(false);
        onBlur(event);
    };
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setActive(true);
        onFocus(event);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <div className="flex flex-col w-full">
            {title && <h3 className={primary ? labelStyles.primary : labelStyles.default}>{title}</h3>}
            <div className={classNames(className,
                `flex items-center bg-secondary-150 text-xs font-medium rounded-xl border ${active ? 'border-primary-100' : 'border-secondary-150'} `,
                error && 'border-1 border-danger-200 bg-red-50')}
                 onFocus={handleFocus}>
                <input
                    type={type}
                    className='w-full bg-secondary-150 outline-none px-5 py-3 font-sans text-sm rounded-xl border border-secondary-150 transition-colors'
                    value={value}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    onBlur={handleBlur}
                    name={name}
                    maxLength={lengthLimit ? lengthLimit : undefined}
                    placeholder={placeholder}
                />
                {isSearchIcon && <span onClick={onClick}
                                       className="mr-5 hover:text-xl cursor-pointer"><SearchIcon/></span>}
            </div>
            <If condition={!!errorText}>
                <p className='text-sm text-red-500 mt-1 font-medium'>{ errorText }</p>
            </If>
        </div>
    );
};
