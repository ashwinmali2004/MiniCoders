import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
     
      <div className="overflow-y-auto w-[95%] md:w-100% chat-window flex-1 h-0 flex flex-col gap-10 pt-[140px] md:pt-[90px]">
        <div>
          <Image src="/images/payment-plan.png" width={200} height={200} alt="top-image" />
        </div>
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />
      </div>
      
    </>
  )
}

export default Page
