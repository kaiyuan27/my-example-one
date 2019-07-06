import React, { useReducer } from "react"
import PropTypes from "prop-types"
import StoreContext from "./StoreContext"

const Store = props => {
  const { rootReducer, initialValue } = props
  const initialState = rootReducer(initialValue, { type: "__INIT__" })
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  )
}

Store.propTypes = {
  rootReducer: PropTypes.func,
  initialValue: PropTypes.object,
  children: PropTypes.node
}

export default Store