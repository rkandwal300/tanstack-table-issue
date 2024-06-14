import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import sudarshan from '@/public/sudarshan.png';

export function CardTeam({
  link = '',
  name = '',
  designation = '',
  description = '',
  linkedin = '',
}: {
  link?: string | StaticImageData;
  name?: string;
  designation?: string;
  description?: string;
  linkedin?: string;
}) {
  return (
    <div className="flex w-[343px] max-w-[383px] flex-col items-center justify-items-center gap-4 self-stretch  border-0 p-6 text-center shadow-none">
      <Image src={link} alt="profile" className="w-32 rounded-full" />

      <div className=" flex flex-col items-center justify-center ">
        <p className="text-lg font-semibold text-foreground">{`${name}`}</p>
        <p className="text-base font-medium text-primary ">{designation}</p>
      </div>

      <div className="flex flex-col items-center justify-between gap-4">
        <p className="text-base font-normal text-muted-foreground md:h-20">
          {description}
        </p>
        <div className="flex gap-4 text-muted-foreground ">
          {/* <BsTwitter /> */}
          <Link href={linkedin || '#'}>
            <BsLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
