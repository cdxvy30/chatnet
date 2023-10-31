import './Home.css'
import { useState, useEffect } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Profile from "../../components/Profile/Profile"

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div>
      ChatNet
      <AccountCircleIcon 
        className="account"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      />
      <Profile className={`profile ${isProfileOpen ? 'open' : ''}`}/>
    </div>
  )
}

export default Home
