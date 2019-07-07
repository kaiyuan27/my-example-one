import * as types from "./actionsTypes"
import { Application } from "./../api/httpsApi"

export const getUserList = (dispatch) => {
  Application.getUserList().then((response) => {
    dispatch({
      type: types.GET_USER_LIST,
      userList: response.data,
      fliteredUserList: response.data
    })
  }).catch((e) => {
    if (e.response) {
      dispatch({
        type: types.SET_GET_LIST_STATUS
      })
    }
  })
}

export const handleOnChangeTextInput = (field, data, dispatch, userList) => {
  dispatch({
    type: types.HANDLE_ON_CHANGE_TEXT_INPUT,
    field,
    data
  })

  filterUserList(data.value, dispatch, userList)
}

export const filterUserList = (value, dispatch, userList) => {
  // eslint-disable-next-line no-unused-vars
  const fliteredUserList = userList.filter(function (x, i) {
    const name = x.name ? x.name.toLowerCase() : ""
    const email = x.email ? x.email.toLowerCase() : ""
    const searchValue = value ? value.toLowerCase() : ""
    return name.includes(searchValue) || email.includes(searchValue)
  })

  dispatch({
    type: types.FILTERED_USER_LIST,
    fliteredUserList: [...fliteredUserList]
  })
}

export const openAccordianList = (data) => {
  return {
    type: types.OPEN_ACCORDIAN_ID,
    data
  }
}
