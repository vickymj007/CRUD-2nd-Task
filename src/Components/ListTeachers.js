import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {deleteTeacher} from '../Features/TeacherSlice'

export const ListTeachers = () => {
  const teacherData = useSelector(state => state.teacherData)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  return (
    <div>
      <table className='student-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Profession</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {teacherData.map(teacher=>{
          return (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.age}</td>
              <td>{teacher.profession}</td>
              <td><button onClick={()=>navigate(`/teachers/update-teacher/${teacher.id}`)}>Edit</button></td>
              <td><button onClick={()=>dispatch(deleteTeacher(teacher.id))}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}
