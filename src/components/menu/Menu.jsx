import React from "react"
import useToggle from "../hooks/useToggle"

const MenuContext = React.createContext(null)

// return menu
export default function Menu({children}){
  const {on, toggle} = useToggle()
  return (
    <MenuContext.Provider value={{on, toggle}}>
      <div className="menu">
        {children}
      </div>
    </MenuContext.Provider>
    
  )  
}

export {MenuContext}