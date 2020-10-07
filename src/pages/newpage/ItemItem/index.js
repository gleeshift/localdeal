/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
// import DocPaginator from '@theme/DocPaginator';
// import DocVersionSuggestions from '@theme/DocVersionSuggestions';
// import TOC from '@theme/TOC';
import clsx from 'clsx';
import styles from './styles.module.css';

import ItemTOC from '../ItemTOC'
import PagingInfo from "../../../components/SearchUI/PagingInfo";
// import {
//   useActivePlugin,
//   useVersions,
//   useActiveVersion,
// } from '@theme/hooks/useDocs';

function ItemItem(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {url: siteUrl, title: siteTitle} = siteConfig;
  // const { docContent = {}} = props;
  // const {metadata = {}} = docContent;
  // const {
  //   description,
  //   title,
  //   permalink,
  //   editUrl,
  //   lastUpdatedAt,
  //   lastUpdatedBy,
  // } = metadata;
  const {
    // frontMatter: {
      image: metaImage,
      keywords,
      title ='titile--xxxx',
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents=true,
      showVersionBadge=true,
      pageInfo,

    // },
  } = props;
 
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true,
  });



  return (
    <>

      <div
        className={clsx('container padding-vert--lg', styles.docItemWrapper)}>
        <div className="row">
          <div
            className={clsx('col', {
              [styles.docItemCol]: !hideTableOfContents,
            })}>
            
            <div className={styles.docItemContainer}>
              <article>
                {showVersionBadge && (
                  <div>
                    <span className="badge badge--secondary">
                      Version: {'version.label'}
                    </span>
                  </div>
                )}
                {!hideTitle && (
                  <header>
                    <h2 className={styles.docTitle}>{title}</h2>
                  </header>
                )}

                <div className="margin-vert--xl">
                  <div className="row">
                    <div className="col">
                      <PagingInfo start={startx} end={endx} totalResults={totalResults} searchTerm={this.state.query || ''} />
                    </div>

                        <div className="col text--right">
                          sort by
                          <select    className={styles.searchSelect} name="sortBy" onChange={this.changeSort} value={this.state.sort}>
                            {sortOptions.map(({ label, value }) => (
                                <option value={value}>{label}</option>
                            ))}
                          </select>

                          show
                          <select   className={styles.searchSelect} name="showPagesize" onChange={this.changePerPage} value={this.state.per_page}>
                            {perPageOptions.map(({ label, value }) => (
                                <option value={value}>{label}</option>
                            ))}
                          </select>
                        </div>
                  </div>
                </div>

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



              </article>


              <div className="margin-vert--lg">
               doc pagigation part
              </div>
            </div>
          </div>
          {!hideTableOfContents && docContent.rightToc && (
            <div className="col col--3">
              <ItemTOC headings={docContent.rightToc} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemItem;
