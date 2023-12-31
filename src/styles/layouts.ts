import styled from 'styled-components'

export const LayoutCenter = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 100px;

  ${(props) => props.theme.media.mobileMax`
    padding: 0;
  `}
`
