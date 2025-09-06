// import
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({children}){
  const {toggle} = React.useContext(ToggleContext)
  console.log(toggle)

  return (
    <div onClick={toggle}>{children}</div>
  )
}