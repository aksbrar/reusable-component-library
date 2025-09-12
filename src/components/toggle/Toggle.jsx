// import
import React from "react"
import useEffectOnUpdate from "../hooks/useEffectOnUpdate"

// context
const ToggleContext = React.createContext()

// RETURN TOGGLE
export default function Toggle({children, onToggle}){
  const [on, setOn] = React.useState(false)

  useEffectOnUpdate(onToggle, [on])

  function toggle() {
    setOn(on => !on)
  }

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

export {ToggleContext}