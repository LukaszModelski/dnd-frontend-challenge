export type IconName =
  | 'chevrons'
  | 'chevrons-active'
  | 'silverware'
  | 'silverware-active'
  | 'cake'
  | 'cake-active'
  | 'crown'
  | 'crown-active'
  | 'ship'
  | 'ship-active'
  | 'mask'
  | 'mask-active'
  | 'thunder'
  | 'thunder-active'
  | 'skull'
  | 'skull-active'

export const iconSize = 50

const mapIconToSpritePosition: Record<IconName, { top: number; left: number }> =
  {
    chevrons: {
      top: iconSize,
      left: 0
    },
    ['chevrons-active']: {
      top: 0,
      left: 0
    },
    silverware: {
      top: iconSize,
      left: iconSize
    },
    ['silverware-active']: {
      top: 0,
      left: iconSize
    },
    cake: {
      top: iconSize,
      left: iconSize * 2
    },
    ['cake-active']: {
      top: 0,
      left: iconSize * 2
    },
    crown: {
      top: iconSize,
      left: iconSize * 3
    },
    ['crown-active']: {
      top: 0,
      left: iconSize * 3
    },
    ship: {
      top: iconSize,
      left: iconSize * 4
    },
    ['ship-active']: {
      top: 0,
      left: iconSize * 4
    },
    mask: {
      top: iconSize,
      left: iconSize * 5
    },
    ['mask-active']: {
      top: 0,
      left: iconSize * 5
    },
    thunder: {
      top: iconSize,
      left: iconSize * 6
    },
    ['thunder-active']: {
      top: 0,
      left: iconSize * 6
    },
    skull: {
      top: iconSize,
      left: iconSize * 7
    },
    ['skull-active']: {
      top: 0,
      left: iconSize * 7
    }
  }

export const getIcon = (icon: IconName) => {
  const { top, left } = mapIconToSpritePosition[icon]

  return `
    background-image: url(./public/talent-icons-sprite-min.png);
    background-size: auto ${2 * iconSize}px;
    background-position: -${left}px ${top}px;
  `
}
