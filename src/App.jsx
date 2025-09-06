import './App.css'
import Avatar from './components/Avatar'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"
import Toggle from './components/toggle/index'


function App() {
  return (
    <Toggle>
      <Toggle.Button><button>Hi</button></Toggle.Button>
      <Toggle.on>I am revealed</Toggle.on>
      <Toggle.off>I am when not revealed</Toggle.off>
    </Toggle>  
  )
}

export default App
