import PropTypes from "prop-types";
import React from "react";
import clsx from 'clsx';
import styles from "./styles.module.css";


// import { appendClassName } from "./view-helpers";

function PagingInfo({
  className,
  end,
  searchTerm,
  start,
  totalResults,
  ...rest
}) {
  return (
    <div className={clsx(styles.paging_info, className)} {...rest}>
      Showing{" "}
      <strong>
        {start} - {end}
      </strong>{" "}
      out of <strong>{totalResults}</strong>
      {searchTerm && (
        <>
          {" "}
          for: <em>{searchTerm}</em>
        </>
      )}
    </div>
  );
}

PagingInfo.propTypes = {
  end: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default PagingInfo;
