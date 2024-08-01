import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ChangeVal() {
    const user=useSelector((state)=>state.user.value)
  return (
    <div>

        <input type='text' value={user} />
        <Link to='/'>Home</Link>
    </div>
  )
}

export default ChangeVal