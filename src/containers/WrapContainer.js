import React from "react"
import PropTypes from "prop-types"

const WrapContainer = (props) => {
  return (
    <div className="body-container">
      {props.children}
    </div>
  )
}

WrapContainer.propTypes = {
  children: PropTypes.node
}

export default WrapContainer