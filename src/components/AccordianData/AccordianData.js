import React from "react"
import PropTypes from "prop-types"

const OpenAccordianData = props => {
  const { individualData, sequenceArray } = props
  return (
    <div id="OpenAccordianData-container">
      {
        sequenceArray.map((name, i) => {
          return (
            <div key={i}>
              {individualData[name]}
            </div>
          )
        })
      }
    </div>
  )
}
const AccordianData = props => {
  const { data, headerParameter, sequenceArray } = props

  return (
    <div id="AccordianData-container">
      <div></div>
      {
        data.map((individualData, i) => {
          return (
            <div key={i}>
              <div>{individualData[headerParameter]}</div>
              <OpenAccordianData
                individualData={individualData}
                sequenceArray={sequenceArray}
              />
            </div>
          )
        })
      }
    </div>
  )
}

AccordianData.propTypes = {
  data: PropTypes.array,
  headerParameter: PropTypes.string,
  sequenceArray: PropTypes.array
}

OpenAccordianData.propTypes = {
  individualData: PropTypes.object,
  sequenceArray: PropTypes.array
}

export default AccordianData