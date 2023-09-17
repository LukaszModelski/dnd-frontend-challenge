import React from 'react'
import styled from 'styled-components'
import { TalentIcon } from './TalentIcon'
import { ConfigType } from '../../App.config'

type TalenPathType = ConfigType['paths'][0]

export const TalentPath = ({ label, talents }: TalenPathType) => {
  return (
    <StyledPath>
      <StyledLabel>{label}</StyledLabel>
      <FlexContainer>
        {talents.map((talent, i) => (
          <TalentIcon
            key={`${talent.iconName}-${i}`}
            iconName={talent.iconName}
            iconIndex={i}
            pathLabel={label}
            showBar={i !== 0}
          />
        ))}
      </FlexContainer>
    </StyledPath>
  )
}

const StyledPath = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => props.theme.media.mobileMax`
    gap: 20px;
  `}
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledLabel = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
`
