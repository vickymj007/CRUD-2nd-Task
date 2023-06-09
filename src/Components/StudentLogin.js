import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate} from 'react-router-dom'
import { login, logout } from '../Features/StudentLoginInfoSlice'

export const StudentLogin = () => {
  const studentLoginData = useSelector(state=>state.studentLoginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLogin,setIsLogin] = useState(studentLoginData ? true: false)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()
    const studentLoginData = {
      userName,
      email,
      id,
      password
    } 
    setIsLogin(true)
    dispatch(login(studentLoginData))
  }

  const handleLogout= ()=>{
    dispatch(logout())
    setUserName('')
    setEmail('')
    setId('')
    setPassword('')
    setIsLogin(false)
    navigate('/students')
  }
  
  return isLogin ? 
   (
    <div>
      <nav className='student-page navbar'>
        <NavLink to='list-students'>List Students</NavLink>
        <NavLink to='create-student'>Add Student</NavLink>
        <NavLink to='student-profile'>Profile</NavLink>
        <button className='logout'onClick={handleLogout}>Logout</button>
      </nav>
      <div className='student-dashboard'>
        <p>Welcome to the Student Page <strong>{userName}</strong></p>
        <p>Use the Navigation Buttons to Navigate to Different pages</p>
      </div>
      <Outlet/>
    </div>
  ): (
    <div className='student-login form-container'>
      <form onSubmit={handleSubmit}>
        <p>Login as a Student</p>
        <input 
          type='text' 
          value={userName} 
          onChange={(e)=> setUserName(e.target.value)}
          required
          placeholder='Enter Username'
        />
        <input 
          type='text' 
          value={id} 
          onChange={(e)=> setId(e.target.value)}
          required
          placeholder='Enter Student ID'
        />
        <input 
          type='email' 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          required
          placeholder='Enter Email'
        />
        <input 
          type='password' 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}
          required
          placeholder='Enter Password'
        />
        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}
