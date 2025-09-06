// import
import React from "react"

// context
const ToggleContext = React.createContext()

// RETURN TOGGLE
export default function Toggle({children}){
  const [on, setOn] = React.useState(false)

  function toggle() {
    setOn(on = !on)
  }

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

export {ToggleContext}