import { CheckCircle2Icon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

type IntegrationModalBodyProps = {
  type: string;
  onClose: () => void;
};

export const IntegrationModalBody = ({ type, onClose }: IntegrationModalBodyProps) => {
  switch (type) {
    case 'Database':
      return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold">DB Name</h1>
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter database Name "
            required
          />
          <h1 className="font-bold">Database URL</h1>
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter database URL"
            required
          />
          <h1 className="font-bold">Username</h1>
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter username"
            required
          />
          <h1 className="font-bold">Password</h1>
          <input
            type="password"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter password"
            required
          />
          <h1 className="font-bold">Connection Settings</h1>
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter connection settings"
            required
          />
          <div className="flex justify-end mt-6">
            <Button className="bg-red-600 hover:bg-red-700 w-1/2" onClick={onClose}>Connect</Button>
          </div>
          <div className="flex justify-between mt-10">
            <Link href="../#doc">
              <Button variant="outline">Learn more</Button>
            </Link>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
