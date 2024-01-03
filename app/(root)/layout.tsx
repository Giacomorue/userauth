import { authOptions } from '@/libs/AuthOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

interface ProtectedRootLayoutProps{
    children: React.ReactNode
  }

export default async function ProtectedRootLayout({
  children
}: ProtectedRootLayoutProps) {

  const session = await getServerSession(authOptions);

  if(!session?.user?.email){
    redirect("/signin");
  }

  return (
    <main>
      {children}
    </main>
  )
}
