import React, {useEffect, useState} from "react"
import styled, {css} from "styled-components";
import {motion} from "framer-motion";
import {breakPoints} from "./../breakpoints";
const mixinFontScalableSize= (size) => {
  return css`calc(${size + "rem"} + 1vmin)`
}
const Text = (props) => {
  return (
    <TextContainer {...props}>
      {props.children}
    </TextContainer>
  )
}
export default Text
const TextContainer = styled.span`
font-size: calc(${props => props.size + "em"} + 1vmin);
line-height: ${props => props.lineHeight ? props.lineHeight: '170%' };
font-weight: ${props => props.fontWeight ? props.fontWeight: 300 };
text-transform: ${props => props.textTransform ? props.textTransform: 'normal' };
color: ${props => props.color};
@media (min-width: ${breakPoints.sm}){
${props => props.sizeSm && css`
    font-size: ${props => mixinFontScalableSize(props.sizeSm) };
`}
}
@media (min-width: ${breakPoints.sm}){
${props => props.maxWidthSm && css`
    max-width: ${props => props.maxWidthSm};
    display: block;
`}
}
@media (min-width: ${breakPoints.md}){
${props => props.sizeMd && css`
    font-size: ${props => mixinFontScalableSize(props.sizeMd) };
`}
}
@media (min-width: ${breakPoints.md}){
${props => props.maxWidthMd && css`
    max-width: ${props => props.maxWidthMd};
    display: block;
`}
}
@media (min-width: ${breakPoints.lg}){
${props => props.sizeLg && css`
    font-size: ${props => mixinFontScalableSize(props.sizeLg) };
`}
}
@media (min-width: ${breakPoints.lg}){
${props => props.maxWidthLg && css`
    max-width: ${props => props.maxWidthLg};
    display: block;
`}
}
@media (min-width: ${breakPoints.xl}){
${props => props.sizeXl && css`
    font-size: ${props => mixinFontScalableSize(props.sizeXl) };
`}
}
@media (min-width: ${breakPoints.xl}){
${props => props.maxWidthXl && css`
    max-width: ${props => props.maxWidthXl};
    display: block;
`}
}
`
