import './App.css'
import Avatar from './components/Avatar'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"
import Toggle from './components/toggle/index'
import React from 'react'
import Star from './components/Star'
import Menu from './components/menu/Index'



function App() {
  return (
    <Menu>
      <Menu.Button>Click</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>repeat</Menu.Item>
        <Menu.Item>repeat</Menu.Item>
        <Menu.Item>repeat</Menu.Item>
        <Menu.Item>repeat</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default App
