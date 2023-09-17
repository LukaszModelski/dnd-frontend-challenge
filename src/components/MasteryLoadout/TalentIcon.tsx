import React from 'react'
import styled from 'styled-components'
import { IconName, getIconStyles } from '../../styles/icons'
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
  showBar = false
}: TalenPathType) => {
  const context = useGlobalContext()
  const { isActive } = context.getIcon(pathLabel, iconName)

  const handleOnClick = () => {
    context.buyTalentPoint(pathLabel, iconName)
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
  width: ${(props) => props.theme.iconSize}px;
  height: ${(props) => props.theme.iconSize}px;
  ${(props) => getIconStyles(props.$iconName, props.$isActive)}

  &:hover {
    ${(props) => getIconStyles(props.$iconName, true)}
  }

  ${(props) =>
    props.theme.media.mobileMax(`
      width: ${props.theme.iconSizeMobile}px;
      height: ${props.theme.iconSizeMobile}px;
      ${getIconStyles(props.$iconName, true, true)}

      &:hover {
        ${getIconStyles(props.$iconName, true, true)}
      }
    `)}

  /* borders and animation */
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -${(props) => props.theme.iconBorderSize}px;
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
  display: block;
  width: 80px;
  height: 12px;
  margin: 0 ${(props) => props.theme.iconBorderSize}px;
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

  ${(props) => props.theme.media.mobileMax`
    width: 40px;
  `}
`
