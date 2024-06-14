import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';

type Props = {};

export default function ChatList({}: Props) {
  let newApprovedArr = [
    {
      approved: true,
    },
  ];
  return (
    <div className="flex w-full items-center border-b px-6 py-4">
      <Avatar className="mr-4 h-8 w-8 overflow-visible">
        <AvatarImage src="profile.svg" alt="profile" />
        {newApprovedArr[0].approved ? (
          <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 "></div>
        ) : (
          <div className="absolute bottom-0 right-0 rounded-full bg-white"></div>
        )}
        <AvatarFallback>
          <Image src="profile.svg" width={32} height={32} alt="#" />
          {newApprovedArr[0].approved ? (
            <div className="absolute bottom-0 right-0 rounded-full bg-white">
              <BsCheckCircleFill className="h-4 w-4 text-green-500" />
            </div>
          ) : (
            <div className="absolute bottom-0 right-0 rounded-full bg-white">
              <AiFillCloseCircle className="h-4 w-4 text-red-500" />
            </div>
          )}
        </AvatarFallback>
      </Avatar>

      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center">
          <p className="font-semibold">Ganesh Trader - Seller</p>
          <p className="">ganeshtrader@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
