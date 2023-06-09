import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const StudentProfile = () => {
    const studentLoginData = useSelector(state => state.studentLoginData)
  return (
    <div className='student-profile'>
        <h3>PROFILE INFO</h3>
        <p>Student ID : {studentLoginData.id}</p>
        <p>User Name : {studentLoginData.userName}</p>
        <p>Email : {studentLoginData.email}</p>
        <Link to={`/students/edit-student-profile/${studentLoginData.id}`}>Edit Profile</Link>
    </div>
  )
}
