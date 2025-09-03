import './App.css'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"


function App() {
  return (
    <>
      <Button onClick={()=>alert("working")}
              size="large">
                  <FaGoogle />
                  Log into Google
      </Button>
    </>

    
  )
}

export default App
