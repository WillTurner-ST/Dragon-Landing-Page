import React from 'react'
import Logo from '../assets/Dragon_Logo.png'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

  return (
    <nav className="bg-black p-4 flex justify-center items-center">
      <img src={Logo} alt="Logo" className="w-24 h-24 object-cover" />
      <button onClick={handleNavigate} className="mx-5 hover:bg-SnapGreen text-white font-bold py-2 px-4 rounded hover:scale-105">
  Home
</button>
    </nav>
  )
}

export default Nav