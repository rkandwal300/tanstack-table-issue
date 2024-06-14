import React from 'react';
import Image from 'next/image';
import { Template } from '@/lib/typesLandingPage';
import Loader from '../Loader';
import NewsLetter from '../NewsLetter';
import Link from 'next/link';

type Props = {
  data: Template[];
};

const Templates = async ({ data }: Props) => {
  if (data.length > 0) {
    return (
      <div className=" flex flex-col items-center gap-8">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12">
          <p className="text-xl font-semibold md:text-2xl ">
            More Free Templates
          </p>
          <div className="flex flex-col items-center justify-start gap-8 self-stretch px-4 md:flex-row md:flex-wrap md:items-start md:px-16">
            {data.map((val, i) => {
              // if (val?.id !== id) {
              return (
                <Link
                  href={`/template/${val?.attributes?.slug}`}
                  key={val?.id}
                  className="flex w-fit max-w-sm flex-wrap items-start gap-8 rounded-xl border bg-background pb-8 shadow-primary"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                    alt="template"
                    height={'240'}
                    width={'390'}
                  />
                  <div className="flex flex-col items-start gap-6 self-stretch px-4 md:px-6 ">
                    <p className="text-xs font-semibold text-[#6941C6] md:text-sm">
                      {val?.attributes?.title}
                    </p>
                    <p className="text-xl font-semibold   md:text-xl ">
                      {val?.attributes?.title}
                    </p>
                  </div>
                </Link>
              );
              // }
            })}
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
};
export default Templates;
