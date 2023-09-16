import React, { createContext, useContext } from 'react'
import { config } from '../App.config'

type ChildrenType = {
  children: JSX.Element | JSX.Element[]
}

const initialGlobalContext = {
  ...config
}

const GlobalContext = createContext(initialGlobalContext)

export const GlobalContextProvider = ({ children }: ChildrenType) => (
  <GlobalContext.Provider value={initialGlobalContext}>
    {children}
  </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext)
