import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BsCurrencyDollar, BsCurrencyRupee } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { FiThumbsUp } from 'react-icons/fi';
import Image from 'next/image';

type Props = {
  default: boolean | undefined;
  title: string;
  show_in_usd: boolean;
  show_annual: boolean;
  price_monthly: string | number | null;
  price_annual: string | number | null;
  buy: boolean;
  features: string[];
};
const PriceCard: React.FC<Props> = (props) => {
  return (
    <div
      className={`flex flex-col items-center gap-6 rounded-2xl border bg-background p-8 ${props?.default ? 'border-[#F75123]' : ''}`}
    >
      <div>
        {props?.default ? (
          <Badge className="font-500 flex h-7 w-fit cursor-default items-center justify-center gap-2.5 rounded-full bg-[#48F495] px-2 text-xs tracking-wide text-foreground hover:bg-[#48F495]">
            <FiThumbsUp size="12" />
            VALUE FOR MONEY
          </Badge>
        ) : (
          <div className="h-7 w-fit"></div>
        )}
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-lg font-medium">{props?.title || ''} </p>
        <div className="flex items-end justify-start gap-1 text-4xl font-semibold">
          {!props?.price_annual && !props?.price_monthly ? (
            <p>Get In Touch</p>
          ) : (
            <>
              {props?.show_in_usd
                ? props?.buy && (
                    <BsCurrencyDollar size="16" className="mb-1.5" />
                  )
                : props?.buy && (
                    <BsCurrencyRupee size="16" className="mb-1.5" />
                  )}
              {props?.show_annual ? props?.price_annual : props?.price_monthly}
            </>
          )}
        </div>
        <p className="flex items-center gap-1.5 whitespace-nowrap text-sm font-normal">
          /user/month billed {props?.show_annual ? 'annually' : 'monthly'}
        </p>
      </div>

      {props?.buy ? (
        <Button
          size="lg"
          className={`${props.default ? 'bg-[#F75123]' : 'bg-primary'} shadow-xs w-full text-sm font-semibold`}
        >
          BUY NOW
        </Button>
      ) : (
        <Button
          size="lg"
          className={`${props.default ? 'bg-[#F75123]' : 'bg-primary'} shadow-xs w-full text-sm font-semibold`}
        >
          CONTACT NOW
        </Button>
      )}
      <div className=" flex w-full flex-col  items-start gap-y-4 ">
        {props.features &&
          props.features.map((val, i) => (
            <div key={i} className="flex w-full  items-start gap-3">
              <Image height="20" width="20" alt="tick" src="/Checkicon.svg" />
              <span className="text-sm font-normal text-foreground md:text-base">
                {val}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PriceCard;
