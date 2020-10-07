/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
// import {MDXProvider} from '@mdx-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '../Sidebar';
// import MDXComponents from '@theme/MDXComponents';
// import NotFound from '@theme/NotFound';
// import {matchPath} from '@docusaurus/router';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';
import ItemItem from "../ItemItem";

// This theme is not coupled to Algolia, but can we do something else?
// Note the last version is also indexed with "last", to avoid breaking search on new releases
// See https://github.com/facebook/docusaurus/issues/3391
function CustomMeta({name, content}) {
  // const versions = isLast ? [version, 'latest'] : [version];
  return (
    <Head>
      <meta
        name={name}
        content={content
          // See https://github.com/facebook/docusaurus/issues/3391#issuecomment-685594160
          // versions.join(',')
        }
      />
    </Head>
  );
}

function DocPage({sidebar, sidebarName='doc01', docContent}) {
  const {siteConfig, isClient} = useDocusaurusContext();
  return (
      <>
        <CustomMeta name={'version'} content={'isLast'} />
        <Layout key={isClient}>
          <div className={styles.docPage}>
            {sidebar && (
                <div className={styles.docSidebarContainer} role="complementary">
                  <DocSidebar
                      key={
                        // Reset sidebar state on sidebar changes
                        // See https://github.com/facebook/docusaurus/issues/3414
                        sidebarName
                      }
                      sidebar={sidebar}
                      // path={currentDocRoute.path}
                      sidebarCollapsible={
                        siteConfig.themeConfig?.sidebarCollapsible ?? true
                      }
                  />
                </div>
            )}
            <main className={styles.docMainContainer}>

              {docContent}

            </main>
          </div>
        </Layout>
      </>
  )
}

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
export default Home;
