import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  type?: 'Integration';
  logo?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ trigger, children, title, description, type, logo, isOpen, onClose }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {type === 'Integration' && (
          <div className="-ml-10 -mb-10 flex justify-center gap-3">
            <div className="w-[6.5rem] h-[6.5rem] relative">
              <Image
                src="/logo.png"
                height={60}
                width={60}
                alt="SmartRep"
                className=" ml-[3rem]"
              />
            </div>
            <div className="text-gray-400">
              <ArrowLeft size={20} />
              <ArrowRight size={20} />
            </div>
            <div className="w-12 h-12 relative">
              <Image src="/dbconnect.jpg"  
              width={40}
              height={40}
              alt="database" />
            </div>
          </div>
        )}
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className=" text-center">{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
