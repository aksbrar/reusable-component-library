import './App.css'
import Avatar from './components/Avatar'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"
import Toggle from './components/toggle/index'


function App() {
  return (
    <Toggle>
      <Toggle.Button>
        <Toggle.on>
          <div className="box filled"></div>
        </Toggle.on>
        <Toggle.off>
          <div className="box"></div>
        </Toggle.off>
      </Toggle.Button>
    </Toggle>
  )
}

export default App
