// Type definitions for react-bootstrap-table2-toolkit 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType, ReactNode } from 'react';
import { BootstrapTableColumn } from 'react-bootstrap-table-next';

export {};

export interface ToolkitProviderProps<T> {
    keyField: string;
    data: T[];
    columns: Array<BootstrapTableColumn<T>>;
    children: ReactNode;
    bootstrap4?: boolean;
    search?: false | {
        defaultSearch?: string;
        searchFormatted?: boolean;
    };
    exportCSV?: false | {
        fileName?: string;
        separator?: string;
        ignoreHeader?: boolean;
        ignoreFooter?: boolean;
        noAutoBOM?: boolean;
        blobType?: string;
        exportAll?: boolean;
        onlyExportFiltered?: boolean;
        onlyExportSelection?: boolean;
    };
}

interface ToolkitProvider<T> {
    Provider: ComponentType<ToolkitProviderProps<T>>;
    Consumer: ComponentType;
}

declare const DefaultProvider: ToolkitProvider<unknown>;

export default DefaultProvider;
