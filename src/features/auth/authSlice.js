import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers:()=>{}
})

export const{reset} = authSlice.actions
export default authSlice.reducer