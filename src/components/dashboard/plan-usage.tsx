import React from 'react'
import { ProgressBar } from '../progress'
import Image from 'next/image'

type PlanUsageProps = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
  credits: number
  domains: number
  clients: number
}

export const PlanUsage = ({
  plan,
  credits,
  domains,
  clients,
}: PlanUsageProps) => {
  console.log(credits)
  return (
    <div className="flex flex-col md:flex-row h-[30vh]">
        <div className='flex flex-col gap-5 w-[300px]'>
      <ProgressBar
        end={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 100 : 500}
        label="Email Credits"
        credits={credits}
      />
      <ProgressBar
        end={plan == 'STANDARD' ? 1 : plan == 'PRO' ? 100 : 500}
        label="Domains"
        credits={domains}
        
      />
      <ProgressBar
        end={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 100 : 500}
        label="Contacts"
        credits={clients}
      />
    </div>
    <div className=' h-[30vh] flex flex-col j'>
      
      <Image src="/images/plan-used-1.png" width={200} height={300} alt="image" className='md:mt-[8vh]' />
     
    </div>
    </div>
  )
}
