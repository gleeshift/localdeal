import React, {Component, Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}

function Pagination({totalRecords= 0, pageSize = 30,
                        pageNeighbours = 2, initPage = 1,  onPageChanged}) {

    console.log("initpage=" + initPage);
    const [currentPage, setCurrentPage] = useState(initPage);
    console.log("currentPage=" + currentPage);
    // setCurrentPage(initPage);
    console.log("currentPage=" + currentPage);

     const totalPages = Math.ceil(totalRecords / pageSize);

    // useEffect(() => {
    //     // document.title = `You clicked ${count} times`;
    //     // gotoPage(initPage)
    // });

    useEffect(() => {
        setCurrentPage(initPage)
    }, [initPage]);


    function gotoPage(page) {

        const currentPage = Math.max(0, Math.min(page, totalPages));

        setCurrentPage(currentPage);
        const paginationData = {
            currentPage,
            totalPages,
            pageSize,
            totalRecords
        };

        if(onPageChanged) {
            onPageChanged(paginationData);
        }
    }

    function handleClick(event, page) {
        console.log(event);
        console.log(page);
        if(event) event.preventDefault();
        gotoPage(page);
    }

    function handleMoveLeft(event) {
        console.log(event);
        // console.log(page);
        if(event) event.preventDefault();
        const page = currentPage - (pageNeighbours * 2) - 1;
        gotoPage(page);
    }

    function handleMoveRight(event) {
        console.log(event);
        // console.log(page);
        if(event) event.preventDefault();
        const page = currentPage + (pageNeighbours * 2) + 1;
        gotoPage(page);
    }


    /**
     * Let's say we have 10 pages and we set pageNeighbours to 2
     * Given that the current page is 6
     * The pagination control will look like the following:
     *
     * (1) < {4 5} [6] {7 8} > (10)
     *
     * (x) => terminal pages: first and last page(always visible)
     * [x] => represents current page
     * {...x} => represents page neighbours
     */
     function fetchPageNumbers(){



        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
         */
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {

            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
            let extraPages = [];

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];

        }

        return range(1, totalPages);

    }



        if (!totalRecords || totalPages === 1) return null;


        const pages = fetchPageNumbers();

        /**
         * <ul class="pagination">
         <li class="pagination__item disabled">
         <a class="pagination__link" href="#url">
         «
         </a>
         </li>
         <li class="pagination__item">
         <a class="pagination__link" href="#url">
         1
         </a>
         </li>
         <li class="pagination__item pagination__item--active">
         <a class="pagination__link" href="#url">
         2
         </a>
         </li>
         <li class="pagination__item">
         <a class="pagination__link" href="#url">
         3
         </a>
         </li>
         <li class="pagination__item">
         <span>...</span>
         </li>
         <li class="pagination__item">
         <a class="pagination__link" href="#url">
         »
         </a>
         </li>
         </ul>
         */
        return (
            <Fragment>
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        { pages.map((page, index) => {

                            if (page === LEFT_PAGE) return (
                                <li key={index} className="pagination__item">
                                    <a className="pagination__link" href="#" aria-label="Previous" onClick={(event) => handleMoveLeft(event)}>
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                            );

                            if (page === RIGHT_PAGE) return (
                                <li key={index} className="pagination__item">
                                    <a className="pagination__link" href="#" aria-label="Next" onClick={(event) => handleMoveRight(event)}>
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            );

                            return (
                                <li key={index} className={`pagination__item ${ currentPage === page ? ' pagination__item--active' : ''}`}>
                                    <a className="pagination__link" href="#" onClick={ (event) => handleClick(event, page) }>{ page }</a>
                                </li>
                            );

                        }) }

                    </ul>
                </nav>
            </Fragment>
        );

    }


Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};

export default Pagination;