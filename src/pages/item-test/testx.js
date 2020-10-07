// import React, {useEffect} from 'react';
import React, {Component, Fragment, useState} from 'react';
// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';
import Sorting from "../../components/SearchUI/Sorting";
import Select from "react-select";
import PagingInfo from "../../components/SearchUI/PagingInfo"
import Heading from '@theme/Heading';
const AnchoredH2 = Heading('h2');
// import rows from './imdb.json';
// console.log(rows);
// console.log('test');
//https://github.com/newrelic/developer-website/blob/032e7d95e34136031b950d6687d12d13dae25e30/src/components/CookieApprovalDialog.js
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
function onChange() {
  alert('xx');
}

function amazoneScript() {
    const htmlSrc =  `
     <h1>testing</h1>
    `;
    return (
        <div className='advertisement'>
        <div dangerouslySetInnerHTML={{__html: htmlSrc}}></div>
        </div>
            );
}


function TestPage() {

    return (
        <Layout
            title="DocSearch: Search made for documentation"
            description="The easiest way to add search to your documentation - Powered by Algolia"
        >
           <span>xxxxx</span>
            <Sorting label={"Sort by"} options={options} onChange={onChange}/>

            <span>yyyy</span>
            <Select options={options} />

            <span>xxxxx</span>
            <PagingInfo start={1} end={3} totalResults={200} searchTerm={''} />

            <div className="alert alert--success" role="alert">
                <button aria-label="Close" className="close" type="button">
                    <span aria-hidden="true">×</span>
                </button>
                This is a <strong>success</strong> alert. Something good must have happened!
            </div>

            <amazoneScript />

            <header className="hero hero--clean">
                <div className="container container--xs">
                    <h1>Vector Highlights</h1>
                    <div className="hero--subtitle">
                        New features &amp; updates. Follow  for real-time updates!
                    </div>
                    <div className="hero--search">
                        <input
                            type="text"
                            className="input--text input--xl input--block"
                            // onChange={(event) => setSearchTerm(event.currentTarget.value)}
                            placeholder="🔍 Search by title or or tag..." />
                    </div>
                </div>
            </header>

            <header className="hero hero--clean">
                <div className="container">
                    <h1>Vector Guides</h1>
                    <div className="hero--subtitle">
                        Thoughtful guides to help you get the most out of Vector. Created and curated by the
                        {/*<Link to="/community#team">Vector team</Link>.*/}
                    </div>
                    <div className="hero--search">
                        <input
                            type="text"
                            className="input--text input--xl"
                            // onChange={(event) => setSearchTerm(event.currentTarget.value)}
                            placeholder="🔍 Search by guide name or tag..." />
                    </div>
                </div>
            </header>

            <AnchoredH2 id={'id here'}>{'advancedCategory.title'}</AnchoredH2>
        </Layout>
    );
}

export default TestPage;