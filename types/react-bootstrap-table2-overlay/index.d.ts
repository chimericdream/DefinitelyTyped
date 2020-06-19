// Type definitions for react-bootstrap-table2-overlay 2.0
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Bill Parrott <https://github.com/chimericdream>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, CSSProperties, ElementType } from 'react';

export {};

// @TODO: move these into @types/react-loading-overlay

export interface LoadingOverlayProps {
    active?: boolean;
    fadeSpeed?: number;
    onClick?: () => {};
    className?: string;
    classNamePrefix?: string;
    spinner?: boolean | ElementType;
    text?: ElementType;
    styles?: {
        content?: string | ((base: CSSProperties, props: LoadingOverlayProps) => string);
        overlay?: string | ((base: CSSProperties, props: LoadingOverlayProps) => string);
        spinner?: string | ((base: CSSProperties, props: LoadingOverlayProps) => string);
        wrapper?: string | ((base: CSSProperties, props: LoadingOverlayProps) => string);
    };
}

declare function overlayFactory(options?: LoadingOverlayProps): (loading: boolean) => Component;

export default overlayFactory;
