// import
import React from "react"
import useToggle from "../hooks/useToggle"
import useEffectOnUpdate from "../hooks/useEffectOnUpdate"

// context
const ToggleContext = React.createContext()

// RETURN TOGGLE
export default function Toggle({children, onToggle}){
  
  const {on, toggle} = useToggle()

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

export {ToggleContext}