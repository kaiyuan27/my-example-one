import React from "react"
import PropTypes from "prop-types"

const SearchInput = props => {
  const { value, onChange, labelText } = props
  const handleOnChange = e => {
    let val = e.target.value
    const data = {
      value: val,
      isValid: true,
      errorMsg: ""
    }

    onChange(data)
  }
  const withoutValue = value === "" ? "--withoutValue" : ""
  return (
    <div id="searchInput-container">
      <label className={`searchInputLabel${withoutValue}`}>{labelText}</label>
      <input
        value={value}
        onChange={(e) => handleOnChange(e)}
        type="text"
      />
    </div>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string
}

export default SearchInput