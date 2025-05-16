import React from 'react'
import { useAuth } from '../../contex/auth-contex/AuthProvider';
const UserDetails = () => {
    const {name,phone,email,isLoggedIn} = useAuth();
  return (
    <>
      <div>
            <div>
                <span className='text-2xl font-bold'>User Details</span>
                <hr />
                <div className='mb-5 flex flex-col justify-between'>
                <span className='text-xl'>name-{name}</span>
                <span className='text-xl'>phone-{phone}</span>
                <span className='text-xl'>email-{email}</span>
            </div>
            </div>
      </div>
    </>
  )
}

export default UserDetails
