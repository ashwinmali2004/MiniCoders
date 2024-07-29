import React, { useState } from 'react';
import { Card } from '../ui/card';
import { CloudIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import Modal from '../Modaldb';
import { IntegrationModalBody } from './integration-modal-body';

type Props = {
  name: string;
  logo: string;
  title: string;
  description: string;
};

const IntegrationTriggerdb = ({ name, logo, title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Card className="px-3 py-2 cursor-pointer flex gap-2 hover:shadow-md hover:shadow-red-600" onClick={handleOpen}>
        <CloudIcon />
        Connect
      </Card>
      {isOpen && (
        <Modal
          title={title}
          type="Integration"
          logo={logo}
          description={description}
          isOpen={isOpen}
          onClose={handleClose}
          trigger={<div />} // Provide a default trigger node
        >
          <Separator orientation="horizontal" />
          <IntegrationModalBody type={name} onClose={handleClose} />
        </Modal>
      )}
    </>
  );
};

export default IntegrationTriggerdb;
