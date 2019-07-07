import React from "react"
import PropTypes from "prop-types"

import "./AccordianData.css"

const htmlType = (type) => {
  let data = ""
  switch (type) {
    case "phone":
      data = "tel:"
      break
    case "email":
      data = "mailto:"
      break
    default:
      data = ""
      break
  }
  return data
}

const OpenAccordianData = props => {
  const { individualData, sequenceArray, sequenceLabel, objectInObject, sequenceInObject } = props
  const individualValue =
    sequenceArray.map((name, i) => {
      let value = []
      let desc = ""
      if (objectInObject.indexOf(name) >= 0) {
        const loopSequence = sequenceInObject[objectInObject.indexOf(name)].array
        loopSequence.map((loopName, x) => {
          value.push(
            htmlType(loopName) !== "" ?
              <a key={x} href={`${htmlType(loopName)}${individualData[name][loopName]}`} > {individualData[name][loopName]} </a> :
              <div key={x} >{individualData[name][loopName]}</div>)
          return value
        })

        desc = <div>{sequenceLabel[i]}</div>
      } else {
        value.push(htmlType(name) !== "" ?
          <a key={i} href={`${htmlType(name)}${individualData[name]}`} > {individualData[name]} </a> :
          <div key={i}>{individualData[name]}</div>)

        desc = <div key={i}>{sequenceLabel[i]}</div>
      }

      return (
        <div className="accordian-desc-value" key={i}>
          <div id="openAccordianData-desc">
            {desc}
          </div>
          <div id="openAccordianData-value">
            {value}
          </div>
        </div>
      )
    })

  return (
    <div className="openAccordianData-container">
      {individualValue}
    </div>
  )
}

const AccordianData = props => {
  const {
    data,
    headerParameter,
    sequenceArray,
    sequenceLabel,
    objectInObject,
    sequenceInObject,
    idValue,
    onClick,
    openStatus
  } = props

  const detectKeyCode = (e, value) => {
    if (e.keyCode === 13) {
      onClick && onClick(value)
    }
  }

  return (
    <div id="accordianData-full-container">
      {
        data.map((individualData, i) => {
          return (
            <div className="accordianData-container"
              tabIndex="0"
              key={i}
              onKeyDown={(e) => detectKeyCode(e, individualData.id.toString())}
            >
              <div
                className="accordianData-header-container"
                onClick={() => onClick && onClick(individualData.id.toString())}
              >
                <div className="circle-icon">
                  {individualData[headerParameter].charAt(0)}
                </div>
                <div className="accordianData-header-value-container">
                  <label className="accordianData-header-value">{individualData[headerParameter]}</label>
                </div>
              </div>

              {idValue === (individualData.id.toString()) && openStatus &&
                <OpenAccordianData
                  individualData={individualData}
                  sequenceArray={sequenceArray}
                  sequenceLabel={sequenceLabel}
                  objectInObject={objectInObject}
                  sequenceInObject={sequenceInObject}
                />
              }
            </div>
          )
        })
      }
    </div >
  )
}

AccordianData.propTypes = {
  data: PropTypes.array,
  headerParameter: PropTypes.string,
  sequenceArray: PropTypes.array,
  sequenceLabel: PropTypes.array,
  objectInObject: PropTypes.array,
  sequenceInObject: PropTypes.array,
  idValue: PropTypes.string,
  onClick: PropTypes.func,
  openStatus: PropTypes.bool
}

OpenAccordianData.propTypes = {
  individualData: PropTypes.object,
  sequenceArray: PropTypes.array,
  sequenceLabel: PropTypes.array,
  objectInObject: PropTypes.array,
  sequenceInObject: PropTypes.array,
  onClick: PropTypes.func
}

export default AccordianData