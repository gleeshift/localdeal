// import IconGrid from '../components/IconGrid'
// import Layout from '../components/Layout'
// import NoResults from '../components/NoResults'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchInput from './SearchInput'
import Search from "./Search";
// import Sidebar from '../components/Sidebar'
import clsx from "clsx";
import "./styles.feather.css"
// import styles from './styles.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CarbonAd from "../../components/CarbonAd";
import React, {Component, Fragment, useState} from 'react';


var rows =[];
for (let step = 0; step < 300; step++) {
    rows.push("<p>tetst" + step + "</p>");
}

function NoResults({ query }) {
    return (
        <div

        >
            No results found for &ldquo;{query}&rdquo;
        </div>
    )
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const [query, setQuery] = useState(null);
  return (
    <Layout>
        <header className={clsx('hero hero--primary', 'heroBanner')}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={'buttons'}>
                    <Link
                        className={clsx(
                            'button button--outline button--secondary button--lg',
                            'styles.getStarted',
                        )}
                        to={('docs/')}>
                        Get Started
                    </Link>
                    <Link
                        className={clsx(
                            'button button--outline button--secondary button--lg',
                            'styles.getStarted',
                        )}
                        to={('docs/')}>
                        Get Download
                    </Link>
                </div>
            </div>
        </header>

        <div className={'container'}>


        <div className={'sidebarxx'}>
          <div className={'padding--xs'} >
              <h1>h1</h1>
              <p>para</p>
          </div>
            {/*<div className={'padding--bottom--xs'} >*/}
            {/*   <CarbonAd />*/}
            {/*</div>*/}
          </div>

        <div>
          <div className={'searchinputxx'} >

            <SearchInput
              placeholder={`Search ${
               1024
              } icons (Press "/" to focus)`}
              value={query || ''}
              onChange={event => setQuery(event.target.value)}
            />
          </div>
          <div className={'padding-horiz--md'}>

              <NoResults query={query} />
              {rows}

          </div>

        </div>

            <div className={'padding--md'}>
                this is the footer
            </div>
      </div>
    </Layout>
  )
}

export default Home
