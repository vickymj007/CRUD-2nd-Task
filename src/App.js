
import './App.css';
import { Navbar } from './Components/Navbar';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {Dashboard} from './Components/Dashboard'
import {StudentLogin} from './Components/StudentLogin'
import {TeacherLogin} from './Components/TeacherLogin'
import {CreateStudent} from './Components/CreateStudent'
import {ListStudents} from './Components/ListStudents'
import { ListTeachers } from './Components/ListTeachers';
import { CreateTeachers } from './Components/CreateTeachers';
import { UpdateStudent } from './Components/UpdateStudent';
import { UpdateTeacher } from './Components/UpdateTeacher';
import { StudentProfile } from './Components/StudentProfile';
import { EditStudentProfile } from './Components/EditStudentProfile';


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
