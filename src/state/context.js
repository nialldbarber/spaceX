import React, { createContext } from 'react'

const initialState = {
  theme: 'dark'
}

export const WrapperContext = createContext(initialState)

export const WrapperProvider = (props) => <WrapperContext.Provider value={initialState} {...props} />
