import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <StyledH1>DnD Beyond frontend challenge</StyledH1>
  </>
)

const StyledH1 = styled.h1`
  margin-top: 0;
  color: red;
`
