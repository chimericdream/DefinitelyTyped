import * as React from 'react';
import BootstrapTable, { BootstrapTableColumn, BootstrapTableProps, RowExpandProps } from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

interface BarData {
    prop1: string;
    prop2: string;
}

interface SampleData {
    id: string;
    foo: number;
    bar: BarData;
    baz: string;
}

interface Product {
    id: number;
    text: string;
    price: number;
}

const NoDataIndicator: React.FC = () => (<span>No data</span>);

const CaptionElement: React.FC = () => (<h3 style={{borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em'}}>Component as Header</h3>);

const SampleDataTable: React.FC = () => {
    const badColumns: Array<BootstrapTableColumn<SampleData>> = [
        {
            // $ExpectError
            dataField: 'bad-field',
            text: 'Bad',
        },
        {
            dataField: 'id',
            text: 'ID',
        },
        {
            dataField: 'foo',
            text: 'Foo Field',
            // $ExpectError
            badProp: 'Also bad',
        },
        {
            dataField: 'bar',
            text: 'Bar!',
            formatter: (cell: BarData) => (<span>${cell.prop1}-${cell.prop2}</span>),
        },
        {
            dataField: 'baz',
            text: 'Baz',
            align: (cell, row, rowIndex, colIndex) => 'center',
        },
    ];

    const products: Product[] = [
        {
            id: 1,
            text: 'Product 1',
            price: 100,
        },
        {
            id: 2,
            text: 'Product 2',
            price: 200,
        },
        {
            id: 3,
            text: 'Product 3',
            price: 300,
        },
        {
            id: 4,
            text: 'Product 4',
            price: 400,
        },
        {
            id: 5,
            text: 'Product 5',
            price: 500,
        },
    ];
    const columns: Array<BootstrapTableColumn<Product>> = [
        {
            dataField: 'id',
            text: 'Product ID',
        },
        {
            dataField: 'text',
            text: 'Product Name',
        },
        {
            dataField: 'price',
            text: 'Product Price',
        },
    ];

    return (
        <React.Fragment>
            <BootstrapTable keyField="id" columns={columns} data={products} />
            <BootstrapTable keyField="id" columns={columns} data={products} />
            <BootstrapTable keyField="id" columns={columns} data={products} striped hover condensed />
            <BootstrapTable keyField="id" columns={columns} data={products} bordered={false} />
            <BootstrapTable keyField="id" columns={columns} data={[]} noDataIndication="Table is Empty" />
            <BootstrapTable keyField="id" columns={columns} data={[]} noDataIndication={NoDataIndicator} />
            <BootstrapTable id="bar" keyField="id" data={products} columns={columns} />
            <BootstrapTable classes="foo" keyField="id" data={products} columns={columns} />
            <BootstrapTable headerWrapperClasses="foo" keyField="id" data={products} columns={columns} />
            <BootstrapTable bodyClasses="foo" keyField="id" data={products} columns={columns} />
            <BootstrapTable wrapperClasses="boo" keyField="id" data={products} columns={columns} />
            <BootstrapTable keyField="id" data={products} columns={columns} caption="Plain text header" />
            <BootstrapTable keyField="id" data={products} columns={columns} caption={(<CaptionElement />)} />
        </React.Fragment>
    );
};

class ExposedApiTable extends React.Component {
    node: BootstrapTable;

    handleGetCurrentData = () => {
        console.log(this.node.table.props.data);
    }

    handleGetSelectedData = () => {
        console.log(this.node.selectionContext.selected);
    }

    handleGetExpandedData = () => {
        console.log(this.node.rowExpandContext.expanded);
    }

    handleGetCurrentPage = () => {
        console.log(this.node.paginationContext.currPage);
    }

    handleGetCurrentSizePerPage = () => {
        console.log(this.node.paginationContext.currSizePerPage);
    }

    handleGetCurrentSortColumn = () => {
        console.log(this.node.sortContext.state.sortColumn);
    }

    handleGetCurrentSortOrder = () => {
        console.log(this.node.sortContext.state.sortOrder);
    }

    handleGetCurrentFilter = () => {
        console.log(this.node.filterContext.currFilters);
    }

    render() {
        const products: Product[] = [
            {
                id: 1,
                text: 'Product 1',
                price: 100,
            },
            {
                id: 2,
                text: 'Product 2',
                price: 200,
            },
            {
                id: 3,
                text: 'Product 3',
                price: 300,
            },
            {
                id: 4,
                text: 'Product 4',
                price: 400,
            },
            {
                id: 5,
                text: 'Product 5',
                price: 500,
            },
        ];
        const columns: Array<BootstrapTableColumn<Product>> = [
            {
                dataField: 'id',
                text: 'Product ID',
            },
            {
                dataField: 'text',
                text: 'Product Name',
            },
            {
                dataField: 'price',
                text: 'Product Price',
            },
        ];

        const expandRow: RowExpandProps<Product> = {
            renderer: row => (
                <div>
                    <p>.....</p>
                    <p>You can render anything here, also you can add additional data on every row object</p>
                    <p>expandRow.renderer callback will pass the origin row object to you</p>
                </div>
            ),
            showExpandColumn: true
        };

        return (
            <div>
                <button onClick={this.handleGetCurrentData}>Get Current Display Rows</button>
                <button onClick={this.handleGetSelectedData}>Get Current Selected Rows</button>
                <button onClick={this.handleGetExpandedData}>Get Current Expanded Rows</button>
                <button onClick={this.handleGetCurrentPage}>Get Current Page</button>
                <button onClick={this.handleGetCurrentSizePerPage}>Get Current Size Per Page</button>
                <button onClick={this.handleGetCurrentSortColumn}>Get Current Sort Column</button>
                <button onClick={this.handleGetCurrentSortOrder}>Get Current Sort Order</button>
                <button onClick={this.handleGetCurrentFilter}>Get Current Filter Information</button>

                <BootstrapTable
                    ref={n => this.node = n as BootstrapTable}
                    keyField="id"
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                    selectRow={{mode: 'checkbox', clickToSelect: true}}
                    expandRow={expandRow}
                />
            </div>
        );
    }
}
