'use client';

import React from 'react';
import { Card, CardContent, CardDescription } from '../ui/card';
import Image from 'next/image';

import { INTEGRATION_LIST_ITEMS_DB } from '@/constants/integrationsdb';
import IntegrationTriggerdb from './dashboardIntegrationTrigger';

const DashDatabaseConnect = () => {
  return (
    
    <div className="sm:w-[336px] md:w-[336px] lg:w-[396px] h-40 mt-3 mb-2  rounded-lg  ">
      {INTEGRATION_LIST_ITEMS_DB.map((item) => (
        <Card key={item.id}> 
          <CardContent className="flex flex-col p-5 gap-2 bg-gradient-to-r from-cyan-200  to-orange rounded-lg hover:shadow-xl hover:shadow-cyan-200">
            <div className="flex w-full justify-between items-start gap-x-20 ">
              <div>
                <div className="w-10 h-10 relative">
                  <Image height={60} width={60} src="/logo.png" alt="Logo" />
                </div>
                <h2 className="font-bold capitalize">{item.name}</h2>
              </div>
              <IntegrationTriggerdb
                title={item.title}
                description={item.modalDescription}
                logo={item.logo}
                name={item.name}
              />
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
 
  );
};

export default DashDatabaseConnect;
