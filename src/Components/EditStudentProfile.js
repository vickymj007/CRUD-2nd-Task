import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateStudentProfileData } from '../Features/StudentLoginInfoSlice'

export const EditStudentProfile = () => {
    const studentLoginData = useSelector(state=>state.studentLoginData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userName, setUserName] = useState(studentLoginData.userName)
    const [email, setEmail] = useState(studentLoginData.email)
    const [id, setId] = useState(studentLoginData.id)

    const handleSubmit= (e)=>{
        e.preventDefault()
        const updatedStudentLoginData = {
        userName,
        email,
        id,
        password : studentLoginData.password
        } 
        dispatch(updateStudentProfileData(updatedStudentLoginData))
        navigate('/students/student-profile')
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
