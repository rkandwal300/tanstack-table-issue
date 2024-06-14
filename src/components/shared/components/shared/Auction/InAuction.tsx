'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const InAuction = () => {
  const [time, setTime] = useState<number>(0);
  const [tax, setTax] = useState<number>(1.25);
  const [auction, setAuction] = useState<boolean>(true);
  const handleTax = (a: boolean) => {
    if (a) {
      const tempTax = tax + 0.1;
      setTax(tempTax);
    } else {
      if (tax <= 0) {
        setTax(0);
        return;
      } else {
        const tempTax = tax - 0.1;
        setTax(tempTax);
      }
    }
  };
  const handleTime = (a: boolean) => {
    if (a) {
      const tempTax = time + 5;
      setTime(tempTax);
    } else {
      if (time <= 0) {
        setTime(0);
        return;
      } else {
        const tempTax = time - 5;
        setTime(tempTax);
      }
    }
  };
  const handleChangeTime = (e: string, b: boolean) => {
    if (b) {
      setTime(+e);
    } else {
      setTax(+e);
    }
  };

  return (
    <div className="flex w-[512px] flex-col gap-8 rounded-xl  p-6 shadow ">
      <span className="text-lg font-semibold"> Auction Setting</span>
      <div className="flex flex-col items-start self-stretch">
        <div className=" flex items-center justify-between self-stretch border-b p-4">
          <span className="text-sm font-semibold">
            {' '}
            Increase Auction Time By{' '}
          </span>
          <div className="flex  items-center gap-1">
            <Button
              variant="destructive"
              className=" bg-destructive/10 text-destructive"
              onClick={() => {
                handleTime(false);
              }}
            >
              <AiOutlineMinus size={18} />
            </Button>
            <div className=" flex h-full w-16   items-center  p-0 text-sm font-semibold">
              <input
                type="text"
                value={time}
                onChange={e => handleChangeTime(e?.target?.value, true)}
                className="h-full w-[60%]  pr-2 text-right "
              />
              <span className="flex  h-full w-[40%] items-center bg-transparent  px-0 ">
                {' '}
                min
              </span>
            </div>
            <Button
              variant="destructive"
              className=" bg-primary/10 text-primary"
              onClick={() => {
                handleTime(true);
              }}
            >
              <AiOutlinePlus size={18} />
            </Button>
          </div>
        </div>
        <div className=" flex items-center justify-between self-stretch border-b p-4">
          <span className="text-sm font-semibold"> Minimum Discount % </span>
          <div className="flex items-center gap-1">
            <Button
              variant="destructive"
              className=" bg-destructive/10 text-destructive"
              onClick={() => {
                handleTax(false);
              }}
            >
              <AiOutlineMinus size={18} />
            </Button>
            <div className="flex w-16  items-center  px-1 text-sm font-semibold">
              <input
                type="text"
                value={tax}
                className="h-full w-full pl-2 "
                onChange={e => handleChangeTime(e?.target?.value, false)}
              />
              <span className="flex h-full w-fit  items-center ">%</span>
            </div>
            <Button
              variant="destructive"
              className=" bg-primary/10 text-primary "
              onClick={() => {
                handleTax(true);
              }}
            >
              <AiOutlinePlus size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex  items-start  gap-3 ">
        <Button variant="outline" className="w-1/2">
          Cancel
        </Button>{' '}
        <Button variant={'default'} className="w-1/2">
          Save
        </Button>{' '}
      </div>
    </div>
  );
};

export default InAuction;
