// import
import React from "react";
import { ToggleContext } from "./Toggle";

export default function Button(){
  const {toggle} = React.useContext(ToggleContext)

  return (
    <div onClick={toggle}></div>
  )
}