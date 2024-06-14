'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import React from 'react';
import { FiFileText } from 'react-icons/fi';

type Props = {};

export default function TextReceived({}: Props) {
  return (
    <div className="flex w-max max-w-[75%] gap-2">
      <Avatar>
        <AvatarImage src="avatar.png" alt="Image" />
        <AvatarFallback>
          <Image src="profile.svg" width={50} height={50} alt="avtar" />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium">Shyam</p>
        <div className="flex flex-col gap-1 rounded-lg bg-muted px-3 py-2 text-sm">
          <p>Please send samples!</p>
          <p className="text-right text-xs text-muted-foreground">11:40 AM</p>
        </div>
      </div>
    </div>
  );
}
