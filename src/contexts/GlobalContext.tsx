import React, { createContext, useContext, useState } from 'react'
import { config, ConfigType } from '../App.config'
import { IconName } from '../styles/icons'
import { cloneRawObj } from '../utils/cloneRawObj'
import {
  getTalentsFromStorage,
  saveTalentsInStorage
} from '../utils/localStorage'
import { GlobalContextType, ChildrenType } from './GlobalContext.types'

const stateFromLocalStorage = getTalentsFromStorage()
const initState = stateFromLocalStorage || config

const contextStateManager = (
  initialGlobalContext: ConfigType
): GlobalContextType => {
  const [state, setState] = useState(initialGlobalContext)

  const getPathIndex: GlobalContextType['getPathIndex'] = (pathLabel) =>
    state.paths.findIndex((path) => path.label === pathLabel)

  const getIcon: GlobalContextType['getIcon'] = (
    pathLabel: string,
    iconName: IconName
  ) => {
    const pathIndex = getPathIndex(pathLabel)
    const iconIndex = state.paths[pathIndex].talents.findIndex(
      (icon) => icon.iconName === iconName
    )
    const isActive = !!state.paths[pathIndex].talents[iconIndex].active
    return { pathIndex, iconIndex, isActive }
  }

  const getSpentPointsNumber: GlobalContextType['getSpentPointsNumber'] = (
    state
  ) => {
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
    const { iconIndex, pathIndex } = getIcon(pathLabel, iconName)
    if (canBuyTalentPoint && canBuyTalentPoint(pathLabel, iconIndex)) {
      setState((prevState) => {
        const stateClone = cloneRawObj(prevState)
        stateClone.paths[pathIndex].talents[iconIndex].active = true
        stateClone.pointsSpent = getSpentPointsNumber(stateClone)
        saveTalentsInStorage(stateClone)
        return stateClone
      })
    }
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
      stateClone.pointsSpent = getSpentPointsNumber(stateClone)
      saveTalentsInStorage(stateClone)
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
    getIcon
  }
}

const GlobalContext = createContext(initState as GlobalContextType)

export const GlobalContextProvider = ({ children }: ChildrenType) => (
  <GlobalContext.Provider value={contextStateManager(initState)}>
    {children}
  </GlobalContext.Provider>
)

export const useGlobalContext = () => useContext(GlobalContext)
