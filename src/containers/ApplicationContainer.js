import React, { useEffect } from "react"
import useStore from "./../store/UseStore"
import { getUserList, handleOnChangeTextInput } from "./../actions/commonAction"
import SearchInput from "./../components/SearchInput/SearchInput"
import AccordianData from "./../components/AccordianData/AccordianData"

export const ApplicationContainer = () => {
  const [state, dispatch] = useStore()
  useEffect(() => {
    if (state["common"].userList === null) {
      getUserList(dispatch)
    }
  })

  const handleOnChange = (field, data) => {
    dispatch(handleOnChangeTextInput(field, data))
  }

  const { common } = state
  const { searchInput } = common
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
          sequenceArray={["phone", "email"]}
        />
      }

    </div>
  )
}