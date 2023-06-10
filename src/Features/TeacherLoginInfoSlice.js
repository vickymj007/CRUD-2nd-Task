import { createSlice } from "@reduxjs/toolkit";



const teacherLoginDataSlice = createSlice({
    name :'teacherLoginData',
    initialState: null,
    reducers:{
        login :(state, action)=>{
            return state = action.payload
        },
        logout : (state)=>{
            return state = null
        },
        updateTeacherProfileData : (state, action)=>{
            return state = action.payload
        }
    }
})

export const {login, logout, updateTeacherProfileData} = teacherLoginDataSlice.actions
export default teacherLoginDataSlice.reducer