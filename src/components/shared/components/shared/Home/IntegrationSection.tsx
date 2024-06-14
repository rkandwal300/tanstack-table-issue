import Image from 'next/image';
import React from 'react';

const IntegrationSection = () => {
  return (
    <div
      id="integration"
      className="my-16 flex w-full max-w-7xl flex-col items-center gap-12 bg-[#F9F5FF] px-4 py-16 md:rounded-[64px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-3 self-stretch">
        {' '}
        <span className="text-base font-semibold text-[#7B68EE]">
          Integration
        </span>
        <span className="text-center text-2xl font-semibold md:text-4xl ">
          Get more value from your existing tools
        </span>
      </div>
      <p className="text-center text-base font-normal">
        Whether you are already using any ERP, SAP or accounting software;{' '}
        <br className="hidden md:block" />
        vyapardost will put you ahead over businesses which rely only on
        traditional ERP.
      </p>

      <div className="flex items-start justify-center gap-8">
        <Image src="/SAP.png" alt="sap" height="80" width="162" />
        <Image src="/tally.png" alt="tally" height="80" width="136" />
        <Image src="/zoho-logo.png" alt="zoho" height="80" width="187" />
      </div>

      <p className="text-center text-base font-normal">
        Want to connect with existing tools, Let us know!{' '}
        <br className="hidden md:block" /> we will connect vyapardost with your
        existing tools.
      </p>
    </div>
  );
};

export default IntegrationSection;
