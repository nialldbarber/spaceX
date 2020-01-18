import React, { createContext, useReducer } from 'react'
// Reducer
import { themeReducer } from 'state/reducers/theme'
// Constants
import { CHANGE_MODE } from 'state/constants/theme'

const initialState = {
  theme: false
}

export const WrapperContext = createContext(initialState)

export const WrapperProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  const changeTheme = () => {
    if (!state.theme) {
      localStorage.setItem('name', 'niall')
    } else {
      localStorage.setItem('name', 'dana')
    }
    dispatch({ type: CHANGE_MODE })
  }

  const user = localStorage.getItem('name')

  return <WrapperContext.Provider value={{ theme: state.theme, changeTheme, user }} {...props} />
}
