// Type definitions for react-bootstrap-table2-editor 1.4
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { BootstrapTableColumn } from 'react-bootstrap-table-next';

export {};

export enum Type {
    TEXT = 'text',
    SELECT = 'select',
    TEXTAREA = 'textarea',
    CHECKBOX = 'checkbox',
    DATE = 'date'
}

export interface CheckboxEditorProps {
    value?: string;
}

export interface DropdownEditorOption {
    label: string;
    value: string | number;
}

export interface DropdownEditorProps {
    options?: DropdownEditorOption[];
    getOptions?: (() => DropdownEditorOption[]) | ((setOptions: (opts: DropdownEditorOption[]) => void) => void);
}

export type EditorProps = ({type: Type.CHECKBOX} & CheckboxEditorProps)
    | ({type: Type.SELECT} & DropdownEditorProps)
    | {type: Omit<Type, Type.CHECKBOX | Type.SELECT>};

export interface CustomRenderer extends React.Component {
    getValue: () => string | number;
}

export type EditorRenderer<T> = (
    editorProps: {
        onUpdate: (value: any) => void;
        [key: string]: any;
    },
    value: any,
    row: T,
    column: BootstrapTableColumn<T>,
    rowIndex: number,
    columnIndex: number
) => CustomRenderer;

export interface CellEditFactoryProps<T> {
    mode: 'click' | 'dblclick';
    blurToSave?: boolean;
    nonEditableRows?: () => number[];
    timeToCloseMessage?: number;
    autoSelectText?: boolean;
    beforeSaveCell?: (oldValue: any, newValue: any, row: T, column: BootstrapTableColumn<T>) => void
        | ((oldValue: any, newValue: any, row: T, column: BootstrapTableColumn<T>, done: (success?: boolean) => void) => {async: true});
    afterSaveCell?: (oldValue: any, newValue: any, row: T, column: BootstrapTableColumn<T>) => void;
    onStartEdit?: (row: T, column: BootstrapTableColumn<T>, rowIndex: number, columnIndex: number) => void;
    errorMessage?: string;
    onErrorMessageDisappear?: () => void;
}

declare function cellEditFactory<T>(options: CellEditFactoryProps<T>): void;

export default cellEditFactory;
