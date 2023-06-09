import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateStudent } from '../Features/StudentSlice'

export const UpdateStudent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const studentData = useSelector(state => state.studentData)
    const {id} = useParams()

    const data = studentData.find(student => student.id === id)
    
    const [name, setName] = useState(data.name)
    const [age, setAge] = useState(data.age)
    const [batch, setBatch] = useState(data.batch)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const updatedData = {
            name,
            age,
            batch,
            id
        }
        dispatch(updateStudent(updatedData))
        navigate('/students/list-students')
    }

  return (
    <div className='form-container'>
        <h3>UPDATE STUDENT</h3>
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
            <input 
            type='text' 
            value={batch} onChange={(e)=> 
            setBatch(e.target.value)} 
            required
            />
            <input type='submit' value='Update'/>
        </form>
    </div>
    
  )
}
