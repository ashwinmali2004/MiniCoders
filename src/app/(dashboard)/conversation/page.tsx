import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import React from 'react'


type Props = {}

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains()
  return (
    <>
      <InfoBar />
    <div className="w-full h-full flex pt-[140px] md:pt-[90px]">
      <ConversationMenu domains={domains?.domains} />

      <Separator orientation="vertical" />
      <div className="w-full flex flex-col">
        
       
          
        
        <Messenger />
        
      </div>
    </div>
    </>
  )
}

export default ConversationPage
