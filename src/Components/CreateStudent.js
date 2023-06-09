import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../Features/StudentSlice'
import { useNavigate } from 'react-router-dom'


export const CreateStudent = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [batch, setBatch] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newStudent  = {
      name,
      age,
      batch,
      id : nanoid()
    }
    dispatch(addStudent(newStudent))
    navigate('/students/list-students')
  }
  return (
    <div className='form-container'>
      <h3>ENTER STUDENT DETAILS</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          placeholder='Enter Student Name'
          required  
        />
        <input 
          type='number' 
          value={age} 
          onChange={(e)=> setAge(e.target.value)} 
          placeholder='Enter Student Age'
          required
        />
        <input 
          type='text' 
          value={batch} onChange={(e)=> 
          setBatch(e.target.value)} 
          placeholder='Enter Student Batch'
          required
        />
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}
