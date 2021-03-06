import * as React from 'react';
import * as badge from './badge.js';
import * as phone from './phone.js';
import * as formatTableRow from './formatTableRow.js';
import * as formatTableRows from './formatTableRows.js';
declare const defaultMessage: string;
export default defaultMessage;
export declare class Test extends React.Component<any, any> {
    render(): any;
}
export declare const author: string;
export declare const isDarkMode: boolean;
export declare const Badge: (props: badge.PropTypes) => any;
export declare const Phone: (props: phone.PropType) => any;
export declare const FormatTableRows: typeof formatTableRows.default;
export declare const FormatTableRow: typeof formatTableRow.default;
