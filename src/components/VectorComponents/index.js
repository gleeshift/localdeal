import React, {useState} from 'react';

// import CheckboxList from '@site/src/components/CheckboxList';
// import Empty from '@site/src/components/Empty';
// import Jump from '@site/src/components/Jump';
import Link from '@docusaurus/Link';
// import SVG from 'react-inlinesvg';

// import _ from 'lodash';
import classnames from 'classnames';
// import humanizeString from 'humanize-string';
// import qs from 'qs';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import './styles.css';

function VectorComponents(props) {
  //
  // Base Variables
  //

  const {siteConfig} = useDocusaurusContext();
  // const {metadata: {sources, transforms, sinks}} = siteConfig.customFields;
  const titles = props.titles || props.titles == undefined;
  const filterColumn = props.filterColumn == true;


  return (
    <div className={classnames('vector-components', {'vector-components--cols': filterColumn})}>
      <div className="filters">
        <div className="search">
          <input
            className="input--text input--lg"
            type="text"
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            placeholder="🔍 Search..." />
        </div>
        <div className="filter">
          <div className="filter--label">

              Event types

          </div>

        </div>
    </div>
    </div>
  );
}

export default VectorComponents;
