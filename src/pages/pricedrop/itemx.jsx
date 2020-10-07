import React, {useState} from "react";
import Layout from '@theme/Layout';
// import Layout from "@theme/*";
import itemsjs from "itemsjs";
// import rows from './imdb.json';
import products from './prod_4';
import Pagination from "../../components/Pagination";
import PagingInfo from "../../components/SearchUI/PagingInfo";
import ColorGenerator from '@site/src/components/ColorGenerator';
import styles from './styles.module.css'
import ProjectSearchInput from '@site/src/components/ProjectSearchInput';

// console.log(rowsx);
// const row2 = rowsx.slice(0,100);
// const rows = rowsx.concat(row2);
const {items =[]} = products;
const rows = items;
console.log("rows");
console.log(rows);
console.log("products");
console.log(products);
const PAGE_SIZE = 4;
const  sortOptions = [
    {
        label: "name ",
        value: 'name_asc'
    },
    {
        label: "price",
        value: "salePrice_asc"
    },
    {
        label: "name desc ",
        value: 'name_desc'
    },
    {
        label: "price desc",
        value: "salePrice_desc"
    }
];

const  perPageOptions = [
    {
        label: " 3 ",
        value: 3
    },
    {
        label: " 4 ",
        value: 4
    },
    {
        label: " 5 ",
        value: 5
    },
    {
        label: "10",
        value: 10
    },
    {
        label: "20",
        value: 20
    },
    {
        label: "30",
        value: 30
    }
];


