import React from "react"
import PropTypes from "prop-types"

const WrapContainer = (props) => {
  return (
    <div className="body-container">
      <div className="wrap-container">
        <div className="header"> Contact </div>
        {props.children}
      </div>

    </div>
  )
}

WrapContainer.propTypes = {
  children: PropTypes.node
}

export default WrapContainer