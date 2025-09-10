import { ToggleContext } from "./Toggle";
import React from "react";

export default function Display({children}){

  const {on} = React.useContext(ToggleContext)

  return children(on)
}