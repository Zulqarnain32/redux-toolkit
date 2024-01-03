import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";

const store = configureStore({
    reducer:{
        // users: userSlice.reducer
        // you can remove .reducer if you declare reducer in userslice export defeult part
        users: userSlice,
        // ye oper jo user slikha hai same yahi likhna hai store useSelector mai 
    } 
})

export default store