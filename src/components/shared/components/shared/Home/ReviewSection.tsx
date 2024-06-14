import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import JainEnginners from '@/public/JainEnginners.svg';
import ayushjain from '@/public/ayushjain2.png';
const ReviewSection = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 bg-[#D2FBD0] px-4 py-16 text-[#0D5F07] md:rounded-[64px] lg:flex-row lg:px-16">
      <Image
        src={ayushjain}
        alt="Ayush Jain"
        className="h-50 #border-4 #border-[#FFEEE2] mb-1 w-40 rounded-full"
      />

      <div className="flex h-fit flex-col items-center gap-10 self-stretch lg:items-start">
        <p className="text-center text-xl font-semibold leading-loose lg:text-start lg:text-2xl ">
          Vyapardost marketplace helped us find 7 new fabricators in a day and
          &nbsp;
          <br className="hidden md:block" />
          in e-auction we saved 2 Lakhs as vendor reduced his offer by 11%.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-center text-xl font-semibold lg:text-start">
            Ayush Jain, Director
          </p>
          <Image
            src={JainEnginners}
            alt="Jain Engineers"
            width="245"
            height={'56'}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
