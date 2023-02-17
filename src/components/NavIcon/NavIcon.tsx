import React from 'react'
import Recipes from '../../assets/icons/home-red.png'

type Props = {
    img: string, 
    text:string
}
export const NavIcon = (props : Props) => {
  return (
    <div>
        <img src={props.img} alt="" />
        <p> { props.text }</p>
    </div>
  )
}
