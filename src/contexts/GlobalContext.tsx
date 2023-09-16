import React, { createContext, useContext } from 'react'
import { config, ConfigType } from '../App.config'
import { IconName } from '../styles/icons'

type ChildrenType = {
  children: JSX.Element | JSX.Element[]
}

type GlobalContextType = {
  setIconActive: (pathLabel: string, iconName: IconName) => void
} & ConfigType

const initialGlobalContext: GlobalContextType = {
  ...config,
  setIconActive: (pathLabel, iconName) => {}
}

const GlobalContext = createContext(initialGlobalContext)

export const GlobalContextProvider = ({ children }: ChildrenType) => (
  <GlobalContext.Provider value={initialGlobalContext}>
    {children}
  </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext)
