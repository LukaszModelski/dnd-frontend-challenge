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
export const iconSizeMobile = 30

const spriteIconsOrder: IconName[] = [
  'chevrons',
  'silverware',
  'cake',
  'crown',
  'ship',
  'mask',
  'thunder',
  'skull'
]

export const getIconStyles = (
  icon: IconName,
  active: boolean = false,
  mobile: boolean = false
) => {
  const size = mobile ? iconSizeMobile : iconSize

  return `
    background-image: url(./public/talent-icons-sprite-min.png);
    background-size: auto ${2 * size}px;
    background-position: 
      -${size * spriteIconsOrder.indexOf(icon)}px
      ${active ? 0 : size}px;
  `
}
