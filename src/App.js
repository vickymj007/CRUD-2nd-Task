
import './App.css';
import { Navbar } from './Components/Navbar';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {Dashboard} from './Components/Dashboard'
import {StudentLogin} from './Components/Student/StudentLogin'
import {TeacherLogin} from './Components/Teacher/TeacherLogin'
import {CreateStudent} from './Components/Student/CreateStudent'
import {ListStudents} from './Components/Student/ListStudents'
import { ListTeachers } from './Components/Teacher/ListTeachers';
import { CreateTeachers } from './Components/Teacher/CreateTeachers';
import { UpdateStudent } from './Components/Student/UpdateStudent';
import { UpdateTeacher } from './Components/Teacher/UpdateTeacher';
import { StudentProfile } from './Components/Student/StudentProfile';
import { EditStudentProfile } from './Components/Student/EditStudentProfile';
import { EditTeacherProfile } from './Components/Teacher/EditTeacherProfile';
import { TeacherProfile } from './Components/Teacher/TeacherProfile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Dashboard/>}/>  
      <Route path='/students' element={<StudentLogin/>}>
        <Route path='list-students' element={<ListStudents/>}/>
        <Route path='create-student' element={<CreateStudent/>}/>
        <Route path='update-student/:id' element={<UpdateStudent/>}/>
        <Route path='student-profile' element={<StudentProfile/>}/>
        <Route path='edit-student-profile/:profileId' element={<EditStudentProfile/>}/>
      </Route>
      <Route path='/teachers' element={<TeacherLogin/>}>
        <Route path='list-teachers' element={<ListTeachers/>}/>
        <Route path='create-teacher' element={<CreateTeachers/>}/>
        <Route path='update-teacher/:id' element={<UpdateTeacher/>}/>
        <Route path='teacher-profile' element={<TeacherProfile/>}/>
        <Route path='edit-teacher-profile/:profileId' element={<EditTeacherProfile/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
