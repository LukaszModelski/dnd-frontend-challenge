import { ConfigType } from '../App.config'

const talentPoints = 'talentPoints'

export const saveTalentsInStorage = (state: ConfigType): void => {
  localStorage?.setItem(talentPoints, JSON.stringify(state))
}

export const getTalentsFromStorage = (): ConfigType | null => {
  const dataString = localStorage?.getItem(talentPoints)
  return dataString ? JSON.parse(dataString) : null
}
