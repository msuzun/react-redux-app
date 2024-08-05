import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState={
    user:user?user:null,
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
export const register = createAsyncThunk('auth/register',async (user,thunkAPI)=>{
    try {
        return await authService.register(user.email,user.parola,user.kullaniciAd)
    } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message)
    }
})


export const{reset} = authSlice.actions
export default authSlice.reducer