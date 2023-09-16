import React from 'react'
import styled from 'styled-components'
import { IconName, getIcon, iconSize } from '../../styles/icons'
import { useGlobalContext } from '../../contexts/GlobalContext'

type TalenPathType = {
  iconName: IconName
  iconIndex: number
  pathLabel: string
  showBar?: boolean
}

export const TalentIcon = ({
  iconName,
  pathLabel,
  iconIndex,
  showBar = false
}: TalenPathType) => {
  const context = useGlobalContext()
  const path = context.paths.find((path) => path.label == pathLabel)
  const icon = path?.talents.find((talent) => talent.iconName == iconName)
  const isActive = !!icon?.active

  const handleOnClick = () => {}

  return (
    <>
      {showBar && <Bar $isActive={isActive} />}
      <StyledButton
        onClick={() => handleOnClick()}
        $isActive={isActive}
        $iconName={iconName}
      ></StyledButton>
    </>
  )
}

const StyledButton = styled.button<{ $iconName: IconName; $isActive: boolean }>`
  box-sizing: content-box;
  width: ${iconSize}px;
  height: ${iconSize}px;
  border: 4px solid ${(props) => props.theme.colors.greyLight};
  ${(props) => getIcon(props.$iconName, props.$isActive)}

  &:hover {
    ${(props) => getIcon(props.$iconName, true)}
  }
`

const Bar = styled.span<{ $isActive: boolean }>`
  width: 80px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.greyDark};
  border-top: 1px solid ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};

  ${(props) =>
    props.$isActive &&
    `
      background-color: ${props.theme.colors.grey};
      border-top: 1px solid ${props.theme.colors.greyLight};
      border-bottom: 1px solid ${props.theme.colors.greyLight};
  `}
`
