// imports
import React from "react";
import useToggle from "../hooks/useToggle";

// return menu
export default function Menu({children}){
  return (
    <div className="menu">
      {children}
    </div>
  )  
}