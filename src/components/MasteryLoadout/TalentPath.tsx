import React from 'react'
import styled from 'styled-components'
import { TalentIcon } from './TalentIcon'

type TalenPathType = {
  label: string
  talents: {
    icon: string
  }[]
}

export const TalentPath = ({ label, talents }: TalenPathType) => {
  return (
    <StyledPath>
      {label}
      {talents.map((talent) => (
        <TalentIcon icon={talent.icon} />
      ))}
    </StyledPath>
  )
}

const StyledPath = styled.div`
  height: 40px;
  background-color: red;
  margin-bottom: 30px;
`
