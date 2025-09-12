// imports
import React from "react";
import useToggle from "../hooks/useToggle";

// return menu
export default function MenuItem({children}){
  return (
    <li className="menu-item">
      {children}
    </li>
  )  
}