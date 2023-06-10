import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../Features/StudentSlice'
import teacherReducer from '../Features/TeacherSlice'
import studentLoginReducer from '../Features/StudentLoginInfoSlice'
import teacherLoginReducer from '../Features/TeacherLoginInfoSlice'

export const store = configureStore({
    reducer:{
        studentData : studentReducer,
        teacherData : teacherReducer,
        studentLoginData : studentLoginReducer,
        teacherLoginData : teacherLoginReducer
    }
})