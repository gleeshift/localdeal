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
// import {
//   useActivePlugin,
//   useVersions,
//   useActiveVersion,
// } from '@theme/hooks/useDocs';

function ItemItem(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {url: siteUrl, title: siteTitle} = siteConfig;
  const { docContent = {}} = props;
  const {metadata = {}} = docContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
  } = metadata;
  const {
    // frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents=true,
      showVersionBadge=true
    // },
  } = docContent;
 
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true,
  });
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>
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
                <div className="markdownx">
                  <h3>DocContent goes here 111111111111111111111111111 22222222222222222222222222222222222222 2222222222222</h3>
                <p>
                  It has been a year since we made the first alpha release of Docusaurus 2 and things have been pretty stable since then. Many of Facebook's new open source websites are using Docusaurus 2 now. At this point, we highly encourage you to use Docusaurus 2 over Docusaurus 1 for your new websites. For feedback and questions, chat with us on

                </p>
                  <p>
                    It has been a year since we made the first alpha release of Docusaurus 2 and things have been pretty stable since then. Many of Facebook's new open source websites are using Docusaurus 2 now. At this point, we highly encourage you to use Docusaurus 2 over Docusaurus 1 for your new websites. For feedback and questions, chat with us on

                  </p>
                  <p>
                    It has been a year since we made the first alpha release of Docusaurus 2 and things have been pretty stable since then. Many of Facebook's new open source websites are using Docusaurus 2 now. At this point, we highly encourage you to use Docusaurus 2 over Docusaurus 1 for your new websites. For feedback and questions, chat with us on

                  </p>
                  <p>
                    It has been a year since we made the first alpha release of Docusaurus 2 and things have been pretty stable since then. Many of Facebook's new open source websites are using Docusaurus 2 now. At this point, we highly encourage you to use Docusaurus 2 over Docusaurus 1 for your new websites. For feedback and questions, chat with us on

                  </p>
                </div>
              </article>
              {(editUrl || lastUpdatedAt || lastUpdatedBy) &&  (
                <div className="margin-vert--xl">
                  <div className="row">
                    <div className="col">
                      {editUrl && (
                        <a
                          href={editUrl}
                          target="_blank"
                          rel="noreferrer noopener">
                          <svg
                            fill="currentColor"
                            height="1.2em"
                            width="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 40 40"
                            style={{
                              marginRight: '0.3em',
                              verticalAlign: 'sub',
                            }}>
                            <g>
                              <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
                            </g>
                          </svg>
                          Edit this page
                        </a>
                      )}
                    </div>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <div className="col text--right">
                        <em>
                          <small>
                            Last updated{' '}
                            {lastUpdatedAt && (
                              <>
                                on{' '}
                                <time
                                  dateTime={new Date(
                                    lastUpdatedAt * 1000,
                                  ).toISOString()}
                                  className={styles.docLastUpdatedAt}>
                                  {new Date(
                                    lastUpdatedAt * 1000,
                                  ).toLocaleDateString()}
                                </time>
                                {lastUpdatedBy && ' '}
                              </>
                            )}
                            {lastUpdatedBy && (
                              <>
                                by <strong>{lastUpdatedBy}</strong>
                              </>
                            )}
                            {process.env.NODE_ENV === 'development' && (
                              <div>
                                <small>
                                  {' '}
                                  (Simulated during dev for better perf)
                                </small>
                              </div>
                            )}
                          </small>
                        </em>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
