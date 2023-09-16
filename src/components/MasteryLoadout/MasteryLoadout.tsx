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
      {loadout?.paths.map((path, i) => (
        <TalentPath
          key={`${path.label}-${i}`}
          label={path.label}
          talents={path.talents}
        />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: inline-block;
  margin-top: 150px;
  padding: 15px;
  border: 2px solid ${(props) => props.theme.colors.greyDark};
  border-radius: 2px;
`

const StyledH1 = styled.h1`
  margin-bottom: 60px;
  padding: 7px 50px;
  background-color: ${(props) => props.theme.colors.greyDark};

  text-align: center;
  font-size: 20px;
  font-weight: 300;

  ${(props) => props.theme.media.tabletMax`
    background-color: red;
  `}

  ${(props) => props.theme.media.mobileMax`
    background-color: blue;
  `}
`
