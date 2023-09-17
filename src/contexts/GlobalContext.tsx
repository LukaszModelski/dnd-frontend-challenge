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
  getIcon: (
    pathLabel: string,
    iconName: IconName
  ) => { pathIndex: number; iconIndex: number; isActive: boolean }
} & ConfigType

const contextStateManager = (
  initialGlobalContext: ConfigType
): GlobalContextType => {
  const [state, setState] = useState(initialGlobalContext)

  // useEffect(() => {
  //   updateSpentPoints()
  // }, [state.paths])

  const getPathIndex = (pathLabel: string): number =>
    state.paths.findIndex((path) => path.label === pathLabel)

  const getIcon: GlobalContextType['getIcon'] = (
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

  const getSpentPoints = (state: ConfigType): number => {
    let numberOfPoints = 0
    state.paths.forEach((path) =>
      path.talents.forEach((talent) => {
        if (talent.active) numberOfPoints++
      })
    )
    return numberOfPoints
  }

  const buyTalentPoint: GlobalContextType['buyTalentPoint'] = (
    pathLabel,
    iconName
  ) => {
    setState((prevState) => {
      const stateClone = cloneRawObj(prevState)
      const { pathIndex, iconIndex } = getIcon(pathLabel, iconName)
      stateClone.paths[pathIndex].talents[iconIndex].active = true
      stateClone.pointsSpent = getSpentPoints(stateClone)
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
      stateClone.pointsSpent = getSpentPoints(stateClone)
      return stateClone
    })
  }

  const canBuyTalentPoint: GlobalContextType['canBuyTalentPoint'] = (
    pathLabel,
    iconIndex
  ) => {
    if (state.maxPoints <= state.pointsSpent) {
      return false
    }

    if (iconIndex === 0 && state.maxPoints > state.pointsSpent) {
      return true
    }

    const pathIndex = getPathIndex(pathLabel)
    return !!state.paths[pathIndex].talents[iconIndex - 1].active
  }

  return {
    ...state,
    buyTalentPoint,
    removeTalentPoints,
    canBuyTalentPoint,
    getIcon
  }
}

const GlobalContext = createContext(config as GlobalContextType)

export const GlobalContextProvider = ({ children }: ChildrenType) => (
  <GlobalContext.Provider value={contextStateManager(config)}>
    {children}
  </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext)
