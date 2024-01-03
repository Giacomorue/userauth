"use client"

import { signOut } from 'next-auth/react';
import React from 'react'

export default function LogoutBtn() {
  return (
    <div className='text-center py-3 rounded-full text-white bg-neutral-900 cursor-pointer' onClick={() => {
        signOut();
      }}>
        Logout
    </div>
  )
}