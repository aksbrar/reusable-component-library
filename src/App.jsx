import './App.css'
import Avatar from './components/Avatar'
import Button from './components/Button'
import { FaGoogle } from "react-icons/fa"


function App() {
  return (
    <>
      <Avatar img={
        {
          src : "https://randomuser.me/api/portraits/women/45.jpg",
          alt : "fuddi deni"
        }
      }/>

      <Avatar color='pink'>HK</Avatar>

      <Avatar></Avatar>
    </> 
  )
}

export default App
