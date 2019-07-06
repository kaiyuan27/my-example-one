/*global GLOBAL_CONFIG */
import axios from "axios"

const route = GLOBAL_CONFIG.ROUTE
const getUserListURL = GLOBAL_CONFIG.API_PATH
const httpApi = axios.create()
httpApi.defaults.timeout = GLOBAL_CONFIG.TIMEOUT

const Application = {
  getUserList: () => {
    return new Promise((resolve, reject) => {
      httpApi.get(getUserListURL).then(response => {
        resolve(response)
      }).catch(e => {
        reject(e)
      })
    })
  }
}

export {
  Application,
  route
}