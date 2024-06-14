import Image from 'next/image';
import React from 'react';
import LeadButton from './LeadButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Loader from '../Loader';
import { fetchStrapiData } from '@/lib/services/strapi';
import { FnqItem } from '@/lib/typesLandingPage';

const FAQSection = async () => {
  let FaqData: { data?: FnqItem[]; error?: unknown } = {
    data: [],
  };
  try {
    FaqData = await fetchStrapiData('faqs', 'populate=*');
  } catch (error) {
    return <Loader />;
  }

  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-16 md:px-16">
      <p className="text-center text-2xl font-semibold md:text-4xl">
        Frequently asked questions
      </p>

      <Accordion type="single" collapsible className="w-full">
        {FaqData.data ? (
          FaqData.data.map((val, i) => {
            return (
              <AccordionItem key={i} value={`${i}`}>
                <AccordionTrigger className="text-start text-lg font-medium">
                  {val?.attributes?.question}
                </AccordionTrigger>
                <AccordionContent> {val?.attributes?.answer}</AccordionContent>
              </AccordionItem>
            );
          })
        ) : (
          <Loader />
        )}
      </Accordion>

      <div className="flex flex-col items-center gap-4  self-stretch ">
        <Image
          src="/AvatarGroupProfile.png"
          alt="users"
          width={'120'}
          height={'56'}
        />
        <div className=" flex flex-col items-center gap-2">
          <p className="text-center text-lg font-medium">
            Still have questions?
          </p>
          <p className="text-center text-lg font-normal">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <LeadButton text="Get in  Touch" default={true} />
      </div>
    </div>
  );
};

export default FAQSection;
