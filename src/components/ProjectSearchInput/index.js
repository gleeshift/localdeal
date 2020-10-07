import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Filter } from 'react-feather';

import searchIcon from './icon-search.svg';
import styles from './ProjectSearchInput.module.css';

const ProjectSearchInput = ({
  searchQueryValue,
  onSearchQueryChange,
  filterOptions = {},
  filterValues={},
  onFilterChange,
}) => {
  const { allLanguages=[{fieldValue:'EN'}], allCategories=[{fieldValue: 'cat'}], allProjectTags=[{fieldValue:'tag value'}] } = filterOptions;
  const [mobileFiltersHidden, setMobileFiltersHidden] = useState(true);

  const onCategoryChange = (e) =>
    onFilterChange({ field: 'ossCategory', value: e.target.value });

  const onProjectTagChange = (e) =>
    onFilterChange({ field: 'projectTag', value: e.target.value });

  const onLanguageTypeChange = (e) =>
    onFilterChange({ field: 'languageType', value: e.target.value });

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             className="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        {/*<img src={searchIcon} alt="search icon" className={styles.searchIcon} />*/}
        <input
          type="text"
          value={searchQueryValue}
          onChange={(e) => {
            onSearchQueryChange({ searchQuery: e.target.value });
          }}
          placeholder="Search for a project"
          className={styles.searchInput}
        />
      </div>
      <div
        className={`${styles.searchFilters} ${
          mobileFiltersHidden ? styles.mobileFiltersHidden : ''
        }`}
      >
        <span
          className={styles.showFiltersButton}
          onClick={() => setMobileFiltersHidden(false)}
        >
          Show filters
          {/*<Filter color="#007e8a" size={12} />*/}
        </span>
        <select
          className={styles.searchFilter}
          onChange={onCategoryChange}
          value={filterValues.ossCategory}
        >
          <option label="All Categories" value="">
            All categories
          </option>
          {allCategories.map((c) => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              >
                {c.fieldValue}
              </option>
            );
          })}
        </select>
        <select
          className={styles.searchFilter}
          onChange={onProjectTagChange}
          value={filterValues.projectTag}
        >
          <option label="All Project Tags" value="">
            All Project Tags
          </option>
          {allProjectTags.map((c) => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              >
                {c.fieldValue}
              </option>
            );
          })}
        </select>
        <select
          className={styles.searchFilter}
          onChange={onLanguageTypeChange}
          value={filterValues.languageType}
        >
          <option label="All Language Types" value="">
            All language types
          </option>
          {allLanguages.map((c) => {
            return (
              <option
                key={c.fieldValue}
                label={c.fieldValue}
                value={c.fieldValue}
              >
                {c.fieldValue}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

ProjectSearchInput.propTypes = {
  searchQueryValue: PropTypes.string,
  onSearchQueryChange: PropTypes.func,
  filterOptions: PropTypes.object,
  filterValues: PropTypes.object,
  onFilterChange: PropTypes.func,
};
export default ProjectSearchInput;
