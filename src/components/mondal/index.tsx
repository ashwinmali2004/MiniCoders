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
  image?: string; // Add optional image prop
};

const Modal = ({ trigger, children, title, description, type, logo, image }: Props) => {
  const renderIntegrationHeader = () => (
    <div className="-ml-10 -mb-10 flex justify-center gap-3">
      <div className="w-[6.5rem] h-[6.5rem] relative">
        <Image src="/logo.png" height={60} width={60} alt="SmartRep" className="ml-[3rem]" />
      </div>
      <div className="text-gray-400">
        <ArrowLeft size={20} />
        <ArrowRight size={20} />
      </div>
      <div className="w-12 h-12 relative">
        <Image src={`https://ucarecdn.com/${logo}/`} height={40} width={80} className="-mt-1" alt="Stripe" />
      </div>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {image && (
          <div className="w-full flex justify-center ">
            <Image src={image} alt="Modal Image" width={200} height={100} />
          </div>
        )}
        {type === 'Integration' && renderIntegrationHeader()}
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className="text-center">{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
