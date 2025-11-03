import React, { use } from 'react'

function User({user}) {
  return (
    <div className=' flex flex-col  w-[400px] gap-3 border p-2 m-2 rounded border-[#c5c1c1]'>
        <h1>Id: {user.id}</h1>
        <h2>Name: {user.name}</h2>
        <h3>Email: {user.email}</h3>
        <p>Role: {user.role}</p>
      
    </div>
  )
}

export default User
