import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id:'1', name:'Rayleigh', age:'40', profession: 'Front End Developer'},
    {id:'2', name:'Roger', age:'32', profession: 'Back End Developer'},
    {id:'3', name:'Garp', age:'50', profession: 'Full Stack Developer'},
    {id:'4', name:'Shanks', age:'30', profession: 'Full Stack Developer'}
]

const teacherSlice = createSlice({
    name:'teacher',
    initialState,
    reducers:{
        addTeacher :(state, action)=>{
            return [...state, action.payload]
        },
        deleteTeacher :(state, action)=>{
            return state.filter(teacher => teacher.id !== action.payload)
        },
        updateTeacher :(state, action)=>{
            return state = state.forEach(teacher=>{
                if(teacher.id === action.payload.id){
                    teacher.name = action.payload.name
                    teacher.age = action.payload.age
                    teacher.profession = action.payload.profession
                }
            })
        }
    }
})

export const {addTeacher, updateTeacher, deleteTeacher} = teacherSlice.actions
export default teacherSlice.reducer