import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        <form onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='********'
          />
          <button
            type="submit"
            className='bg-[#111] mb-7 rounded px-4 py-2 w-full text-white font-semibold'
          >
            Login
          </button>
          <p className='text-center'>
            Join a fleet? <Link to='/captain/signup' className='text-blue-600'>Register as a Captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[#f3c164] flex items-center justify-center mb-7 rounded px-4 py-2 w-full text-white font-semibold'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
