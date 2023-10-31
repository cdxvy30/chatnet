import './Profile.css'
import React, { useState } from "react"

const Profile = ({ className }) => {
  const [user, setUser] = useState("cdxvy30")
  const [id, setId] = useState("F64074031")
  const [role, setRole] = useState("Platform Engineer")
  const [online, setOnline] = useState(true)
  const [sessionId, setSessionId] = useState('xxx')

  return (
    <div className={`${className} info`}>
      <div>User Name: {user}</div>
      <div>School ID: {id}</div>
      <div>Role: {role}</div>
      <div>Status: {online ? 'Online' : 'Offline'}</div>
      <div>Session: {sessionId}</div>
    </div>
  )
}

export default Profile
