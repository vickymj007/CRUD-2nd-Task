import { createSlice } from "@reduxjs/toolkit";


const studentLoginInfoSlice = createSlice({
    name: 'studentLoginInfo',
    initialState: null,
    reducers:{
        login: (state,action)=>{
            return state = action.payload
        },
        logout :(state)=>{
            return state = null
        },
        updateStudentProfileData:(state, action)=>{
            return state = action.payload
        }
    }
})

export const {login, logout, updateStudentProfileData} = studentLoginInfoSlice.actions
export default studentLoginInfoSlice.reducer 