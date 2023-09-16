import React from 'react'
import styled from 'styled-components'

type TalenPathType = {
  label: string
  talents: {
    icon: string
  }[]
}

export const TalentPath = ({ label, talents }: TalenPathType) => {
  return <StyledSection>{label}</StyledSection>
}

const StyledSection = styled.section`
  height: 40px;
  background-color: red;
  margin-bottom: 30px;
`
