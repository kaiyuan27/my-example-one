import React, { useEffect } from "react"
import useStore from "./../store/UseStore"
import { getUserList, handleOnChangeTextInput, openAccordianList } from "./../actions/commonAction"
import SearchInput from "./../components/SearchInput/SearchInput"
import AccordianData from "./../components/AccordianData/AccordianData"
import WrapContainer from "./WrapContainer"

export const ApplicationContainer = () => {
  const [state, dispatch] = useStore()
  const { common } = state
  const { searchInput, openUserListID, fliteredUserList } = common

  useEffect(() => {
    if (state["common"].userList === null) {
      getUserList(dispatch)
    }
  })

  const handleOnChange = (field, data) => {
    handleOnChangeTextInput(field, data, dispatch, common.userList)
  }

  const arrayInObject = [
    {
      array: ["street", "suite", "city", "zipcode"]
    }
  ]

  const onClick = (data) => {
    if (common.openUserListID.id === data) {
      dispatch(openAccordianList(data, !openUserListID.openStatus))
    } else {
      dispatch(openAccordianList(data, true))
    }
  }

  return (
    <WrapContainer>
      <div className="application-container">
        <SearchInput
          labelText={"Enter Keyword"}
          value={searchInput.value}
          onChange={(data) => handleOnChange("searchInput", data)}
        />
        <div className="common-separator" />
        {common.fliteredUserList !== null &&
          <AccordianData
            data={fliteredUserList}
            headerParameter={"name"}
            sequenceArray={["phone", "email", "address"]}
            sequenceLabel={["Mobile", "Email", "Address"]}
            objectInObject={["address"]}
            sequenceInObject={arrayInObject}
            idValue={openUserListID.id}
            openStatus={openUserListID.openStatus}
            onClick={(data) => onClick(data)}
          />
        }

      </div>
    </WrapContainer>

  )
}