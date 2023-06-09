import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTeacher } from '../Features/TeacherSlice'

export const UpdateTeacher = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teacherData = useSelector(state => state.teacherData)
    const {id} = useParams()

    const data = teacherData.find(teacher => teacher.id === id)
    
    const [name, setName] = useState(data.name)
    const [age, setAge] = useState(data.age)
    const [profession, setProfession] = useState(data.profession)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const updatedData = {
            name,
            age,
            profession,
            id
        }
        dispatch(updateTeacher(updatedData))
        navigate('/teachers/list-teachers')
    }

  return (
    <div className='form-container'>
        <h3>UPDATE TEACHER</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            required  
            />
            <input 
            type='number' 
            value={age} 
            onChange={(e)=> setAge(e.target.value)}
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
            <input type='submit' value='Update'/>
        </form>
    </div>
    
  )
}
