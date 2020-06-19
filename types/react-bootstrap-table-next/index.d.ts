// Type definitions for react-bootstrap-table-next 3.3
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ComponentType, HTMLAttributes, MouseEvent, CSSProperties, PropsWithChildren } from 'react';
import cellEditFactory, { EditorProps, EditorRenderer } from 'react-bootstrap-table2-editor';
import filterFactory, { Comparator, Filter, FILTER_TYPES } from 'react-bootstrap-table2-filter';
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';

export {};

export interface RowSelectionRenderer {
    mode: RowSelectionProps<any>['mode'];
    checked: boolean;
    disabled: boolean;
}

export interface HeaderSelectionRenderer {
    mode: RowSelectionProps<any>['mode'];
    checked: boolean;
    indeterminate: boolean;
}

export interface RowSelectionProps<T> {
    mode: 'radio' | 'checkbox';
    selected?: number[];
    style?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
    classes?: string | ((row: T, rowIndex: number) => string);
    bgColor?: string | ((row: T, rowIndex: number) => string);
    nonSelectable?: number[];
    nonSelectableStyle?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
    nonSelectableClasses?: string | ((row: T, rowIndex: number) => string);
    clickToSelect?: boolean;
    clickToExpand?: boolean;
    clickToEdit?: boolean;
    onSelect?: (row: T, isSelect: boolean, rowIndex: number, e: Event) => void;
    onSelectAll?: (isSelect: boolean, rows: T[], e: Event) => undefined | number[];
    selectColumnPosition?: 'left' | 'right';
    hideSelectColumn?: boolean;
    hideSelectAll?: boolean;
    selectionRenderer?: ComponentType<RowSelectionRenderer>;
    selectionHeaderRenderer?: ComponentType<HeaderSelectionRenderer>;
    headerColumnStyle?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
    selectColumnStyle?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
}

interface SelectionContextProps<T> extends PropsWithChildren<any> {
    data: BootstrapTableProps<T>['data'];
    keyField: BootstrapTableProps<T>['keyField'];
}

export interface SelectionContextProvider<T> extends Component<SelectionContextProps<T>> {
    selected: number[];
    getSelected(): number[];
}

export interface ExpandColumnRenderer {
    expanded: boolean;
    rowKey: number;
    expandable: boolean;
}

export interface ExpandHeaderColumnRenderer {
    isAnyExpands: boolean;
}

export interface RowExpandProps<T> {
    renderer: (row: T, rowIndex: number) => string | JSX.Element | ComponentType;
    expanded?: number[];
    nonExpandable?: number[];
    onExpand?: (row: T, isExpand: boolean, rowIndex: number, e: Event) => void;
    onExpandAll?: (isExpandAll: boolean, results: T[], e: Event) => void;
    showExpandColumn?: boolean;
    onlyOneExpanding?: boolean;
    expandByColumnOnly?: boolean;
    expandColumnPosition?: 'left' | 'right';
    expandColumnRenderer?: ComponentType<ExpandColumnRenderer>;
    expandHeaderColumnRenderer?: ComponentType<ExpandHeaderColumnRenderer>;
    className?: string | ((isExpanded: boolean, row: T, rowIndex: number) => string);
    parentClassName?: string | ((isExpanded: boolean, row: T, rowIndex: number) => string);
}

interface RowExpandContextProps<T> extends PropsWithChildren<any> {
    data: BootstrapTableProps<T>['data'];
    keyField: BootstrapTableProps<T>['keyField'];
}

interface RowExpandContextState {
    expanded: number[];
    isClosing: number[];
}

export interface RowExpandContextProvider<T> extends Component<RowExpandContextProps<T>, RowExpandContextState> {}

interface SortContextProps<T> extends PropsWithChildren<any> {
    data: BootstrapTableProps<T>['data'];
    columns: BootstrapTableProps<T>['columns'];
    defaultSorted: BootstrapTableProps<T>['defaultSorted'];
    sort: BootstrapTableProps<T>['sort'];
    defaultSortDirection: BootstrapTableProps<T>['defaultSortDirection'];
}

