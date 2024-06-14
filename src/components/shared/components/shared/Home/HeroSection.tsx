import Image from 'next/image';
import React from 'react';
import LeadButton from './LeadButton';
import mahindra from '@/public/mahindra.png';
import mahindraleap from '@/public/mahindraleap.png';
import trophy from '@/public/trophy.png';

const HeroSection = () => {
  return (
    <div
      id="overview"
      className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-8 text-center lg:px-16 lg:py-16"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 self-stretch md:gap-6">
          <Image
            className=""
            src={mahindra}
            alt="mahindra"
            height="20"
            style={{ height: 'auto' }}
            quality={100}
          />{' '}
          <Image className="" src={trophy} alt="startup lead" height="24" />
          <Image
            className="width-auto"
            src={mahindraleap}
            alt="startup lead"
            height="20"
            quality={100}
          />
        </div>
        <p className="text-lg font-semibold md:text-xl">
          #Top 8 Real Estate Tech Startup 2023
        </p>
      </div>
      <p className="text-3xl font-semibold md:text-6xl">
        Next Gen Procurement Software
      </p>
      <p className="flex flex-wrap items-center justify-center text-center  text-lg font-medium md:text-2xl">
        <span className=" flex gap-2 whitespace-nowrap">
          Magical Savings
          <Image
            src="/magic-wand.png"
            alt="magic_wand"
            height="22"
            width="22"
          />
        </span>
        with Automation, Spend Analytics, e-auction together.
      </p>
      <div className="flex flex-col items-start gap-3  md:flex-row">
        <LeadButton default={false} text="Book a Demo" />

        <LeadButton size="lg" default={true} text="Start Free Trial" />
      </div>
    </div>
  );
};

export default HeroSection;

/*    <iframe width='100%' height='750px' src='https://zoho-admin41.zohobookings.in/portal-embed#/customer/173244000000232002' frameborder='0' allowfullscreen='' > </iframe> */
