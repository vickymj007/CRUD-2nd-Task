import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1',name:'Sanji', age:20, batch:'B43'},
    {id:'2',name:'Luffy', age:22, batch:'B28'},
    {id:'3',name:'Zoro', age:21, batch:'B60'},
    {id:'4',name:'Franky', age:25, batch:'B62'}
]
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers:{
        addStudent :(state,action)=>{
            return [...state, action.payload]
        },
        deleteStudent:(state,action)=>{
            return state.filter(student=> student.id !== action.payload)
        },
        updateStudent:(state, action)=>{
            return state = state.forEach(student => {
                if (student.id === action.payload.id){
                    student.name = action.payload.name
                    student.age = action.payload.age
                    student.batch = action.payload.batch
                } 
            })
        }
    }
})

export const {addStudent, deleteStudent, updateStudent} = studentSlice.actions
export default studentSlice.reducer