import './App.css'
import Avatar from './components/Avatar'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"
import Toggle from './components/toggle/index'
import React from 'react'



function App() {
  return (
    <Toggle onToggle={() => {console.log("Toggled")}}>
      <Toggle.Button>
        <Toggle.Display>
          {(on)=>{
            return <div className={`box ${on?"filled":""}`}></div>
          }}
        </Toggle.Display>
      </Toggle.Button>
    </Toggle>
  )
}

export default App
