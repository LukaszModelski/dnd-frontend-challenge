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
  width: 120px;
  margin-left: 50px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.greyDark};
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;
`

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
`

const StyledPoints = styled(StyledLabel)`
  margin-bottom: 3px;
`

const StyledBlueLabel = styled(StyledLabel)`
  color: ${(props) => props.theme.colors.blueLight};
`
