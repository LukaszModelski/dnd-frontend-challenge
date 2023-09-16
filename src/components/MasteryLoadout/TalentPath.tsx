import React from 'react'
import styled from 'styled-components'
import { TalentIcon } from './TalentIcon'
import { ConfigType } from '../../App.config'

type TalenPathType = ConfigType['paths'][0]

export const TalentPath = ({ label, talents }: TalenPathType) => {
  return (
    <StyledPath>
      <StyledLabel>{label}</StyledLabel>
      {talents.map((talent, i) => (
        <TalentIcon
          key={`${talent.iconName}-${i}`}
          iconName={talent.iconName}
          iconIndex={i}
          pathLabel={label}
          showBar={i !== 0}
        />
      ))}
    </StyledPath>
  )
}

const StyledPath = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`

const StyledLabel = styled.label`
  width: 144px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
`
