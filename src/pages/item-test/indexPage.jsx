import React, {useState} from "react";
import Layout from '@theme/Layout';
// import Layout from "@theme/*";
import itemsjs from "itemsjs";
import rows from './imdb.json';
// console.log(rowsx);
// const row2 = rowsx.slice(0,100);
// const rows = rowsx.concat(row2);
import DocPage from "../docpage";
import ItemItem from "../ItemItem";

import PagingInfo from "../../components/SearchUI/PagingInfo";

function Home() {
    const sidebarItems = [
        {label: 'book',
            items: [
                { label: 'book-01', href: 'xxx'   },
                { label: 'book-02', href: 'xxx2'   },
            ]

        },

        {label: 'toy',
            items: [
                { label: 'toy1-01', href: 'xxx'   },
                { label: 'toy2-02', href: 'xxx2'   },
            ]

        }


    ];

    const metadata = {
        description: 'desc',
        title: 'title-01',
        // permalink,
        editUrl:'edit-url',
        lastUpdatedAt:'2020',
        lastUpdatedBy:'root',
    };

    const headings = [
        {id:'001', value: 'value01'},
        {id:'002', value: 'value02'},
        {id:'003', value: 'value03'},
        {id:'004', value: 'value01'},
        {id:'005', value: 'value02'},
        {id:'006', value: 'value03'},
    ];

    // const rightToc =
    //   headings: headings
    //
    // };


    const docContent = {
        metadata: metadata,
        rightToc:headings

    }

    const itemItemVal = (<ItemItem docContent ={docContent} />);

    return <DocPage sidebar={sidebarItems}  docContent={itemItemVal}/>
}


class ItemsJS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configuration: {
                searchableFields: ['title', 'tags', 'actors'],
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
                    }
                },
                aggregations: {
                    tags: {
                        title: 'Tags',
                        size: 10
                    },
                    actors: {
                        title: 'Actors',
                        size: 10
                    },
                    genres: {
                        title: 'Genres',
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
        }
    }

    changeQuery(e) {
        this.setState({
            query: e.target.value
        });
    }

    // changeQueryProp = changeQuery.bind(this);

    reset()  {
        var newFilters = {};
        Object.keys(this.state.configuration.aggregations).map(function (v) {
            newFilters[v] = [];
        })
        this.setState({
            filters: newFilters,
            query: '',
        })
    }
    // resetProp = this.reset.bind(this);

    handleCheckbox(event, filterName, filterValue) {
        console.log(event);
        console.log(filterName);
        console.log(filterValue);
        const oldFilters = this.state.filters;
        let newFilters = oldFilters
        let check = event.target.checked;

        if (check) {
            newFilters[filterName].push(filterValue)

            this.setState({
                filters: newFilters
            })
        } else {
            var index = newFilters[filterName].indexOf(filterValue);
            if (index > -1) {
                newFilters[filterName].splice(index, 1);
                this.setState({
                    filters: newFilters
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

        // var searchResult = this.state.itemsjs.search({
        //             query: this.state.query,
        //             filters: this.state.filters,
        //             per_page: 6,
        //             page: 2
        //         });
        // console.log(searchResult);
        const searchResult = this.state.itemsjs.search({
            query: this.state.query,
            filters: this.state.filters,
            per_page: this.state.per_page,
            page: this.state.page,
            sort: this.state.sort
        });
        console.log(searchResult);

        const totalResults = searchResult.pagination.total;
        const startx =
            totalResults === 0 ? 0 : (this.state.page - 1) * this.state.per_page + 1;
        const endx =
            totalResults <= startx + this.state.per_page
                ? totalResults
                : startx + this.state.per_page - 1;


        const pageInfo =
            (<PagingInfo start={startx} end={endx} totalResults={totalResults}
                         searchTerm={this.state.query || ''} />);

        const navlink = (

            <div className="navbar-header">
            <a className="navbar-brand" href="#" onClick={this.reset}>ItemsJS moviezzzzzs</a>  {rows.length}
        </div>
        );

        const inputLink = (
            <div className="form-group">
                <input type="text" value={this.state.query} onChange={this.changeQuery}
                       className="form-control" placeholder="Search"/>

            </div>
        );

        if(true) return <Home />;

        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#" onClick={this.reset.bind(this)}>ItemsJS moviezzzzzs</a>  {rows.length}
                        </div>
                        <div id="navbar">
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" value={this.state.query} onChange={this.changeQuery.bind(this)}
                                           className="form-control" placeholder="Search"/>

                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container" style={{marginTop: '50px'}}>

                    <h1>List of items ({searchResult.pagination.total})</h1>

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
                                                <td><img style={{width: '100px'}} src={item.image}/></td>
                                                <td></td>
                                                <td>
                                                    <b>{item.name}</b>
                                                    <br/>
                                                    {item.description}
                                                </td>
                                                <td></td>
                                                <td>
                                                    {
                                                        item.tags.map((tag, index) => {
                                                            return (
                                                                <span key={index}>{tag}</span>
                                                            )
                                                        })
                                                    }
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
        // <Layout
        //     title="DocSearch: Search made for documentation"
        //     description="The easiest way to add search to your documentation - Powered by Algolia"
        // >
        //     <span> testing</span>
            <ItemsJS/>

        // </Layout>
    );
}

export default TestPage;