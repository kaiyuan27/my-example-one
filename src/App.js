import React, { Component } from "react"
// import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./assets/applicationCss.css"
import "./App.css"
import Store from "./store/Store"
import { route } from "./api/httpsApi"
import { ApplicationContainer } from "./containers/ApplicationContainer"
import rootReducer from "./reducers/index"

export const detectPathName = () => {
  const router = route
  let pn = window.location.pathname
  return pn.replace(router.filter(a => pn.indexOf(a) !== -1)[0], "")
}

class App extends Component {
  render() {
    return (
      <Store rootReducer={rootReducer}>
        <BrowserRouter>
          <Switch>
            <Route exact path={`${detectPathName()}`} component={ApplicationContainer} />
          </Switch>
        </BrowserRouter>
      </Store>
    )
  }
}

export default App
