'use client';

import React from 'react';
import { Card, CardContent, CardDescription } from '../ui/card';
import Image from 'next/image';
import IntegrationTrigger from './IntegrationTrigger';
import { INTEGRATION_LIST_ITEMS_DB } from '@/constants/integrationsdb';

const DatabaseConnect = () => {
  return (
    <div className="w-96 h-40 m-6 border border-red-600 rounded-lg  hover:shadow-xl hover:shadow-red-600">
      {INTEGRATION_LIST_ITEMS_DB.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex flex-col p-5 gap-2">
            <div className="flex w-full justify-between items-start gap-x-20">
              <div>
                <div className="w-10 h-10 relative">
                  <Image height={60} width={60} src="/logo.png" alt="Logo" />
                </div>
                <h2 className="font-bold capitalize">{item.name}</h2>
              </div>
              <IntegrationTrigger
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

export default DatabaseConnect;
