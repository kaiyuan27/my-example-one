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
    dispatch({
      type: types.SET_GET_LIST_STATUS,
      statusCode: e.response.status.toString()
    })
  })
}

export const handleOnChangeTextInput = (field, data) => {
  return {
    type: types.HANDLE_ON_CHANGE_TEXT_INPUT,
    field,
    data
  }
}