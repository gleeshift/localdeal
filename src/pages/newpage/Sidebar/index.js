/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useState, useCallback, useEffect, useRef} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize, {windowSizes} from '@theme/hooks/useWindowSize';
import useLogo from '@theme/hooks/useLogo';
import useScrollPosition from '@theme/hooks/useScrollPosition';
import Link from '@docusaurus/Link';
// import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
const MOBILE_TOGGLE_SIZE = 24;


        {

        }


function DocSidebarItemCategory({
  item,
  onItemClick,
  collapsible,
  // activePath,
    filters=[],
                                    handleCheckbox,
  ...props
}) {
  const {buckets, title, name} = item;
  // const isActive = isActiveSidebarItem(item, activePath);
  // const wasActive = usePrevious(isActive); // active categories are always initialized as expanded


  const [collapsed, setCollapsed] = useState(() => {
    if (!collapsible) {
      return false;
    }

    return item.collapsed;
  }); // If we navigate to a category, it should automatically expand itself

  // useEffect(() => {
  //   const justBecameActive = isActive && !wasActive;
  //
  //   if (justBecameActive && collapsed) {
  //     setCollapsed(false);
  //   }
  // }, [isActive, wasActive, collapsed]);
  const handleItemClick = useCallback(
    (e) => {
      e.preventDefault();
      setCollapsed((state) => !state);
    },
    [setCollapsed],
  );

  // if (buckets.length === 0) {
  //   return null;
  // }

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}
      key={title}>
      <a
        className={clsx('menu__link', {
          'menu__link--sublist': collapsible,
          // 'menu__link--active': collapsible && isActive,
          [styles.menuLinkText]: !collapsible,
        })}
        onClick={collapsible ? handleItemClick : undefined}
        href={collapsible ? '#!' : undefined}
        {...props}>
        {title}
      </a>
      <ul className="menu__list">
        {/*{buckets.map((childItem) => (*/}
        {/*  <DocSidebarItemLink*/}
        {/*    tabIndex={collapsed ? '-1' : '0'}*/}
        {/*    key={childItem.label}*/}
        {/*    item={childItem}*/}
        {/*    onItemClick={onItemClick}*/}
        {/*    collapsible={collapsible}*/}
        {/*    // activePath={activePath}*/}
        {/*  />*/}
        {/*))}*/}

          {
              Object.entries(buckets).map(([keyB, valueB]) => {
                  return (


                      <li key={valueB.key} className="menu__list-item">
                          <div className="checkbox block"
                               style={{marginTop: '0px', marginBottom: '0px'}}>
                              <label>
                                  <input className="checkbox" type="checkbox"
                                      checked={filters[item.name].indexOf(valueB.key) > -1 || false}
                                      onChange={(event) => handleCheckbox(event, item.name, valueB.key)}
                                  />
                                  {valueB.key} ({valueB.doc_count})
                              </label>
                          </div>
                      </li>
                  )
              })
          }
      </ul>
    </li>
  );

}

function DocSidebarItemLink({
  item,
  onItemClick,
  // activePath,
  collapsible: _collapsible,
  ...props
}) {
  const {href, label} = item;
  // const isActive = isActiveSidebarItem(item, activePath);
  return (
    <li className="menu__list-item" key={label}>

      {label}
      {/*<Link*/}
      {/*  className={clsx('menu__link', {*/}
      {/*    // 'menu__link--active': isActive,*/}
      {/*  })}*/}
      {/*  to={href}*/}
      {/*  {...(isInternalUrl(href)*/}
      {/*    ? {*/}
      {/*        isNavLink: true,*/}
      {/*        exact: true,*/}
      {/*        onClick: onItemClick,*/}
      {/*      }*/}
      {/*    : {*/}
      {/*        target: '_blank',*/}
      {/*        rel: 'noreferrer noopener',*/}
      {/*      })}*/}
      {/*  {...props}>*/}
      {/*  {label}*/}
      {/*</Link>*/}
    </li>
  );
}

// <DocSidebar query={this.state.query}
//             changeQuery={this.changeQuery}
//             handleCheckbox={this.handleCheckbox}
//             aggregations = {searchResult.data.aggregations} />


function DocSidebar({query, changeQuery, handleCheckbox, aggregations, filters,
                        handleReset, sidebarCollapsible = false}) {
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false);
  const {
    siteConfig: {
      themeConfig: {navbar: {title = '', hideOnScroll = false} = {}} = {},
    } = {},
    isClient,
  } = useDocusaurusContext();
  const {logoLink, logoLinkProps, logoImageUrl, logoAlt} = useLogo();
  const {isAnnouncementBarClosed} = useUserPreferencesContext();
  const {scrollY} = useScrollPosition();
  useLockBodyScroll(showResponsiveSidebar);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setShowResponsiveSidebar(false);
    }
  }, [windowSize]);
  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebarWithHideableNavbar]: hideOnScroll,
      })}>
      {hideOnScroll && (
        <Link
          tabIndex={-1}
          className={styles.sidebarLogo}
          to={logoLink}
          {...logoLinkProps}>
          {logoImageUrl != null && (
            <img key={isClient} src={logoImageUrl} alt={logoAlt} />
          )}
          {title != null && <strong>{title}</strong>}
        </Link>
      )}
      <div
        className={clsx('menu', 'menu--responsive', styles.menu, {
          'menu--show': showResponsiveSidebar,
          [styles.menuWithAnnouncementBar]:
            !isAnnouncementBarClosed && scrollY === 0,
        })}>
        <button
          aria-label={showResponsiveSidebar ? 'Close Menu' : 'Open Menu'}
          aria-haspopup="true"
          className="button button--secondary button--sm menu__button"
          type="button"
          onClick={() => {
            setShowResponsiveSidebar(!showResponsiveSidebar);
          }}>
          {showResponsiveSidebar ? (
            <span
              className={clsx(
                styles.sidebarMenuIcon,
                styles.sidebarMenuCloseIcon,
              )}>
              &times;
            </span>
          ) : (
            <svg
              aria-label="Menu"
              className={styles.sidebarMenuIcon}
              xmlns="http://www.w3.org/2000/svg"
              height={MOBILE_TOGGLE_SIZE}
              width={MOBILE_TOGGLE_SIZE}
              viewBox="0 0 32 32"
              role="img"
              focusable="false">
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          )}
        </button>
          <div>
          <a className="navbar-brand" href="#"
             onClick={handleReset}>Clear Filter</a>
          </div>

        <div><input type="text" value={query} onChange={changeQuery}
                    placeholder="Search..."/>
        </div>
        <ul className="menu__list">
            {
                Object.entries(aggregations).map(([key, value]) => {
                    return (
                        <DocSidebarItemCategory
                            key={key}
                            item={value}
                            onItemClick={(e) => {
                                e.target.blur();
                                setShowResponsiveSidebar(false);

                            }}
                            collapsible={sidebarCollapsible}
                            // activePath={path}
                            filters={filters}
                            handleCheckbox={handleCheckbox}
                        />

                    )
                })
            }


          {/*{sidebar.map((item) => (*/}
          {/*  <DocSidebarItemCategory*/}
          {/*    key={item.label}*/}
          {/*    item={item}*/}
          {/*    onItemClick={(e) => {*/}
          {/*      e.target.blur();*/}
          {/*      setShowResponsiveSidebar(false);*/}

          {/*    }}*/}
          {/*    collapsible={sidebarCollapsible}*/}
          {/*    // activePath={path}*/}
          {/*  />*/}
          {/*))}*/}
        </ul>
      </div>
    </div>
  );
}

export default DocSidebar;
