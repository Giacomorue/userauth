import React from 'react'
import RegisterForm from './components/RegisterForm'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Register</h1>
        <hr className='my-5'/>
        <RegisterForm />
        <div className='text-sm text-center text-neutral-500 mt-5'>
          Have an accout? <Link href={"/signin"} className="font-bold text-neutral-900">Login</Link>
        </div>
      </div>
    </div>
  )
}
