import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTeacher } from '../../Features/TeacherSlice'
import { nanoid } from '@reduxjs/toolkit'

export const CreateTeachers = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [profession, setProfession] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTeacher  = {
      name,
      age,
      profession,
      id : nanoid()
    }
    dispatch(addTeacher(newTeacher))
    navigate('/teachers/list-teachers')
  }
  return (
    <div className='form-container'>
      <h3>ENTER TEACHER DETAILS</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          placeholder='Enter Teacher Name'
          required  
        />
        <input 
          type='number' 
          value={age} 
          onChange={(e)=> setAge(e.target.value)} 
          placeholder='Enter Teacher Age'
          required
        />
        <label htmlFor='profession'>Select Profession :</label>
        <select id='profession' value={profession} onChange={(e)=>setProfession(e.target.value)} required>
          <option></option>
          <option value='Front End Developer'>Front End Developer</option>
          <option value='Back End Developer'>Back End Developer</option>
          <option value='Full Stack Developer'>Full Stack Developer</option>
          <option value='Java Developer'>Java Developer</option>
          <option value='UI/UX Designer'>UI/UX Designer</option>
          <option value='React Developer'>React Developer</option>
          <option value='Angular Developer'>Angular Developer</option>
          <option value='MERN Stack Developer'>MERN Stack Developer</option>
          <option value='MEAN Stack Developer'>MEAN Stack Developer</option>
          <option value='DEVOPS Engineer'>DEVOPS Engineer</option>
          <option value='Data Scientist'>Data Scientist</option>
        </select>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}
