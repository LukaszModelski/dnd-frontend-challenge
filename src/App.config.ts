import { IconName } from './styles/icons'

export type ConfigType = {
  loadout: {
    maxPoints: number
    paths: {
      label: string
      talents: {
        iconName: IconName
      }[]
    }[]
  }
}

export const config: ConfigType = {
  loadout: {
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
}
