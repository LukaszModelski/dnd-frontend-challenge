export type IconName =
  | 'chevrons'
  | 'silverware'
  | 'cake'
  | 'crown'
  | 'ship'
  | 'mask'
  | 'thunder'
  | 'skull'

export const iconSize = 50

const mapIconToSpritePosition: Record<IconName, { left: number }> = {
  chevrons: { left: 0 },
  silverware: { left: iconSize },
  cake: { left: iconSize * 2 },
  crown: { left: iconSize * 3 },
  ship: { left: iconSize * 4 },
  mask: { left: iconSize * 5 },
  thunder: { left: iconSize * 6 },
  skull: { left: iconSize * 7 }
}

export const getIcon = (icon: IconName, active: boolean = false) => {
  const { left } = mapIconToSpritePosition[icon]
  const top = active ? 0 : iconSize

  return `
    background-image: url(./public/talent-icons-sprite-min.png);
    background-size: auto ${2 * iconSize}px;
    background-position: -${left}px ${top}px;
  `
}
