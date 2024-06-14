import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Badge } from '../ui/badge';
import Image, { StaticImageData } from 'next/image';
import Verified from '@/public/verified.svg';
import Trusted from '@/public/trusted.svg';
import { Skeleton } from '../ui/skeleton';

interface VendorProfileProps {
  vendorName: string;
  vendorType: string;
  location: string;
  rating: number;
  numRatings: number;
  verified: boolean;
  trusted: boolean;
  imageUrl?: StaticImageData | string;
}

// Use the defined props interface for the component
export default function VendorProfile({
  verified,
  imageUrl,
  vendorName,
  vendorType,
  location,
  rating,
  numRatings,
  trusted,
}: VendorProfileProps) {
  return (
    <div className="flex items-start gap-4">
      {imageUrl ? (
        <Image
          className="rounded-md"
          src={imageUrl}
          alt="#"
          width={72}
          height={72}
        />
      ) : (
        <Skeleton className="h-4 w-16" />
      )}
      <div className="flex flex-col items-start gap-2.5">
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold">{vendorName}</p>
          <div className="flex items-center gap-2.5">
            <Badge variant="outline" className="bg-amber-100 text-orange-900">
              {vendorType}
            </Badge>
            <p className="text-sm">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center rounded-md bg-green-500  px-1.5 py-0.5">
            <p className="text-sm font-bold text-white">{rating}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <AiFillStar className="h-5 w-5 text-amber-400" />
            <AiFillStar className="h-5 w-5 text-amber-400" />
            <AiFillStar className="h-5 w-5 text-amber-400" />
            <AiFillStar className="h-5 w-5 text-amber-400" />
            <AiOutlineStar className="h-5 w-5" />
          </div>
          <p className="text-sm ">{numRatings}</p>
        </div>
        <div className="flex items-start gap-2.5">
          {verified && <Image src={Verified} alt="verified" />}
          {trusted && <Image src={Trusted} alt="trusted" />}
        </div>
      </div>
    </div>
  );
}