class ItemsJS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configuration: {
                searchableFields: ['name', 'shortDescription'],
                // sortings: {
                //     year_asc: {
                //         // field name in data
                //         field: 'year',
                //         // possible values asc or desc
                //         order: 'asc'
                //     },
                //     year_name_asc: {
                //         // Multiple criteria possible
                //         field: ['date', 'name'],
                //         order: ['asc', 'asc']
                //     }
                // },
                sortings: {
                    name_asc: {
                        field: 'name',
                        order: 'asc'
                    },
                    name_desc: {
                        field: 'name',
                        order: 'desc'
                    },
                    salePrice_asc: {
                        field: 'salePrice',
                        order: 'asc'
                    },
                    salePrice_desc: {
                        field: 'salePrice',
                        order: 'desc'
                    },
                    // categoryNode_asc: {
                    //     field: 'categoryNode',
                    //     order: 'asc'
                    // },
                    // categoryNode_desc: {
                    //     field: 'categoryNode',
                    //     order: 'desc'
                    // }
                },
                aggregations: {
                    categoryNode: {
                        title: 'categoryNode',
                        size: 10
                    },
                    brandName: {
                        title: 'brandName',
                        size: 10
                    }
                },
                isExactSearch: true // Default false

            }
        };

        var newFilters = {};
        Object.keys(this.state.configuration.aggregations).map(function (v) {
            newFilters[v] = [];
        })


        // Copying this.state using the spread op (...this.state)
        this.state = {
            ...this.state,
            // the rows comes from external resources
            // https://github.com/itemsapi/itemsapi-example-data/blob/master/jsfiddle/imdb.js

            // In React line below is:
            //itemsjs: require('itemsjs')(rows, this.state.configuration),

            itemsjs: itemsjs(rows, this.state.configuration),

            query: '',
            filters: newFilters,
            sort: 'name_asc',
            page: 1,
            per_page: PAGE_SIZE

        }
    }

    changeQuery(e) {
        this.setState({
            query: e.target.value,
            page: 1
        });
    }

    changeSort(e) {
        this.setState({
            sort: e.target.value,
            page: 1
        });
    }

    changePerPage(e) {
        this.setState({
            per_page: e.target.value,
            page: 1
        });
    }

    onPageChanged(data) {
        console.log(data);
        // setData(data);
        const {currentPage = 1} = data;
        this.setState({
            page: currentPage
        });


    }

    reset() {
        var newFilters = {};
        Object.keys(this.state.configuration.aggregations).map(function (v) {
            newFilters[v] = [];
        })
        this.setState({
            filters: newFilters,
            query: '',
            page: 1,
            sort: 'name_asc',
            per_page: PAGE_SIZE
        })
    }

    handleCheckbox(event, filterName, filterValue)  {
        console.log(event);
        console.log(filterName);
        console.log(filterValue);
        const oldFilters = this.state.filters;
        let newFilters = oldFilters
        let check = event.target.checked;

        if (check) {
            newFilters[filterName].push(filterValue)

            this.setState({
                filters: newFilters,
                page: 1
            })
        } else {
            var index = newFilters[filterName].indexOf(filterValue);
            if (index > -1) {
                newFilters[filterName].splice(index, 1);
                this.setState({
                    filters: newFilters,
                    page: 1
                })
            }
        }
    }

    // get searchResult() {
    //
    //     console.log(rows.length);
    //
    //     var result = this.state.itemsjs.search({
    //         query: this.state.query,
    //         filters: this.state.filters,
    //         per_page: 6,
    //         page: 2
    //     });
    //     console.log(result);
    //     return result
    // }




    render() {

        const searchResult = this.state.itemsjs.search({
                    query: this.state.query,
                    filters: this.state.filters,
                    per_page: this.state.per_page,
                    page: this.state.page,
                    sort: this.state.sort
        });
        console.log(searchResult);
        // Results paging start & end
        const totalResults = searchResult.pagination.total;
        const startx =
            totalResults === 0 ? 0 : (this.state.page - 1) * this.state.per_page + 1;
        const endx =
            totalResults <= startx + this.state.per_page
                ? totalResults
                : startx + this.state.per_page - 1;


        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">

                            <a className="navbar-brand" href="#"
                               onClick={this.reset.bind(this)}>Clear Filter</a>  {rows.length}
                            sort by
                            <select    className={styles.searchSelect} name="sortBy" onChange={this.changeSort.bind(this)} value={this.state.sort}>
                                {sortOptions.map(({ label, value }) => (
                                    <option value={value}>{label}</option>
                                ))}
                            </select>

                            show
                            <select   className={styles.searchSelect} name="showPagesize" onChange={this.changePerPage.bind(this)} value={this.state.per_page}>
                                {perPageOptions.map(({ label, value }) => (
                                    <option value={value}>{label}</option>
                                ))}
                            </select>
                            {/*<span>showing {(this.state.page-1)* (this.state.per_page) + 1} - {((this.state.page)* (this.state.per_page) )} of {searchResult.pagination.total} </span>*/}
                            <PagingInfo start={startx} end={endx} totalResults={totalResults} searchTerm={this.state.query || ''} />
                        </div>
                        <div id="navbar">
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)}
                                           className={styles.searchQueryInput}  placeholder="Search...xxxxx"/>

                                    <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)}
                                           className={styles.searchTextBox}  placeholder="Search...yyyy"/>



                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container" style={{marginTop: '50px'}}>
                    <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)}
                           className={styles.searchQueryInput}  placeholder="Search..."/>
                    <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)}
                           className={styles.searchTextBox}  placeholder="Search...zzz"/>
                    <h1>List of items ({searchResult.pagination.total})</h1>

                    <Pagination totalRecords={searchResult.pagination.total} pageSize={this.state.per_page}
                                pageNeighbours={2} initPage={this.state.page} onPageChanged={this.onPageChanged.bind(this)} />

                    <p className="text-muted">Search performed in {searchResult.timings.search} ms, facets
                        in {searchResult.timings.facets} ms</p>

                    <div className="row">
                        <div className="col-md-2 col-xs-2">
                            {
                                Object.entries(searchResult.data.aggregations).map(([key, value]) => {
                                    return (
                                        <div key={key}>
                                            <h5 style={{marginBottom: '5px'}}><strong
                                                style={{color: '#337ab7'}}>{value.title}</strong></h5>

                                            <ul className="browse-list list-unstyled long-list"
                                                style={{marginBottom: '0px'}}>
                                                {
                                                    Object.entries(value.buckets).map(([keyB, valueB]) => {
                                                        return (
                                                            <li key={valueB.key}>
                                                                <div className="checkbox block"
                                                                     style={{marginTop: '0px', marginBottom: '0px'}}>
                                                                    <label>
                                                                        <input className="checkbox" type="checkbox"
                                                                               checked={this.state.filters[value.name].indexOf(valueB.key) > -1 || false}
                                                                               onChange={(event) => this.handleCheckbox(event, value.name, valueB.key)}/>
                                                                        {valueB.key} ({valueB.doc_count})
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-10 col-xs-10">
                            <div className="breadcrumbs"></div>
                            <div className="clearfix"></div>
                            <table className="table table-striped">
                                <tbody>
                                {
                                    Object.entries(searchResult.data.items).map(([key, item]) => {
                                        return (
                                            <tr key={key}>
                                                <td><img style={{width: '100px'}} src={item.thumbnailImage}/></td>
                                                <td></td>
                                                <td>
                                                    <b>{item.name}</b>
                                                    <br/>
                                                    <b>{item.brandName} =={item.salePrice}</b>

                                                </td>
                                                <td></td>
                                                <td>
                                                    {/*{*/}
                                                    {/*    item.tags.map((tag, index) => {*/}
                                                    {/*        return (*/}
                                                    {/*            <span key={index}>{tag}</span>*/}
                                                    {/*        )*/}
                                                    {/*    })*/}
                                                    {/*}*/}
                                                </td>
                                            </tr>)
                                    })
                                }
                                </tbody>
                            </table>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function TestPage() {

    return (
        <Layout
            title="DocSearch: Search made for documentation"
            description="The easiest way to add search to your documentation - Powered by Algolia"
        >
            <main className="container margin-vert--lg">
                <div className="text--center margin-bottom--sl">
                    <h1>{'Price Drop the most'}</h1>
                    <p>xxxxx</p>
                </div>
                {/*<ColorGenerator/>*/}
                {/*<ProjectSearchInput />*/}
            {/*<ItemsJS/>*/}
            </main>


        </Layout>
    );
}

export default TestPage;