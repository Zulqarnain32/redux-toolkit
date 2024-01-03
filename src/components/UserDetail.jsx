import React from 'react'
import { fakeUserData } from '../api'
// import { addUser, deleteUsers } from '../store/slices/UserSlice'
import { addUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'
import DisplayUser from './DisplayUser'
import { clearAllUsers } from '../store/actions'

const UserDetail = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
       console.log("his name is " + payload);
       dispatch(addUser(payload))
    }

    const deleteAllUsers = () => {
      // dispatch(deleteUsers())
      dispatch(clearAllUsers())
    }
  return (
    <>
       <div>
          <div>
             <button onClick = {() => addNewUser(fakeUserData())} className = "add-btn">Add User</button>
          </div>
          <DisplayUser/>
          <button className="del-all" onClick={() => deleteAllUsers()}>Delete All</button>
       </div>
    </>
  )
}

export default UserDetail
