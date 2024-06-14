import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
type Props = {};

export default function GuideHero({}: Props) {
  return (
    <div className="flex flex-col items-center gap-10 self-stretch bg-[#F9F5FF] p-4 py-16 lg:p-16">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <p className="font-semibold text-[#6941C6]">Vyapardost Guides</p>
          <p className="text-center text-3xl font-semibold md:text-4xl ">
            Guides for effective procurement
          </p>
        </div>
        <p className="text-center text-base font-normal text-[#6941C6]">
          Get procurement guides by top procurement experts.
        </p>
      </div>
      <div className="flexcol- flex items-center gap-4 p-1 md:flex-row">
        <Input
          className="w-64 bg-background p-2"
          placeholder="Enter your email"
        />
        <Button
          variant="ghost"
          className={`rounded-lg bg-[#F75123] font-semibold text-background `}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
