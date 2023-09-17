import React, { createContext, useContext, useState } from 'react'
import { config, ConfigType } from '../App.config'
import { IconName } from '../styles/icons'
import { cloneRawObj } from '../utils/cloneRawObj'

type ChildrenType = {
  children: JSX.Element | JSX.Element[]
}

type GlobalContextType = {
  buyTalentPoint: (pathLabel: string, iconName: IconName) => void
  removeTalentPoints: (pathLabel: string, iconName: IconName) => void
  canBuyTalentPoint: (pathLabel: string, iconIndex: number) => boolean
} & ConfigType

const contextStateManager = (
  initialGlobalContext: ConfigType
): GlobalContextType => {
  const [state, setState] = useState(initialGlobalContext)

  const getPathIndex = (pathLabel: string): number =>
    state.paths.findIndex((path) => path.label === pathLabel)

  const getIcon = (
    pathLabel: string,
    iconName: IconName
  ): { pathIndex: number; iconIndex: number; isActive: boolean } => {
    const pathIndex = getPathIndex(pathLabel)
    const iconIndex = state.paths[pathIndex].talents.findIndex(
      (icon) => icon.iconName === iconName
    )
    const isActive = !!state.paths[pathIndex].talents[iconIndex].active
    return { pathIndex, iconIndex, isActive }
  }

  const buyTalentPoint: GlobalContextType['buyTalentPoint'] = (
    pathLabel,
    iconName
  ) => {
    setState((prevState) => {
      const stateClone = cloneRawObj(prevState)
      const { pathIndex, iconIndex } = getIcon(pathLabel, iconName)
      stateClone.paths[pathIndex].talents[iconIndex].active = true
      return stateClone
    })
  }

  const removeTalentPoints: GlobalContextType['removeTalentPoints'] = (
    pathLabel,
    iconName
  ) => {
    setState((prevState) => {
      const stateClone = cloneRawObj(prevState)
      const { pathIndex, iconIndex } = getIcon(pathLabel, iconName)
      const talentsLength = stateClone.paths[pathIndex].talents.length
      for (let i = iconIndex; i < talentsLength; i++) {
        stateClone.paths[pathIndex].talents[i].active = false
      }
      return stateClone
    })
  }

  const canBuyTalentPoint: GlobalContextType['canBuyTalentPoint'] = (
    pathLabel,
    iconIndex
  ) => {
    if (iconIndex === 0) {
      return true
    }

    const pathIndex = getPathIndex(pathLabel)
    return !!state.paths[pathIndex].talents[iconIndex - 1].active
  }

  return {
    ...state,
    buyTalentPoint,
    removeTalentPoints,
    canBuyTalentPoint
  }
}

const GlobalContext = createContext(config as GlobalContextType)

export const GlobalContextProvider = ({ children }: ChildrenType) => (
  <GlobalContext.Provider value={contextStateManager(config)}>
    {children}
  </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext)
