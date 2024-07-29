import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="h-screen flex w-full justify-center">
       <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-white flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I’m your AI powered Database & sales assistant,DataQueryAI
        </h2>
        <p className="text-iridium md:text-sm mb-2">
        Revolutionizing Database Assistance by query in plain English and AI Email Marketing
          <br />
          something never done before 😉
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className=" !w-[900px] absolute top-36 left-12 "
          width={500}
          height={500}
        />
        
      </div>
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6 bg-cream">
      <div className="flex items-center justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Link href="/" className="flex items-center -ml-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <span className="text-xl font-bold -ml-3">
          Data<span className="text-red">Query</span> AI
          </span>
        </Link>
      </div>
        {children}
      </div>
     
    </div>
  )
}

export default Layout
