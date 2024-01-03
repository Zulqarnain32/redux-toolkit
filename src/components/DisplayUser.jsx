import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUser = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users
    })
    console.log(data);

    const HandleRemoveUser = (payload) => {
       console.log("delete btn " + payload);
       dispatch(removeUser(payload))
    }
  return (
    <>
       {data.map((name,id) => (
         <div key = {name} className = "s-user">
            <h3>{id} {name}</h3>
            <button className="remove" onClick = {() => HandleRemoveUser(id)}>Delete</button>
         </div>
       ))}
    </>
  )
}

export default DisplayUser
