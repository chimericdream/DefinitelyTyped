// Type definitions for react-bootstrap-table2-paginator 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType, ElementType } from 'react';

export {};

export interface PageButtonRenderProps {
    page: number;
    active: boolean;
    disabled: boolean;
    title: string;
    onPageChange: (page: number) => void;
}

export interface PageListRenderProps {
    pages: Array<string | number>;
    onPageChange: (page: number) => void;
}

export interface SizePerPageRenderProps {
    options: Array<{text: string; page: number}>;
    currSizePerPage: number;
    onSizePerPageChange: (size: number) => void;
}

export interface SizePerPageOptionRenderProps {
    text: string;
    page: number;
    onSizePerPageChange: (size: number) => void;
}

export interface PaginationFactoryProps {
    custom?: boolean;
    page?: number;
    sizePerPage?: number;
    totalSize?: number;
    pageStartIndex?: number;
    paginationSize?: number;
    sizePerPageList?: number[] | Array<{text: string; value: number}>;
    withFirstAndLast?: boolean;
    alwaysShowAllBtns?: boolean;
    firstPageText?: number | string | ElementType;
    prePageText?: number | string | ElementType;
    nextPageText?: number | string | ElementType;
    lastPageText?: number | string | ElementType;
    firstPageTitle?: number | string | ElementType;
    prePageTitle?: number | string | ElementType;
    nextPageTitle?: number | string | ElementType;
    lastPageTitle?: number | string | ElementType;
    hideSizePerPage?: boolean;
    hidePageListOnlyOnePage?: boolean;
    showTotal?: boolean;
    pageButtonRenderer?: (props: PageButtonRenderProps) => ElementType;
    pageListRenderer?: (props: PageListRenderProps) => ElementType;
    sizePerPageRenderer?: (props: SizePerPageRenderProps) => ElementType;
    sizePerPageOptionRenderer?: (props: SizePerPageOptionRenderProps) => ElementType;
    paginationTotalRenderer?: (from: number, to: number, size: number) => ElementType;
    onPageChange?: (page: number, sizePerPage: number) => void;
    onSizePerPageChange?: (page: number, sizePerPage: number) => void;
}

declare function createDataContext(): {
    Provider: ComponentType;
    Consumer: ComponentType;
};

declare function paginationFactory(props?: PaginationFactoryProps): {
    createContext: typeof createDataContext;
    options: PaginationFactoryProps;
};

export default paginationFactory;
