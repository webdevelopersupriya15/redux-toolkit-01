import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const user=useSelector((state)=>state.user.value)
  return (
    <div>
        <h1>{user}</h1>
        <Link to='change'>Change</Link>
    </div>
  )
}

export default Home