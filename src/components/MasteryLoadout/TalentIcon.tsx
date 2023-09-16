import React from 'react'
import styled from 'styled-components'
import { IconName, getIcon, iconSize } from '../../styles/icons'

type TalenPathType = {
  iconName: IconName
  selected: boolean
  showBar?: boolean
}

export const TalentIcon = ({
  iconName,
  showBar = false,
  selected
}: TalenPathType) => {
  return (
    <>
      {showBar && <Bar selected={selected} />}
      <StyledButton iconname={iconName}></StyledButton>
    </>
  )
}

const StyledButton = styled.button<{ iconname: IconName }>`
  box-sizing: content-box;
  width: ${iconSize}px;
  height: ${iconSize}px;
  border: 4px solid ${(props) => props.theme.colors.greyLight};
  ${(props) => getIcon(props.iconname)}
`

const Bar = styled.span<{ selected: boolean }>`
  width: 80px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.greyDark};
  border-top: 1px solid ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};

  ${(props) =>
    props.selected &&
    `
      background-color: ${props.theme.colors.grey};
      border-top: 1px solid ${props.theme.colors.greyLight};
      border-bottom: 1px solid ${props.theme.colors.greyLight};
  `}
`
