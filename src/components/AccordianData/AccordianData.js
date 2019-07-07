import React from "react"
import PropTypes from "prop-types"

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
        <div key={i}>
          <div id="openAccodianData-desc">
            {desc}
          </div>
          <div id="openAccodianData-value">
            {value}
          </div>
        </div>
      )
    })

  return (
    <div id="OpenAccordianData-container">
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
    onClick
  } = props

  return (
    <div id="AccordianData-container">
      <div></div>
      {
        data.map((individualData, i) => {
          return (
            <div key={i}>
              <div
                onClick={() => onClick && onClick(individualData.id.toString())}
              >
                {individualData[headerParameter]}
              </div>

              {idValue === (individualData.id.toString()) &&
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
    </div>
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
  onClick: PropTypes.func
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