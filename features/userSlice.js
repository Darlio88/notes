import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    userName:"",
    userEmail:"",
    userId:"",
}

export const userSlice = createSlice({
    name:"userDetails",
    initialState,
    reducers:{
        saveUser:(state, action) =>{
        state.userId=action.payload.userId
        state.userName=action.payload.userName
        state.userEmail=action.payload.userEmail
        }
    }
})


export const { saveUser } = userSlice.actions

export default userSlice.reducer