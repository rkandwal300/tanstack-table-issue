import React from 'react';
import Image from 'next/image';
import { Template } from '@/lib/typesLandingPage';
import Loader from '../Loader';
import Checkicon from '@/public/Checkicon.svg';
import TemplateForm from './TemplateForm';
import { createContactApi } from '@/lib/services/zohobegin';

type Props = {
  data: Template;
};

const TemplateHero = async ({ data }: Props) => {
  if (data) {
    return (
      <div className="flex w-full flex-col items-center">
        <p className="flex justify-center self-stretch bg-[#12B76A] p-4 text-4xl font-semibold text-background md:text-5xl lg:p-16">
          {data?.attributes?.title}
        </p>

        <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-6 p-4 md:flex-row lg:p-16">
          <div className="flex flex-1 items-start gap-5">
            <div className="flex flex-col gap-8">
              {data?.attributes?.description ? (
                <p className="text-start text-xl font-semibold md:text-2xl ">
                  {data?.attributes?.description}
                </p>
              ) : null}

              <div className=" flex flex-col items-start gap-5">
                {data?.attributes?.items.map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Image height="18" width="18" alt="tick" src={Checkicon} />{' '}
                    <p className="text-sm font-normal text-foreground md:text-base">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 items-start gap-4">
            <TemplateForm file={data?.attributes?.file} />
          </div>
        </div>
      </div>
    );
  }
};

export default TemplateHero;
