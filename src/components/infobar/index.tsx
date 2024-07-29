import React from 'react'
import BreadCrumb from './bread-crumb'
import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserButton } from '@clerk/nextjs'
import Searchbar from '../searchbar'
import Sidesheet from '../sidesheet'
type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center  pt-3 pb-2  pl-2 fixed  h-[140px] md:h-[100px] bg-white pr-[65px] z-10">
      <div className="">
        <BreadCrumb />
      </div>
      <div className='flex'>
<div className='flex'>
  <div className='md:mr-[12rem] p-1' >
      <Searchbar />
      
      </div>
      <div className='ml-3 mt-2 mr-3'>
      <Sidesheet />
      </div>
      </div>
        <div className="flex  gap-2 items-center    ">
        <div>
       
        
     
          
          <Card className="rounded-xl flex gap-3 py-2 px-3 text-ghost">
            <Trash />
            <Star />
          </Card>
        </div>
        <Avatar className="">
          <AvatarFallback className="bg-red-600 text-white cursor-pointer hover:bg-purple-700">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <span className='border-[4.5px] mt-[2px] border-purple-600 rounded-full hover:shadow-xl hover:shadow-cyan-500'>
        <UserButton />
        </span>
      </div>
      </div>
     
      {/* <div className="block sm:hidden">
        <BreadCrumb />
      </div> */}
    </div>
  )
}

export default InfoBar
