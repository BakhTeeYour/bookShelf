import { FC, ReactNode } from 'react';
import { IIf } from './If'

export const If: FC<IIf.IProps> = ({ condition, children, anotherChildren = null }) => {
    return <>{condition ? children : anotherChildren}</>;
};
