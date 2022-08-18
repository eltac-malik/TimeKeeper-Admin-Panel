import {createSlice} from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name:"login",
    initialState:{
        isLogged:false
    },
    reducers:{
        setLog:(state,action)=>
        {
            state.isLogged = action.payload
        }
    }
})

export default loginSlice.reducer
export const {setLog} = loginSlice.actions