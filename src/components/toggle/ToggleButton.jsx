// import
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton(){
  const {toggle} = React.useContext(ToggleContext)

  return (
    <div onClick={toggle}></div>
  )
}