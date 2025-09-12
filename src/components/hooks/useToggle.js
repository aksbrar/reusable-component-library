// imports
import React from "react";

export default function useToggle(){
  // on state
  const [on, setOn] = React.useState(false)

  // toggle state
  function toggle() {
    setOn(on => !on)
  }
}