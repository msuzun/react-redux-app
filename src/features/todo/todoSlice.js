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
            .addCase(getTodos.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(getTodos.fulfilled,(state,action)=>{
             
                state.isLoading = false
                state.isSuccess = true
                state.todos = action.payload
                state.isError = false
            })
            .addCase(getTodos.rejected,(state,action)=>{
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.isError = true
              
            })
    }
})

export const deleteTodo = createAsyncThunk('todos/delete',async(id,thunkAPI)=>{
    try {
        return await todoService.deleteTodo(id)
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    } catch (error) {
        
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

export const getTodos = createAsyncThunk('todos/getAll',async(_,thunkAPI)=>{
    try {
        const user = thunkAPI.getState().auth.user
       
        return await todoService.getTodos(user)
    } catch (error) {
        const message = error.message

        return thunkAPI.rejectWithValue(message)
    }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer