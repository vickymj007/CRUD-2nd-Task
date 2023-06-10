import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTeacherProfileData } from '../../Features/TeacherLoginInfoSlice'

export const EditTeacherProfile = () => {
    const teacherLoginData = useSelector(state=>state.teacherLoginData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userName, setUserName] = useState(teacherLoginData.userName)
    const [email, setEmail] = useState(teacherLoginData.email)
    const [id, setId] = useState(teacherLoginData.id)

    const handleSubmit= (e)=>{
        e.preventDefault()
        const updatedTeacherLoginData = {
        userName,
        email,
        id,
        password : teacherLoginData.password
        } 
        dispatch(updateTeacherProfileData(updatedTeacherLoginData))
        navigate('/teachers/teacher-profile')
    }


  return (
    <div className='student-login form-container'>
      <form onSubmit={handleSubmit}>
        <p>Update Credentials</p>
        <input 
          type='text' 
          value={userName} 
          onChange={(e)=> setUserName(e.target.value)}
          required
        />
        <input 
          type='text' 
          value={id} 
          onChange={(e)=> setId(e.target.value)}
          required
        />
        <input 
          type='email' 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
        <input type='submit' value='Update'/>
      </form>
    </div>
  )
}
