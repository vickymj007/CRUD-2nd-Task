import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const TeacherProfile = () => {
    const teacherLoginData = useSelector(state => state.teacherLoginData)
  return (
    <div className='student-profile'>
        <h3>PROFILE INFO</h3>
        <p>Teacher ID : {teacherLoginData.id}</p>
        <p>User Name : {teacherLoginData.userName}</p>
        <p>Email : {teacherLoginData.email}</p>
        <Link to={`/teachers/edit-teacher-profile/${teacherLoginData.id}`}>Edit Profile</Link>
    </div>
  )
}
