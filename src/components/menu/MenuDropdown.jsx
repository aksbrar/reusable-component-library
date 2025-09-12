// imports
import React from "react"
import { MenuContext } from "./Menu"

// return menu
export default function MenuDropdown({children}){
  const {on} = React.useContext(MenuContext)
  
  return (
    on ? <ol className="menu-dropdown">{children}</ol> : null
  )
}