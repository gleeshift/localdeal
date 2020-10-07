/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {Component, Fragment, useState} from 'react';

// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';
import Pagination from "../../components/Pagination";

import clsx from 'clsx';
import styles from './styles.module.css';
import products from './prod_4';

const TITLE = 'Top Price percent drop';
const DESCRIPTION =
  'We aggragate data and alert you when price/percent drops.';
const {items =[]} = products;
const pageSize = 12;


function Feature({mediumImage, itemId, name, msrp, salePrice, productUrl, affiliateAddToCartUrl, shortDescription}) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (
      <div key={itemId} className="col col--3 margin-bottom--lg">
        <div className={clsx('card', 'text--center', styles.productItem)}>
          <a href={productUrl}
             target="_blank">
            <div className="card__image">
              {/*<Image img={mediumImage} alt={name} />*/}
              <img src={mediumImage}/>
            </div>
          </a>
          <div className="card__body">
            <div className="avatar">
              <div className="avatar__intro margin-left--none">
                <small className="avatar__subtitle">
                  {name}
                </small>
                <h4 className="avatar__name">${salePrice}</h4>
                { msrp && (<small className="avatar__subtitle">
                  Regular ${msrp} Save ${(msrp-salePrice).toFixed(2)}
                  -({((msrp-salePrice)*100/msrp).toFixed(0)}%)
                </small>)
                }
              </div>
            </div>
          </div>
          {true && (productUrl || affiliateAddToCartUrl) && (
              <div className="card__footer">
                <div className="button-group button-group--block">
                  {productUrl && (
                      <a
                          className="button button--small button--primary button--block"
                          href={productUrl}
                          target="_blank"
                          rel="noreferrer noopener">
                        View Details
                      </a>
                  )}
                  {/*{affiliateAddToCartUrl && (*/}
                  {/*    <a*/}
                  {/*        className="button button--small button--secondary button--block"*/}
                  {/*        href={affiliateAddToCartUrl}*/}
                  {/*        target="_blank"*/}
                  {/*        rel="noreferrer noopener">*/}
                  {/*      Add to Cart*/}
                  {/*    </a>*/}
                  {/*)}*/}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

function PageOfPage({currentPage, pageSize, totalRecord})
{
    console.log('currentPage - pageSize');
    console.log(currentPage);
    console.log(pageSize);
    console.log(totalRecord);
    if(totalRecord && totalRecord > 0) {
        return (
            <span>
                Page {currentPage}/{Math.ceil(totalRecord / pageSize)}
            </span>
        )
    }
    return <span>xxx{totalRecord}  YYY</span>;
}
const initConfig = {
configuration: {
    searchableFields: ['title', 'tags', 'actors'],
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
    }
}
};
//
// var newFilters = {};
// Object.keys(initConfig.aggregations).map(function (v) {
//     newFilters[v] = [];
// });



function Products() {

  // const {items} = props;

  // const queryObj = props.location ? qs.parse(props.location.search, {ignoreQueryPrefix: true}) : {};

  // let itemsFiltered = items.slice(0);
  // itemsFiltered.sort((a, b) => (b.content.metadata.featured === true && 1) || -1);

    let initTotalRecords = items.length;
    const pageSize = 3;
    let initTotalPages = Math.ceil(initTotalRecords / pageSize);
    // const offset = (currentPage - 1) * pageSize;
    let initItems = items.slice(0, 0 + pageSize);
  //
  // State
  //
    // currentCountries, currentPage, totalPages
    // const [onlyFeatured, setOnlyFeatured] = useState(queryObj['featured'] == 'true');
    const [searchTerm, setSearchTerm] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsFiltered, setItemsFiltered] = useState(items); //getFiltered
    const [currentItems, setCurrentItems] = useState(initItems);
    const [totalPages, setTotalPages] = useState(initTotalPages);
    const [totalRecords, setTotalRecords] = useState(initTotalRecords);




    const [rate, setRate] = useState(2);


    // Filtering
    //
    function getFiltered(val) {
        let itemsFilteredx = [];
        if (val) {
            itemsFilteredx = items.filter(item => {
                let searchTerms = val.split(" ");
                let content = item.name.toLowerCase(); //`${item.content.metadata.title.c} ${item.content.metadata.description.toLowerCase()}`;
                return searchTerms.every(term => {
                    return content.includes(term.toLowerCase())
                })
            });
        } else {
            itemsFilteredx = items;
        }
        return itemsFilteredx;
    }




    function onPageChanged(data) {
        console.log(data);
        // setData(data);
        const {currentPage} = data;
        const offset = (currentPage - 1) * pageSize;
        const currentItems = itemsFiltered.slice(offset, offset + pageSize);
        setCurrentPage(currentPage);
        setCurrentItems(currentItems);


    }

    function handleSearchTerm(event) {
        console.log('search term:===' + event.currentTarget.value);
        let val = event.currentTarget.value;

        let newItemsFiltered = getFiltered(val);

        let newcurrentItems = newItemsFiltered.slice(0, 0 + pageSize);
        // setCurrentPage(currentPage);
        console.log('handleSearchTerm currentItems ===');
        console.log(newcurrentItems.length);
        console.log('handleSearchTerm currentItems ===');
        console.log(newcurrentItems.length);
        setSearchTerm(val);
        setCurrentPage(1);
        setItemsFiltered(newItemsFiltered);
        setCurrentItems(newcurrentItems || []);

    }

    const rateOptions = [
        {
            label: "2x",
            value: 2
        },
        {
            label: "10x",
            value: 10
        }
    ];


    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name + " v=" + value);
        setRate(value);
    }

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION} {currentPage} - filter {itemsFiltered.length} -  total {items.length} - { searchTerm}</p>
        </div>

          sort by
          <select name="sortBy" onChange={handleChange} value={rate}>
              {rateOptions.map(({ label, value }) => (
                  <option value={value}>{label}</option>
              ))}
          </select>

          <input

              type="text"
              onChange={(event) => handleSearchTerm(event)}
              placeholder=" Search..." />


          { currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">

                  <span>{itemsFiltered.length} Items found.  <PageOfPage currentPage={currentPage}  pageSize={pageSize} totalRecord={itemsFiltered.length} /> </span>
                </span>
          ) }
          <Pagination totalRecords={itemsFiltered.length} pageSize={pageSize} pageNeighbours={2} initPage={currentPage} onPageChanged={onPageChanged} />
<span>curentitem size: {currentItems.length}</span>
        <div className="row">
          {currentItems.map((props, idx) => (
              <Feature key={idx} {...props} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Products;
