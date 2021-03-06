import * as types from "./../actions/actionsTypes"

export const initialState = {
  appData: null,
  userList: null,
  fliteredUserList: null,
  getListStatus: {
    successful: false,
    error: ""
  },
  searchInput: {
    name: "searchInput",
    value: "",
    errorMsg: "",
    isValid: true
  },
  openUserListID: {
    id: "",
    openStatus: true
  }
}

export const commonReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_USER_LIST:
      return {
        ...state,
        userList: actions.userList,
        fliteredUserList: actions.fliteredUserList,
        getListStatus: {
          ...state.getListStatus,
          successful: true
        }
      }

    case types.SET_GET_LIST_STATUS:
      return {
        ...state,
        getListStatus: {
          successful: false,
          error: actions.statusCode
        }
      }

    case types.HANDLE_ON_CHANGE_TEXT_INPUT:
      return {
        ...state,
        [actions.field]: {
          ...state[actions.field],
          value: actions.data.value,
          errorMsg: actions.data.errorMsg,
          isValid: actions.data.isValid
        }
      }

    case types.FILTERED_USER_LIST:
      return {
        ...state,
        fliteredUserList: actions.fliteredUserList
      }

    case types.OPEN_ACCORDIAN_ID:
      return {
        ...state,
        openUserListID: { id: actions.data, openStatus: actions.openStatus }
      }

    default:
      return state
  }
}
