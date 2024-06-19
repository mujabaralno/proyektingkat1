import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='max-w-5xl flex justify-center mt-16 mx-auto px-5 md:px-10 w-full'>
      <UserProfile />
    </div>
  )
}

export default ProfilePage;
