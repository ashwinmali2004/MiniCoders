'use client'
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Modal from "../Modaldb"; // Make sure the import path is correct
import { IntegrationModalBody } from "../databaseConnect/integration-modal-body";

type DbConnection = {
  sn: number;
  dbName: string;
  status: string;
  username: string;
  connected: string;
  lastUpdated: string;
};

const Dbconnectedtable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDb, setCurrentDb] = useState<DbConnection | null>(null);

  const handleOpen = (db: DbConnection) => {
    setCurrentDb(db);
    setIsOpen(true);
  };

  const handleClose = () => {
    setCurrentDb(null);
    setIsOpen(false);
  };

  const data: DbConnection[] = [
    {
      sn: 1,
      dbName: "lamaTester DB",
      status: "Connected",
      username: "lamatester@123",
      connected: "Jul 28, 2024",
      lastUpdated: "Today",
    },
    // Add more data as needed...
  ];

  // Sort data by SN
  const sortedData = data.sort((a, b) => a.sn - b.sn);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent connected databases.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">SN</TableHead>
            <TableHead>DB Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Connected</TableHead>
            <TableHead>Last updated</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((db) => (
            <TableRow key={db.sn}>
              <TableCell>{db.sn}</TableCell>
              <TableCell className="font-medium">{db.dbName}</TableCell>
              <TableCell>
                <h1 className="bg-green-200 text-green-600 font-bold p-2 w-fit text-sm rounded-3xl">
                  {db.status}
                </h1>
              </TableCell>
              <TableCell>{db.username}</TableCell>
              <TableCell>{db.connected}</TableCell>
              <TableCell>{db.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <button
                  className="text-slate-500 w-10 border border-slate-600 rounded-md hover:text-white hover:bg-red-500 hover:shadow-md hover:border-red-500 hover:shadow-red-600"
                  onClick={() => handleOpen(db)}
                >
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isOpen && currentDb && (
        <Modal
          title="Edit Database Connection"
          type="Integration"
          logo="logo.png" // Use the appropriate logo
          description="Update your database connection details."
          isOpen={isOpen}
          onClose={handleClose}
          trigger={<div />} // Provide a default trigger node
        >
          <IntegrationModalBody type="Database" onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Dbconnectedtable;
