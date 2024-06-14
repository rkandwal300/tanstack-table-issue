import React from 'react';

const MetricSection = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-8 text-center lg:px-16 lg:py-16">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <span className="text-center text-2xl font-semibold  md:text-4xl ">
          Unleash the full power next gen procurement
        </span>
        <span className="text-center text-base font-normal capitalize text-foreground">
          Everything You Need To Optimize, Automate, And Scale Your Procurement
          Process
        </span>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-4 gap-y-10 self-stretch text-4xl md:flex md:flex-row md:justify-evenly lg:text-5xl ">
        <div className="flex flex-col items-center gap-4 self-stretch md:items-start ">
          <span className="font-semibold text-[#12B76A]"> 1 Day </span>
          <span className="text-center text-base font-medium md:text-lg">
            {' '}
            Implementation{' '}
          </span>
        </div>
        <div className="flex flex-col items-center  justify-center gap-3 self-stretch md:items-start ">
          <span className="w-full text-center font-semibold text-[#12B76A]">
            {' '}
            11%{' '}
          </span>
          <span className="text-center text-base font-medium md:text-lg">
            {' '}
            Savings Delivered{' '}
          </span>
        </div>
        <div className=" flex flex-col items-center gap-4 self-stretch md:items-start ">
          <span className="font-semibold text-[#12B76A]"> 3000+ </span>
          <span className="text-center text-base font-medium md:text-lg">
            {' '}
            Seller Network{' '}
          </span>
        </div>
        <div className=" flex  flex-col items-center gap-4 self-stretch md:items-start ">
          <span className="  font-semibold  text-[#12B76A]"> 20x </span>
          <span className="text-base font-medium md:text-lg ">
            {' '}
            Faster Negotiation{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricSection;
