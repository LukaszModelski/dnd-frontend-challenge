import { ConfigType } from '../App.config'
import { IconName } from '../styles/icons'

export type ChildrenType = {
  children: JSX.Element | JSX.Element[]
}

export type GlobalContextType = {
  getPathIndex?: (pathLabel: string) => number
  getIcon: (
    pathLabel: string,
    iconName: IconName
  ) => { pathIndex: number; iconIndex: number; isActive: boolean }
  getSpentPointsNumber?: (state: ConfigType) => number
  buyTalentPoint: (pathLabel: string, iconName: IconName) => void
  removeTalentPoints: (pathLabel: string, iconName: IconName) => void
  canBuyTalentPoint?: (pathLabel: string, iconIndex: number) => boolean
} & ConfigType
