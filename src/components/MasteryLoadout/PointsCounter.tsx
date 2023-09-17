import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../contexts/GlobalContext'

export const PointsCounter = () => {
  const { pointsSpent, maxPoints } = useGlobalContext()

  return (
    <StyledCounter>
      <StyledPoints>
        {pointsSpent} / {maxPoints}
      </StyledPoints>
      <StyledBlueLabel>Points Spent</StyledBlueLabel>
    </StyledCounter>
  )
}

const StyledCounter = styled.div`
  padding: 10px 25px;
  border: 1px solid ${(props) => props.theme.colors.greyDark};
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;

  ${(props) => props.theme.media.mobileMax`
    padding: 7px 15px;
  `}
`

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;

  ${(props) => props.theme.media.tabletMax`
    font-size: 16px;
  `}

  ${(props) => props.theme.media.mobileMax`
    font-size: 14px;
  `}
`

const StyledPoints = styled(StyledLabel)`
  margin-bottom: 3px;
`

const StyledBlueLabel = styled(StyledLabel)`
  color: ${(props) => props.theme.colors.blueLight};
`
