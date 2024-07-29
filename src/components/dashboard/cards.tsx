import React from 'react'

type Props = {
  title: string
  value: number
  icon: JSX.Element
  sales?: boolean
  testing?: boolean
  backgroundColor?: string
}

const DashboardCard = ({ icon, title, value, sales, testing, backgroundColor }: Props) => {
  return (
    <div 
      className={`rounded-lg flex flex-col gap-3 pr-5 pl-5 py-5   cursor-pointer hover:shadow-lg hover:shadow-red-300`} 
      style={{ background: backgroundColor || 'linear-gradient(to right, #ec4899, #c084fc, #f87171)' }} // default gradient
    >
      <div className="flex gap-3">
        {icon}
        <h2 className="font-bold text-lg text-white"> {title}</h2>
      </div>
      <div className='text-center'>
        <p className="font-bold text-sm pl-2 text-white">
          {sales && '₹'}
          {value} <br/>
          <span className='text-[10px]'> {testing && "(Testing Mode)"} </span>
        </p>
      </div>
    </div>
  )
}

export default DashboardCard
