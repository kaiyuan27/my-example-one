import React from "react"
import PropTypes from "prop-types"
import "./SearchInput.css"

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
  let searchImage = "./images/searchIcon.svg"
  return (
    <div id="searchInput-container">
      <div className="search-icon-container">
        <img src={searchImage} alt="search" />
      </div>
      <div className="searchInput-field-container">
        <label className={`searchInputLabel${withoutValue}`}>{labelText}</label>
        <input
          className="searchInput-field"
          value={value}
          onChange={(e) => handleOnChange(e)}
          type="text"
        />
      </div>

    </div>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string
}

export default SearchInput