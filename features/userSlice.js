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
        state= {...action.payload}
        console.log(state)
        }
    }
})


export const { saveUser } = userSlice.actions

export default userSlice.reducer