import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Captainsignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      const data = {
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password
      }
  
      setUserData(data)
      console.log(data)
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    }
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
          <form onSubmit={submitHandler}>
            <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
            <div className='flex gap-4 mb-5'>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                type="text"
                placeholder='First name'
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                type="text"
                placeholder='Last name'
              />
            </div>
            <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="email"
              placeholder='email@example.com'
            />
            <h3 className='text-base font-medium mb-2'>Enter password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="password"
              placeholder='********'
            />
            <button
              type='submit'
              className='bg-[#111] mb-7 rounded px-4 py-2 w-full text-white font-semibold'
            >
              Sign Up
            </button>
            <p className='text-center'>
              Already have an account? <Link to='/captain/login' className='text-blue-600'>Login here</Link>
            </p>
          </form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>
            The side is protected by reCAPTCHA and the <span className='underline'>Google privacy policy </span> and <span className='underline'>terms of service apply</span>.
           </p> 
        </div>
      </div>
    )
  }

export default Captainsignup;