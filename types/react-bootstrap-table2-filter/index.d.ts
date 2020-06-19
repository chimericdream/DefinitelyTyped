// Type definitions for react-bootstrap-table2-filter 1.3
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, CSSProperties } from 'react';
import { BootstrapTableColumn } from 'react-bootstrap-table-next';

export {};

export enum FILTER_TYPES {
    TEXT = 'TEXT',
    SELECT = 'SELECT',
    MULTISELECT = 'MULTISELECT',
    NUMBER = 'NUMBER',
    DATE = 'DATE'
}

export enum Comparator {
    LIKE = 'LIKE',
    EQ = '=',
    NE = '!=',
    GT = '>',
    GE = '>=',
    LT = '<',
    LE = '<='
}

export interface FilterProps<T> {
    id?: string;
    className?: string;
    defaultValue?: T;
    placeholder?: string;
    comparator?: Comparator;
    style?: CSSProperties;
    getFilter?: (filterFunc: (filterVal: T) => void) => void;
    onFilter?: (filterVal: T) => void;
}

interface SelectOption {
    value: number | string;
    label: string;
}

export interface CustomFilterProps<T> {
    type?: FILTER_TYPES;
    comparator?: Comparator;
    caseSensitive?: boolean;
}

export interface DateFilterProps<T> extends Omit<FilterProps<{date: Date; comparator: Comparator}>, 'comparator'> {
    delay?: number;
    withoutEmptyComparatorOption?: boolean;
    comparators?: Comparator[];
    comparatorClassName?: string;
    comparatorStyle?: CSSProperties;
    dateStyle?: CSSProperties;
}

export interface MultiSelectFilterProps<T> extends FilterProps<string[] | number[]> {
    options: {[key: string]: string} | {[key: number]: string};
    withoutEmptyOption?: boolean;
}

export interface NumberFilterProps<T> extends Omit<FilterProps<{number: number; comparator: Comparator}>, 'comparator'> {
    options?: number[];
    delay?: number;
    withoutEmptyComparatorOption?: boolean;
    withoutEmptyNumberOption?: boolean;
    comparators?: Comparator[];
}

export interface SelectFilterProps<T> extends FilterProps<number | string> {
    options: {[key: string]: string}
        | {[key: number]: string}
        | SelectOption[]
        | ((column: BootstrapTableColumn<T>) => SelectOption[]);
}

export interface TextFilterProps<T> extends FilterProps<number | string> {
    caseSensitive?: boolean;
    delay?: number;
}

export function customFilter<T>(props?: CustomFilterProps<T>): ({props: CustomFilterProps<T>});
export function dateFilter<T>(props?: DateFilterProps<T>): ({Filter: Component, props: DateFilterProps<T>});
export function multiSelectFilter<T>(props?: MultiSelectFilterProps<T>): ({Filter: Component, props: MultiSelectFilterProps<T>});
export function numberFilter<T>(props?: NumberFilterProps<T>): ({Filter: Component, props: NumberFilterProps<T>});
export function selectFilter<T>(props?: SelectFilterProps<T>): ({Filter: Component, props: SelectFilterProps<T>});
export function textFilter<T>(props?: TextFilterProps<T>): ({Filter: Component, props: TextFilterProps<T>});

export type Filter = typeof customFilter
    | typeof dateFilter
    | typeof multiSelectFilter
    | typeof numberFilter
    | typeof selectFilter
    | typeof textFilter;

export function filterFactory(opts?: unknown): ({
    createContext: unknown;
    options: unknown;
});

export default filterFactory;
