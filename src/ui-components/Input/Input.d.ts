import {KeyboardEvent} from "react";

export declare namespace IInput {
    interface IProps {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
        onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
        onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void
        placeholder?: string;
        type?: string;
        disabled?: boolean;
        readOnly?: boolean;
        pending?: boolean;
        error?: boolean;
        errorText?:string
        lengthLimit?: number;
        name?: string;
        title? : string;
        className?: string;
        primary?: boolean;
        isSearchIcon?: boolean;
        onClick?: () => void
    }}