import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate=useNavigate()
  
   return (
    <div>
        <button onClick={()=>navigate('/')}>cixish et</button>
    </div>
  )
}

export default Admin