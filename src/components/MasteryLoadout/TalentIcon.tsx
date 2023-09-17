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

  const handleOnClick = () => {
    if (context.canBuyTalentPoint(pathLabel, iconIndex)) {
      context.buyTalentPoint(pathLabel, iconName)
    }
  }

  const handleRightClick = () => {
    context.removeTalentPoints(pathLabel, iconName)
  }

  return (
    <>
      {showBar && <Bar $isActive={isActive} />}
      <StyledButton
        onClick={() => handleOnClick()}
        onContextMenu={(e) => {
          e.preventDefault()
          handleRightClick()
        }}
        $isActive={isActive}
        $iconName={iconName}
      ></StyledButton>
    </>
  )
}

const StyledButton = styled.button<{ $iconName: IconName; $isActive: boolean }>`
  position: relative;
  box-sizing: content-box;
  width: ${iconSize}px;
  height: ${iconSize}px;
  ${(props) => getIcon(props.$iconName, props.$isActive)}

  &:hover {
    ${(props) => getIcon(props.$iconName, true)}
  }

  /* borders and animation */
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -4px;
  }

  &::before {
    filter: blur(0px);
    transition: filter 0.3s;
    background: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.greyDark},
      ${(props) => props.theme.colors.greyLight}
    );
    ${(props) => props.$isActive && 'filter: blur(10px);'}
  }

  &::after {
    transition: opacity 0.3s;
    opacity: 0;
    background: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.blueDark},
      ${(props) => props.theme.colors.blueLight}
    );

    ${(props) =>
      props.$isActive &&
      `
        opacity: 1;
      `}
  }
`

const Bar = styled.span<{ $isActive: boolean }>`
  width: 80px;
  height: 12px;
  margin: 0 4px;
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
