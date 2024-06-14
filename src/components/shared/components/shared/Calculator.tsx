'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BsCurrencyRupee } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {};

export default function Calculator({}: Props) {
  return (
    <div className="flex max-w-7xl flex-1 flex-col items-center gap-12 px-4 lg:px-16">
      <p className="text-center text-4xl font-semibold md:text-6xl">
        Calculate Your Savings
      </p>
      <div className="flex flex-wrap items-center justify-center text-center text-lg font-medium md:text-2xl">
        <p className=" flex gap-2 whitespace-nowrap">
          Magical Savings
          <Image
            src="/magic-wand.png"
            alt="magic_wand"
            height="22"
            width="22"
          />
          with
        </p>
        Automation, Spend Analytics, e-auction together.
      </div>
      <p className="font flex flex-wrap items-center justify-center gap-2 text-center text-2xl font-semibold md:text-3xl">
        See how much <span className="text-[#F75123]">vyapardost</span> will
        save you.
      </p>

      <form
        onSubmit={(values: any) => {}}
        className="flex h-fit w-full flex-col items-start  gap-8 pb-16 md:w-[600px]"
      >
        <p className="w-full text-center text-xl font-medium">
          Get free report of your spend analysis.
        </p>

        <div className="flex  w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col gap-1.5">
            <p className="text[#344054] text-sm font-medium">
              Monthly Spend (Order Value)
            </p>

            <div className=" flex items-center rounded-md border border-input   pl-1 shadow-sm">
              <BsCurrencyRupee size={14} />
              <Input className="border-0 shadow-sm focus-visible:ring-0" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <p className="text[#344054] text-sm font-medium">
              Monthly Orders Created
            </p>
            <Input />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col gap-1.5">
            <p className="text[#344054] text-sm font-medium">
              Monthly Spend (Order Value)
            </p>

            <Input className=" w-full " />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <p className="text[#344054] text-sm font-medium">
              Monthly Orders Created
            </p>

            <Input
              className=" w-full "
              type="email"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <Button
          size={'lg'}
          className=" shadow-xs flex items-center gap-2 bg-[#F75123] text-lg font-semibold"
        >
          See Saving <IoIosArrowForward />
        </Button>
        <p className="flex-gap-2 text-xs font-normal">
          By clicking the button above, you agree to our
          <span className="text-primary">Terms of Use</span> and
          <span className="text-primary"> Privacy Policy.</span>
        </p>
      </form>
    </div>
  );
}
