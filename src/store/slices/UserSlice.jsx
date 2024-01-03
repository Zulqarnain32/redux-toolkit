import { createSlice } from "@reduxjs/toolkit"
import { clearAllUsers } from "../actions";
const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers:{
       addUser(state, action ) {
          state.push(action.payload)
          console.log("action add performed " + action.payload);
        },
        removeUser(state, action ) {
            state.splice(action.payload,1)
            console.log("action remove performed " + action.payload);
       },
      //  deleteUsers(state, action ) {
      //   //  state.length = 0; // its not a better approach 
      //   // the better approach is
      //    return []
      //  },
    },
    extraReducers(builder){
      builder.addCase(clearAllUsers , () => {
         return []
      })
    }
})
console.log(userSlice.actions);// this is action creators

export default userSlice.reducer
// export const { addUser,removeUser,deleteUsers } = userSlice.actions
export const { addUser,removeUser } = userSlice.actions