import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import todoService from './todoService'

const initialState = {
    todos : [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase(createTodo.pending,(state)=>{

            })
            .addCase(createTodo.fulfilled,(state,action)=>{

            })
            .addCase(createTodo.rejected,(state,action)=>{
                
            })
    }
})

export const createTodo = createAsyncThunk('todos/create',async(todoData,thunkAPI)=>{
    try {
        const user = thunkAPI.getState().auth.user
        return await todoService.createTodo(todoData,user)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer