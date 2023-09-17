import React from 'react'
import styled from 'styled-components'
import { TalentPath } from './TalentPath'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { PointsCounter } from './PointsCounter'

export const MasteryLoadout = () => {
  const { paths } = useGlobalContext()

  return (
    <StyledSection>
      <StyledH1>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </StyledH1>
      <FlexContainer>
        <div>
          {paths.map((path, i) => (
            <TalentPath
              key={`${path.label}-${i}`}
              label={path.label}
              talents={path.talents}
            />
          ))}
        </div>
        <PointsCounter />
      </FlexContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: inline-block;
  margin-top: 150px;
  padding: 15px 15px 50px;
  border: 2px solid ${(props) => props.theme.colors.greyDark};
  border-radius: 2px;

  ${(props) => props.theme.media.tabletMax`
    margin-top: 50px;
  `}

  ${(props) => props.theme.media.mobileMax`
    margin-top: 20px;
    border: 0;
  `}
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  ${(props) => props.theme.media.mobileMax`
    gap: 30px;
  `}
`

const StyledH1 = styled.h1`
  margin-bottom: 60px;
  padding: 7px 50px;
  background-color: ${(props) => props.theme.colors.greyDark};
  text-align: center;
  font-size: 20px;
  font-weight: 300;

  ${(props) => props.theme.media.tabletMax`
    margin-bottom: 40px;
    font-size: 18px;
  `}

  ${(props) => props.theme.media.mobileMax`
    margin-bottom: 30px;
    padding: 7px 15px;
    font-size: 14px;
  `}
`
