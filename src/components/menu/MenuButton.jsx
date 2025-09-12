// imports
import React from "react"
import { MenuContext } from "./Menu"

// return menu
export default function MenuButton({children}){

  const {toggle} = React.useContext(MenuContext)
  
  return (
    <button onClick={toggle}>
      {children}
    </button>
  )  
}