import React, { useEffect } from "react"
import useStore from "./../store/UseStore"
import { getUserList, handleOnChangeTextInput, openAccordianList } from "./../actions/commonAction"
import SearchInput from "./../components/SearchInput/SearchInput"
import AccordianData from "./../components/AccordianData/AccordianData"

export const ApplicationContainer = () => {
  const [state, dispatch] = useStore()
  const { common } = state
  const { searchInput } = common

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
    dispatch(openAccordianList(data))
  }

  return (
    <div>
      <SearchInput
        labelText={"Enter Keyword"}
        value={searchInput.value}
        onChange={(data) => handleOnChange("searchInput", data)}
      />

      {common.fliteredUserList !== null &&
        <AccordianData
          data={common.fliteredUserList}
          headerParameter={"name"}
          sequenceArray={["phone", "email", "address"]}
          sequenceLabel={["Mobile", "Email", "Address"]}
          objectInObject={["address"]}
          sequenceInObject={arrayInObject}
          idValue={common.openUserListID}
          onClick={(data) => onClick(data)}
        />
      }

    </div>
  )
}