import { func, string } from 'prop-types'
import React from 'react'
import Search from './Search'

function SearchInput({ placeholder, value, onChange, ...props }) {
  const inputElement = React.useRef(null)

  function handleKeyDown(event) {
    if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div {...props}>


        <Search name="search" />

      <input
        ref={inputElement}
        type="search"
        aria-label="Search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}

      />
    </div>
  )
}

SearchInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
}

export default SearchInput
