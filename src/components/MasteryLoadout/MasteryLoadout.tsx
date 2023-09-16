import React from 'react'
import styled from 'styled-components'
import { TalentPath } from './TalentPath'
import { useGlobalContext } from '../../contexts/GlobalContext'

export const MasteryLoadout = () => {
  const { loadout } = useGlobalContext()

  return (
    <StyledSection>
      <StyledH1>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </StyledH1>
      {loadout?.paths.map((path) => (
        <TalentPath label={path.label} talents={path.talents} />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 0 auto;
  padding-top: 200px;
`

const StyledH1 = styled.h1`
  margin-bottom: 60px;
  padding: 6px 0;
  background-color: ${(props) => props.theme.colors.grey};
  letter-spacing: 0.5px;
  text-align: center;
  font-size: 20px;
  font-family: Arial, sans-serif;
  font-weight: 300;
`
