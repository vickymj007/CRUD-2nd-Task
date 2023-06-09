import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../Features/StudentSlice'
import teacherReducer from '../Features/TeacherSlice'
import studentLoginReducer from '../Features/StudentLoginInfoSlice'

export const store = configureStore({
    reducer:{
        studentData : studentReducer,
        teacherData : teacherReducer,
        studentLoginData : studentLoginReducer
    }
})