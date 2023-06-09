import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
        <div className='navbar main-navbar'>
            <h2>CRUD</h2>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/students'>Student Login</NavLink>
            <NavLink to='/teachers'>Teacher Login</NavLink>
        </div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
