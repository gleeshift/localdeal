import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import clsx from 'clsx';
import styles from "./styles.module.css";



const setDefaultStyle = {
  option: () => ({}),
  control: () => ({}),
  dropdownIndicator: () => ({}),
  indicatorSeparator: () => ({})
};

function Sorting({ className, label, onChange, options, value, ...rest }) {
  const selectedValue = value;

  const selectedOption = selectedValue
    ? options.find(option => option.value === selectedValue)
    : null;

  return (
    <div className={clsx(styles.sorting, className)} {...rest}>
      {label && <div className={styles.sorting__label}>{label}</div>}
      <Select
          className="select"
          classNamePrefix="select"
          value={selectedOption}
          onChange={o => onChange(o.value)}
          options={options}
          isSearchable={false}
          styles={setDefaultStyle}
      />
    </div>
  );
}


export default Sorting;
