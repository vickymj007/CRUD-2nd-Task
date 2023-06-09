import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../Features/StudentSlice'
import { useNavigate } from 'react-router-dom'

export const ListStudents = () => {
  const studentData = useSelector(state => state.studentData)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  return (
    <table className='student-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map(student=>{
          return (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.batch}</td>
              <td><button onClick={()=>navigate(`/students/update-student/${student.id}`)}>Edit</button></td>
              <td><button onClick={()=>dispatch(deleteStudent(student.id))}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
