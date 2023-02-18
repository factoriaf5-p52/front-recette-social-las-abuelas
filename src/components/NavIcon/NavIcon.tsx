import React from 'react'
import Recipes from '../../assets/icons/home-red.png'
import { IconDiv, IconText } from './NavIcon.style'

type Props = {
    img: string, 
    text:string
}
export const NavIcon = (props : Props) => {
  return (
    <IconDiv>
        <img src={props.img} alt="" />
        <IconText> { props.text }</IconText>
    </IconDiv>
  )
}
