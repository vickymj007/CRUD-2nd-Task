import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, logout } from '../../Features/TeacherLoginInfoSlice'

export const TeacherLogin = () => {
  const teacherLoginData = useSelector(state=>state.teacherLoginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLogin,setIsLogin] = useState(teacherLoginData ? true: false)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()
    const teacherLoginData = {
      userName,
      email,
      id,
      password
    } 
    setIsLogin(true)
    dispatch(login(teacherLoginData))
  }

  const handleLogout= ()=>{
    dispatch(logout())
    setUserName('')
    setEmail('')
    setId('')
    setPassword('')
    setIsLogin(false)
    navigate('/teachers')
  }
  
  return isLogin ? 
   (
    <div>
      <nav className='teacher-page navbar'>
        <NavLink to='list-teachers'>List Teachers</NavLink>
        <NavLink to='create-teacher'>Add Teacher</NavLink>
        <NavLink to='teacher-profile'>Profile</NavLink>
        <button className='logout'onClick={handleLogout}>Logout</button>
      </nav>
      <div className='student-dashboard'>
        <p>Welcome <strong>{teacherLoginData.userName}</strong></p>
        <p>Use the Navigation Buttons to Navigate to Different pages</p>
      </div>
      <Outlet/>
    </div>
  ): (
    <div className='student-login form-container'>
      <form onSubmit={handleSubmit}>
        <p>Login as a Teacher</p>
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
          placeholder='Enter Teacher ID'
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
