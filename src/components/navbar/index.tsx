import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (

    <div className="flex justify-between items-center px-2 py-2 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-2 fixed top-0 left-0 right-0 bg-white">
      <div className="flex items-center justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Link href="/" className="flex items-center -ml-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <span className="text-xl font-bold -ml-3">
            Data<span className="text-red-600">Query</span> AI
          </span>
        </Link>
      </div>
      <ul className="gap-5 font-semibold justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full hidden md:flex">
        <Link className='hover:text-red-600 hover:font-bold' href="#home"><li>Home</li></Link>
        <Link className='hover:text-red-600 hover:font-bold' href="#features"><li>Features</li></Link>
        <Link className='hover:text-red-600 hover:font-bold' href="#doc"><li>Documentation</li></Link>
        <Link className='hover:text-red-600 hover:font-bold' href="#pricing"><li>Pricing</li></Link>

        <Link className='hover:text-red-600 hover:font-bold' href="#news"><li>News Room</li></Link>
        <Link className='hover:text-red-600 hover:font-bold' href="#team"><li>Team</li></Link>



        <Link className='hover:text-red-600 hover:font-bold' href="#contact"><li>Contact us</li></Link>
      </ul>
      <aside className="flex gap-2 items-center">
        <SignedIn>
          <Link
            href="/dashboard"
            className="bg-red-600 px-4 py-2 rounded-sm text-white hover:bg-red-400"
          >
            Dashboard
          </Link>
          <span className='border-[4.5px] mt-[2px] border-orange rounded-full'>
            <UserButton />
          </span>
        </SignedIn>
        <SignedOut>
          <Link
            href="/dashboard"
            className="bg-red-600 px-4 py-2 rounded-sm text-white hover:bg-red-400"
          >
            Login
          </Link>
          <UserButton />
        </SignedOut>
      </aside>
    </div>
  )
}

export default NavBar
