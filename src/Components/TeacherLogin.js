import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const TeacherLogin = () => {
  return (
    <div>
      <nav className='teacher-page navbar'>
        <NavLink to='list-teachers'>List Teachers</NavLink>
        <NavLink to='create-teacher'>Add Teacher</NavLink>
      </nav>
      <h2>Welcome to the Teachers page</h2>
      <Outlet/>
    </div>
  )
}
