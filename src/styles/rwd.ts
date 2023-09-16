const breakpoints = {
  tablet: 900,
  mobile: 600
}

export const tabletMax = (style: string | TemplateStringsArray) => `
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    ${style}
  }
`

export const mobileMax = (style: string | TemplateStringsArray) => `
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    ${style}
  }
`
