import { IconName } from './styles/icons'

export type ConfigType = {
  maxPoints: number
  paths: {
    label: string
    talents: {
      iconName: IconName
      active?: boolean
    }[]
  }[]
}

export const config: ConfigType = {
  maxPoints: 6,
  paths: [
    {
      label: 'Talent Path 1',
      talents: [
        { iconName: 'chevrons' },
        { iconName: 'silverware' },
        { iconName: 'cake' },
        { iconName: 'crown' }
      ]
    },
    {
      label: 'Talent Path 2',
      talents: [
        { iconName: 'ship' },
        { iconName: 'mask' },
        { iconName: 'thunder' },
        { iconName: 'skull' }
      ]
    }
  ]
}
