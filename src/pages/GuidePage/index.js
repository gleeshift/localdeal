import React, {useState} from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';


import classnames from 'classnames';
// import dateFormat from 'dateformat';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import SearchInput from "./SearchInput";

// Modal.setAppElement('#__docusaurus')

const AnchoredH2 = Heading('h2');
const AnchoredH3 = Heading('h3');

const LINK_CLASS_NAME = 'contents__link';
const ACTIVE_LINK_CLASS_NAME = 'contents__link--active';
const TOP_OFFSET = 100;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({headings, isChild}) {
  if (!headings.length) return null;

  // We need to track shown headings because the markdown parser will
  // extract duplicate headings if we're using tabs
  let uniqHeadings = _.uniqBy(headings, (heading => heading.value));

  return (
    <ul className={isChild ? '' : 'contents'}>
      {!isChild && (
        <li>
          <a
            href="#overview"
            className={LINK_CLASS_NAME}>
            Overview
          </a>
        </li>
      )}
      {uniqHeadings.map(heading => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function GuidePage(props) {
  //
  // Props
  //

  // const {content: GuideContents} = props;
  // const {frontMatter, metadata} = GuideContents;
  // const {author_github: authorGithub, id, last_modified_on: lastModifiedOn, series_position: seriesPosition, title} = frontMatter;
  // const {categories, readingTime, tags} = metadata;
  // const {assumptions} = frontMatter;

  //
  // Site config
  //

  // const {siteConfig} = useDocusaurusContext();
  // const {metadata: {installation, sources, sinks}} = siteConfig.customFields;
  // const {platforms} = installation;

  //
  // Variables
  //


    var rows =[];
    for (let step = 0; step < 150; step++) {
      rows.push("<p>tetst" + step + "</p>");
    }

  //
  // Render
  //

  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
    const [query, setQuery] = useState(null);
  const title ='title';
  return (
    <Layout title={title} description={`${title}, in minutes, for free`}>
        <header className={`hero domain-bg domain-bg--domainBG`}>
        <div className="container">

            <div className="hero--category">
              <Link to={''}> xxxx</Link></div>
          <h1 className={styles.header}>{'title'}</h1>
          <div className="hero--subtitle">{'frontMatter.description'}</div>
          {/*<Tags colorProfile="guides" tags={tags} />*/}
        </div>
      </header>
      <main className={classnames('container', 'container--l', styles.container)}>
        <aside className={styles.sidebar}>
          <section className={styles.avatar}>
          book avator
              <SearchInput
                  placeholder={`Search ${
                      1024
                  } icons (Press "/" to focus)`}
                  value={query || ''}
                  onChange={event => setQuery(event.target.value)}
              />
          </section>
          <section className={classnames('table-of-contents', styles.tableOfContents)}>

              <div className="css11x9mvp">
                  <div className="css79elbk">
                      <div className="css1jo5a5k">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
                               fill="none" stroke-linecap="round" stroke-linejoin="round" className="css1hy7qas">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                      </div>
                      <input type="search" aria-label="Search"
                             placeholder="Search 282 icons (Press &quot;/&quot; to focus)" value="sea"
                             className="csszcmmes" />
                      </div>
              </div>


            <div className="section">
              <div className="title">Stats</div>

                <div className={styles.css11x9mvp}>
                    <div className={styles.css79elbk}>
                        <div className={styles.css1jo5a5k}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
                                 fill="none" stroke-linecap="round" stroke-linejoin="round"
                                 className={styles.css1hy7qas}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <input type="search" aria-label="Search"
                               placeholder="Search 282 icons (Press &quot;/&quot; to focus)" value="sea"
                               className={styles.csszcmmes} />
                    </div>
                </div>

              <div className="text--secondary text--bold">
                {/*<i className="feather icon-book"></i>*/}
                {'readingTime'}</div>
              <div className="text--secondary text--bold">
                {/*<i className="feather icon-clock"></i> */}
                Updated
                {/*<time pubdate="pubdate" dateTime={lastModifiedOn}>{dateFormat(lastModified, "mmm dS, yyyy")}</time>*/}
              </div>

                <div className={styles.css79elbk}>
                    <div className={styles.css1jo5a5k}>
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
                             fill="none" stroke-linecap="round" stroke-linejoin="round"
                             className={styles.css1hy7qas}>
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input type="search" aria-label="Search"
                           placeholder="Search 282 icons (Press &quot;/&quot; to focus)" value="sea"
                           className={styles.csszcmmes} />
                </div>
            </div>
            {/*{GuideContents.rightToc.length > 0 && (*/}
              <div className="section">
                <div className="title">Contents</div>
                {/*<Headings headings={GuideContents.rightToc} />*/}


                {/*<section className="table-of-contents tableOfContents_1eMQ">*/}
                {/*  <div className="section">*/}
                {/*    <div className="title">Stats</div>*/}
                {/*    <div className="text--secondary text--bold"><i className="feather icon-book"></i> 6 min read</div>*/}
                {/*    <div className="text--secondary text--bold"><i className="feather icon-clock"></i> Updated <time*/}
                {/*        pubdate="pubdate">Sep 29th, 2020</time></div>*/}
                {/*  </div>*/}
                {/*  <div className="section">*/}
                {/*    <div className="title">Contents</div>*/}
                    <ul className="contents">
                      <li><a href="#overview" className="contents__link">Overview</a></li>
                      <li><a href="#tutorial" className="contents__link">Tutorial</a>
                        <ul className="">
                          <li><a href="#setup-a-basic-pipeline" className="contents__link">Setup a basic pipeline</a>
                          </li>


                          <li><a href="#add-a-parsing-transform" class="contents__link">Add a parsing transform</a></li>
                          <li><a href="#test-it" class="contents__link">Test it</a></li>
                        </ul>
                      </li>
                      <li><a href="#next-steps" class="contents__link">Next Steps</a></li>
                    </ul>
                  </div>
                </section>
        </aside>










        <div className={styles.article}>
          {/*{assumptions && assumptions.length > 0 && <Alert type="info" icon={false} className="list--icons list--icons--info">*/}
            <p>Before you begin, this guide assumes the following:</p>
            <ul>
              <li>xxx</li>
              <li>bbbb</li>
              {/*{assumptions.map((assumption,idx) => (*/}
              {/*  <li key={idx}>{assumption}</li>*/}
              {/*))}*/}
            </ul>
          {/*</Alert>}*/}
          <article>
            <div className="markdown">
              <a aria-hidden="true" tabIndex="-1" className="anchor" id="overview"></a>
             <p>xxxx</p>
              <p>another page</p>

              {rows}

                {/*// Runs 5 times, with values of step 0 through 4.*/}


            </div>
          </article>
          {/*{!frontMatter.hide_pagination && <PagePaginator previous={metadata.prevItem} next={metadata.nextItem} className={styles.paginator} />}*/}
        </div>
      </main>
    </Layout>
  );
}

export default GuidePage;
