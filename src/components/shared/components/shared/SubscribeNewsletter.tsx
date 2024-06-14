import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SubscribeNewsletter = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-16 p-14 md:flex-row md:p-16">
      <div className=" flex flex-col items-start gap-5">
        <span className="text-2xl font-semibold md:text-3xl">
          Procurement insights, news and updates in your email
        </span>
        <span className="text-base font-normal md:text-xl">
          Subscribe to our newsletters
        </span>
      </div>{' '}
      <div className="flex items-center gap-4 p-1">
        <Input className="w-64 p-2" placeholder="Enter your email" />
        <Button
          variant="outline"
          className={`rounded-lg bg-[#F75123] text-lg font-semibold text-background `}
        >
          {' '}
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
