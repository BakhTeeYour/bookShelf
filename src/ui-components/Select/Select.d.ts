export declare namespace ISelect {
    interface IOption {
        uid: string;
        value: string;
    }

    export interface IProps {
        name?: string;
        value?: string;
        options: IOption[];
        onSelect?: (value: any) => void;
        className?: string;
        disabled?: boolean;
        placeholder?: string;
        title?: string;
        listTitle?:string;
    }
}