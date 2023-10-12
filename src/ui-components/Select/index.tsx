import React, {FC, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import { ISelect } from './Select';
import {If} from "../If";
import {SelectIcon} from "../../icons/SelectIcon";
import {Chevron} from "../../icons/Chevron";
import {useClickOutside} from "../../hooks/useClickOutside";

export const Select: FC<ISelect.IProps> = (
    {
        value: initialValue = '',
        options,
        title,
        placeholder,
        listTitle,
        onSelect = () => {},}) => {

    const [active, setActive] = useState(false);
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (value: string) => {
        setValue(value);
        setActive(false);
    };

    const handleClick = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const ref =  useRef<HTMLDivElement>(null);
    useClickOutside(ref,() => setActive(false))

    const items = options.map((item, index) => (
        <div
            key={index}
            className={classNames(
                value === item.value ? 'bg-primary-100 text-white font-bold hover:bg-primary-200' : 'text-black font-medium hover:bg-secondary-150',
                'w-full py-3.5 px-9 text-sm relative cursor-pointer hover:font-bold transition-all'
            )}
            onClick={() => {
                handleChange(item.value);
                onSelect(item);
            }}
        >
            {item.value}

            <If condition={value === item.uid}>
                <div className="selected-icon flex items-center justify-center w-4 h-4 rounded-full bg-white absolute top-1/2 -translate-y-1/2 right-4">
                    <SelectIcon width={8} color='#3688EA' strokeWidth={2} />
                </div>
            </If>
        </div>
    ));

    return (
        <div className="w-full flex flex-col select-none relative" ref={ref}>
            {title && <h3 className="text-sm font-bold text-primary-100">{title}</h3>}
            <div
                className={classNames(
                    active ? 'border-primary-100' : 'border-secondary-150' ,
                    value ? 'bg-primary-100' : 'bg-secondary-150',
                    "w-full h-[42px] pl-[20px] transition-colors pr-[18px] cursor-pointer border hover:border-primary-100 rounded-7 mt-2 flex items-center justify-between")}
                onClick={handleClick}>
        <span className={classNames(value ? 'text-sm font-semibold text-white' : 'text-sm font-medium text-secondary-900')}>
          {value ? value : placeholder}
        </span>
                <Chevron
                    width={12} color={value ? 'white' : 'black'}
                    className={classNames(!active && 'rotate-180', 'transition-transform duration-200')}
                />
            </div>

            {active && (
                <div className="w-full py-5 shadow-7xl absolute top-[calc(100%+10px)] rounded-7 z-50 bg-white">
                    <p className='text-sm font-semibold px-9 pb-5 mb-2 border-b border-secondary-200'>{ listTitle }</p>
                    {items}
                </div>
            )}
        </div>
    );
};
