'use client'
import { INTEGRATION_LIST_ITEMS } from '@/constants/integrations'
import React from 'react'
import { Card, CardContent, CardDescription } from '../ui/card'
import Image from 'next/image'
import IntegrationTrigger from './IntegrationTrigger'

type Props = {
  connections: {
    stripe: boolean
  }
}

const IntegrationsList = ({ connections }: Props) => {
  return (
    <div className="w-96 h-40 mt-6 border border-cyan-700 rounded-lg  hover:shadow-xl hover:shadow-cyan-500">
      {INTEGRATION_LIST_ITEMS.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex flex-col p-5 gap-2">
            <div className="flex w-full justify-between items-start gap-x-20">
              <div className="">
                <div className="w-10 h-10 relative">
                  <Image
                    sizes="100vw"
                    src={`https://ucarecdn.com/${item.logo}/`}
                    alt="Logo"
                    fill
                  />
                </div>
                <h2 className="font-bold capitalize">{item.name}</h2>
              </div>
              <IntegrationTrigger
                connections={connections}
                title={item.title}
                descrioption={item.modalDescription}
                logo={item.logo}
                name={item.name}
              />
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default IntegrationsList
