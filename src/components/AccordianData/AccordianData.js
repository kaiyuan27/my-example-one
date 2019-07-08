import React from "react"
import PropTypes from "prop-types"

import "./AccordianData.css"

const htmlType = (type) => {
  let data = ""
  let image = ""
  switch (type) {
    case "phone":
      data = "tel:"
      image = "phoneIcon.svg"
      break
    case "email":
      data = "mailto:"
      image = "emailIcon.svg"
      break
    case "address":
      data = ""
      image = "locationIcon.svg"
      break
    default:
      data = ""
      break
  }
  return { data, image }
}

const OpenAccordianData = props => {
  const { individualData, sequenceArray, sequenceLabel, objectInObject, sequenceInObject } = props
  const individualValue =
    sequenceArray.map((name, i) => {
      let value = []
      let desc = ""
      let image = ""
      if (objectInObject.indexOf(name) >= 0) {
        const loopSequence = sequenceInObject[objectInObject.indexOf(name)].array
        loopSequence.map((loopName, x) => {
          value.push(
            htmlType(loopName).data !== "" ?
              <a key={x} href={`${htmlType(loopName).data}${individualData[name][loopName]}`} > {individualData[name][loopName]} </a> :
              <div key={x} >{individualData[name][loopName]}</div>)
          return value
        })
        const mapURL = name === "address" && individualData[name].geo && individualData[name].geo.lat && individualData[name].geo.lng ? `https://maps.google.com/?ll=${individualData[name].geo.lat},${individualData[name].geo.lng}` : ""

        image = htmlType(name).image !== "" && name === "address" ?
          <a key={i} href={`${mapURL}`} target="_blank" rel="noopener noreferrer" > <img alt="icon" src={`./images/${htmlType(name).image}`} /> </a> :
          <div key={i}><img alt="icon" src={`./images/${htmlType(name).image}`} /></div>

        desc = <div>{sequenceLabel[i]}</div>

      } else {
        value.push(htmlType(name).data !== "" ?
          <a key={i} href={`${htmlType(name).data}${individualData[name]}`} > {individualData[name]} </a> :
          <div key={i}>{individualData[name]}</div>)

        desc = <div key={i}>{sequenceLabel[i]}</div>
        image = htmlType(name).image !== "" ?
          <a key={i} href={`${htmlType(name).data}${individualData[name]}`} > <img alt="icon" src={`./images/${htmlType(name).image}`} /> </a> :
          <div key={i}><img alt="icon" src={`./images/${htmlType(name).image}`} /></div>
      }

      return (
        <div className="accordian-desc-value-container" key={i}>
          <div className="accordian-desc-value">
            <div id="openAccordianData-value">
              {value}
            </div>
            <div id="openAccordianData-desc">
              {desc}
            </div>
          </div>
          <div id="openAccordianData-img">
            {image}
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
                <div className={idValue === (individualData.id.toString()) && openStatus ? "open-accordian-arrow" : "close-accordian-arrow"}> &#9660; </div>
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