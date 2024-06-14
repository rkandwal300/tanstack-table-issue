'use client';
import { Feature } from '@/lib/typesLandingPage';
import Checkicon from '@/public/Checkicon.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';
import VideoPlayer from '../VideoPlayer';
import Loader from '../Loader';
type Props = { data?: Feature[] };

export default function FeatureTab({ data }: Props) {
  return (
    <Tabs defaultValue={data?.[0]?.attributes?.name} className="w-full ">
      <div className="customscrollbar flex-1 self-stretch overflow-auto">
        <TabsList className="mb-3 flex h-auto w-fit gap-x-10 gap-y-3 rounded-none bg-inherit text-foreground sm:flex-wrap lg:mb-12">
          {data?.map((val, i) => {
            // if (i == 1) 
            return (
              <TabsTrigger
                id={val?.attributes?.name}
                key={i}
                value={val?.attributes?.name}
                className={`tab_underline flex  w-fit gap-1.5 rounded-none border-b-[#FFF8FB] bg-inherit px-0 pb-2 pt-1.5 text-base font-semibold capitalize data-[state=active]:border-b-[#FD71AF] data-[state=active]:bg-inherit data-[state=active]:text-[#FD71AF] data-[state=active]:shadow-none order-[${val?.attributes?.sr}] `}
              >
                {val?.attributes?.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      {data?.map((val, i) => {
        // {
        //   
        //     `🚀 ~ file: Feature2Section.tsx:59 ~ ${val.attributes.image.data?.attributes?.url}`
        //   );
        // }
        // {
        //   
        //     `🚀 ~ file: Feature2Section.tsx:59 ~ ${val.attributes.image.data}`,
        //   );
        // }
        {
          
            `val?.attributes?.image?.data?.formats.url ~ ${val?.attributes?.image?.data}`,
          );
        }
        if (val?.attributes?.image?.data?.formats) {
          
        } else {
          
        }
        return (
          <TabsContent key={i} value={val?.attributes?.name}>
            <div className="flex flex-col-reverse gap-3 self-stretch lg:flex-row lg:gap-8 ">
              <div className="flex flex-1 flex-col items-start gap-8">
                <div className=" flex flex-col items-start gap-2 self-stretch">
                  <p className="text-xl font-semibold ">
                    {val?.attributes?.title || ''}
                  </p>
                  <p className="text-base font-normal ">
                    {val?.attributes?.description || ''}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {val?.attributes?.items?.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Image
                        alt="tick"
                        src={Checkicon}
                        width={18}
                        height={18}
                        className="mt-1"
                      />
                      <p className="w-full text-base font-medium text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center gap-6 self-stretch rounded-md drop-shadow-md">
                {val?.attributes?.image?.data?.formats ? (
                  val?.attributes?.image?.data?.formats?.ext !== '.mp4' ? (
                    <Image
                      src={`${val.attributes.image.data?.formats?.url}`}
                      alt={
                        val.attributes.image.data?.alternativeText ||
                        'Requisition Image'
                      }
                      height={305}
                      width={620}
                      quality={100}
                    />
                  ) : (
                    <VideoPlayer
                      src={`${val.attributes.image?.data?.formats?.url}`}
                    />
                  )
                ) : (
                  <div className="aspect-ratio flex  h-72 items-center justify-center ">
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
