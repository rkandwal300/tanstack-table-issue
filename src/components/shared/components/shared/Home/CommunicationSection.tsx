import Image from 'next/image';
import Checkicon from '@/public/Checkicon.svg';

import sellerchat from '@/public/sellerchat.png';
const CommunicationSection = () => {
  return (
    <div className="my-16 flex w-full max-w-7xl flex-col items-center gap-12 bg-[#F9F5FF] px-4 py-16 md:rounded-[64px] lg:px-16">
      <div className="flex flex-col items-center gap-3 self-stretch">
        <span className="text-base font-semibold text-[#7B68EE]">
          Smart Communication
        </span>
        <span className="text-center text-2xl font-semibold md:text-4xl">
          One place for all vendor communication
        </span>{' '}
        <span className="text-center text-base font-normal">
          Separate chat for each enquiry, so any team member can see, what is
          discussed with vendor for any order.
        </span>
      </div>

      <div className=" flex flex-col items-center gap-8 self-stretch lg:flex-row">
        <Image
          src="https://res.cloudinary.com/dzoykwsbh/image/upload/v1699113411/sellerchat_lbbr2p.svg"
          alt="sellerchat"
          height="305"
          width="620"
          quality={100}
          className=" object-cover"
        />

        <div className="flex flex-1 flex-col items-start gap-8">
          <div className=" flex flex-col items-start gap-5 self-stretch">
            <div className="flex items-start gap-3">
              {' '}
              <Image
                height="20"
                width="20"
                alt="tick"
                src={Checkicon}
                className="py-1"
              />{' '}
              <span className="text-base font-medium text-foreground">
                All vendors get enquiry updates automatically
              </span>
            </div>{' '}
            <div className="flex items-start gap-3">
              {' '}
              <Image
                height="20"
                width="20"
                alt="tick"
                src={Checkicon}
                className="py-1"
              />{' '}
              <span className="text-base font-medium text-foreground">
                Don&apos;t miss important documents when sending RFQ
              </span>
            </div>
            <div className="flex items-start gap-3">
              {' '}
              <Image
                height="20"
                width="20"
                alt="tick"
                src={Checkicon}
                className="py-1"
              />{' '}
              <span className="text-base font-medium text-foreground">
                Customers never have to leave the page to find an answer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSection;