interface SortContextState<T> {
    sortOrder: 'asc' | 'desc';
    sortColumn: keyof T;
}

export interface SortContextProvider<T> extends Component<SortContextProps<T>, SortContextState<T>> {}

export interface BootstrapTableColumn<T, U extends unknown = never> {
    dataField: keyof T;
    text: string;
    isDummyField?: boolean;
    hidden?: boolean;
    formatter?: (cell: any, row: T, rowIndex: number, formatExtraData: U) => string | JSX.Element;
    headerFormatter?: (
        column: BootstrapTableColumn<T>,
        colIndex: number,
        components: {sortElement: string | JSX.Element; filterElement: string | JSX.Element}
    ) => string | JSX.Element;
    formatExtraData?: U;
    sort?: boolean;
    sortValue?: (cell: any, row: T) => any;
    sortFunc?: (cellA: any, cellB: any, order: 'asc' | 'desc', dataField: string, rowA: T, rowB: T) => number;
    sortCaret?: (order: 'asc' | 'desc' | undefined, column: BootstrapTableColumn<T>) => string | JSX.Element;
    onSort?: (field: keyof T, order: 'asc' | 'desc' | undefined) => void;
    classes?: string | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    headerClasses?: string | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    style?: CSSProperties | ((cell: any, row: T, rowIndex: number, colIndex: number) => CSSProperties);
    headerStyle?: CSSProperties | ((column: BootstrapTableColumn<T>, colIndex: number) => CSSProperties);
    title?: boolean | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    headerTitle?: boolean | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    align?: string | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    headerAlign?: string | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    events?: {
        onClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number, row: T, rowIndex: number) => void;
        onDoubleClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number, row: T, rowIndex: number) => void;
        onMouseEnter?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number, row: T, rowIndex: number) => void;
        onMouseLeave?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number, row: T, rowIndex: number) => void;
        onContextMenu?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number, row: T, rowIndex: number) => void;
    };
    headerEvents?: {
        onClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onDoubleClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onMouseEnter?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onMouseLeave?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onContextMenu?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
    };
    attrs?: HTMLAttributes<HTMLTableDataCellElement> | ((cell: any, row: T, rowIndex: number, colIndex: number) => HTMLAttributes<HTMLTableDataCellElement>);
    headerAttrs?: HTMLAttributes<HTMLTableHeaderCellElement> | ((column: BootstrapTableColumn<T>, colIndex: number) => HTMLAttributes<HTMLTableHeaderCellElement>);
    headerSortingClasses?: string | ((column: BootstrapTableColumn<T>, sortOrder: 'asc' | 'desc' | undefined, isLastSorting: boolean, colIndex: number) => string);
    headerSortingStyle?: CSSProperties | ((column: BootstrapTableColumn<T>, sortOrder: 'asc' | 'desc' | undefined, isLastSorting: boolean, colIndex: number) => CSSProperties);
    footer?: string | ((columnData: any[], column: BootstrapTableColumn<T>, columnIndex: number) => string);
    footerFormatter?: (column: BootstrapTableColumn<T>, colIndex: number) => string | JSX.Element;
    footerClasses?: string | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    footerStyle?: CSSProperties | ((column: BootstrapTableColumn<T>, colIndex: number) => CSSProperties);
    footerTitle?: boolean | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    footerEvents?: {
        onClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onDoubleClick?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onMouseEnter?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onMouseLeave?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
        onContextMenu?: (e: MouseEvent, column: BootstrapTableColumn<T>, columnIndex: number) => void;
    };
    footerAlign?: string | ((column: BootstrapTableColumn<T>, colIndex: number) => string);
    footerAttrs?: HTMLAttributes<HTMLTableHeaderCellElement> | ((column: BootstrapTableColumn<T>, colIndex: number) => HTMLAttributes<HTMLTableHeaderCellElement>);
    editable?: boolean | ((cell: any, row: T, rowIndex: number, colIndex: number) => boolean);
    validator?: ((newValue: any, row: T, column: BootstrapTableColumn<T>) => true | {valid: false; message: string})
        | ((newValue: any, row: T, column: BootstrapTableColumn<T>, done: (failure?: {valid: false; message: string}) => void) => {async: true});

    // -- Begin dependencies on editor
    editCellStyle?: CSSProperties | ((cell: any, row: T, rowIndex: number, colIndex: number) => CSSProperties);
    editCellClasses?: string | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    editorCellStyle?: CSSProperties | ((cell: any, row: T, rowIndex: number, colIndex: number) => CSSProperties);
    editorClasses?: string | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    editor?: EditorProps;
    editorRenderer?: EditorRenderer<T>;
    // -- End dependencies on editor

    // -- Begin dependencies on filter
    filter?: Filter;
    filterValue?: any;
    // -- End dependencies on filter

    searchable?: boolean;
    csvType?: typeof String | typeof Number;
    csvFormatter?: (cell: any, row: T, rowIndex: number, formatExtraData: U) => string | JSX.Element;
    csvText?: string;
    csvExport?: boolean;
}

export interface BootstrapTableProps<T> {
    columns: Array<BootstrapTableColumn<T>>;
    data: T[];
    keyField: keyof T;
    remote?: boolean | {
        filter?: boolean;
        pagination?: boolean;
        sort?: boolean;
        cellEdit?: boolean;
    };
    bootstrap4?: boolean;
    noDataIndication?: string | JSX.Element | ComponentType;
    loading?: boolean;
    overlay?: ReturnType<typeof overlayFactory>;
    caption?: string | JSX.Element;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
    id?: string;
    tabIndexCell?: boolean;
    classes?: string;
    wrapperClasses?: string;
    headerClasses?: string;
    headerWrapperClasses?: string;
    bodyClasses?: string;
    cellEdit?: ReturnType<typeof cellEditFactory>;
    // @TODO: get this from select row props
    selectRow?: RowSelectionProps<T>;
    rowStyle?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
    rowClasses?: string | ((row: T, rowIndex: number) => string);
    rowEvents?: {
        [key: string]: (e: Event, row: T, rowIndex: number) => void;
    };
    hiddenRows?: ReadonlyArray<number>;
    sort?: {
        dataField?: string;
        order?: 'asc' | 'desc';
        sortCaret?: (order: 'asc' | 'desc' | undefined, column: BootstrapTableColumn<T>) => string | JSX.Element;
        sortFunc?: (cellA: any, cellB: any, order: 'asc' | 'desc', dataField: string, rowA: T, rowB: T) => number;
    };
    defaultSorted?: ReadonlyArray<{
        dataField: string;
        order: 'asc' | 'desc';
    }>;
    defaultSortDirection?: 'asc' | 'desc';
    pagination?: ReturnType<typeof paginationFactory>;
    filter?: ReturnType<typeof filterFactory>;
    filterPosition?: 'inline' | 'top' | 'bottom';
    onTableChange?: (
        type: 'filter' | 'pagination' | 'sort' | 'cellEdit',
        newState: {
            page: number;
            sizePerPage: number;
            sortField: string;
            sortOrder: 'asc' | 'desc' | undefined;
            filters: {
                [key: string]: {
                    filterVal: any;
                    filterType: FILTER_TYPES;
                    comparator: Comparator;
                };
            };
            data: T[];
            cellEdit?: {
                rowId: number;
                dataField: string;
                newValue: any;
            };
        }
    ) => void;
    onDataSizeChange?: (arg0: {dataSize: number}) => void;
    expandRow?: RowExpandProps<T>;
}

declare class BootstrapTable<T = any> extends Component<BootstrapTableProps<T>> {
    selectionContext: SelectionContextProvider<T>;
    rowExpandContext: RowExpandContextProvider<T>;
    // @TODO
    paginationContext: any;
    sortContext: SortContextProvider<T>;
    // @TODO
    searchContext: any;
    // @TODO
    filterContext: any;
    // @TODO
    cellEditContext: any;
    table: Omit<BootstrapTable, 'selectionContext' | 'rowExpandContext' | 'paginationContext' | 'sortContext' | 'searchContext' | 'filterContext' | 'cellEditContext' | 'table'>;
}

export default BootstrapTable;
