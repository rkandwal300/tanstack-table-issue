'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { DatePicker } from './DatePicker';
type timepicker = {
  h: number;
  m: number;
  set: string;
};

const AddressEdit = () => {
  const defaultTimePicker = {
    h: 0,
    m: 0,
    set: 'am',
  };
  const [time, setTime] = useState<number>(0);
  const [tax, setTax] = useState<number>(1.25);
  const [auction, setAuction] = useState<boolean>(true);
  const [timepick, setTimepick] = useState<timepicker>(defaultTimePicker);

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
      <span className="text-lg font-semibold"> Auction Settings</span>
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
        <div className=" flex items-center justify-between self-stretch border-b p-4">
          <span className="text-sm font-semibold"> Auction Type </span>
          <div className="flex items-center gap-1 border p-1">
            <Button
              variant={auction ? 'default' : 'outline'}
              className="border-0"
              onClick={() => {
                setAuction(!auction);
              }}
            >
              Reverse (buy)
            </Button>
            <Button
              variant={auction ? 'outline' : 'default'}
              className="border-0"
              onClick={() => {
                setAuction(!auction);
              }}
            >
              Reverse (buy)
            </Button>
          </div>
        </div>
        <div className=" flex items-center justify-between self-stretch border-b p-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              {' '}
              Start Auction on Date{' '}
            </span>
            <DatePicker />
          </div>
          <div className="flex  flex-col items-center gap-1">
            <span className="text-sm font-semibold"> Start Time </span>
            <div className="flex  items-center gap-1 self-stretch">
              <input
                value={timepick?.h}
                type={'text'}
                className="h-11 w-12 border text-center"
                onChange={e => {
                  const temp = {
                    ...timepick,
                    h: +e?.target?.value,
                  };
                  setTimepick(temp);
                }}
              />
              :
              <input
                value={timepick?.m}
                type={'text'}
                className="h-11 w-12 border text-center"
                onChange={e => {
                  const temp = {
                    ...timepick,
                    m: +e?.target?.value,
                  };
                  setTimepick(temp);
                }}
              />
              <div className=" border  p-0">
                <Button
                  className="h-2 border-0"
                  variant={timepick.set == 'am' ? 'default' : 'outline'}
                  onClick={() => {
                    const temp = {
                      ...timepick,
                      set: 'am',
                    };
                    setTimepick(temp);
                  }}
                >
                  {' '}
                  Am
                </Button>
                <Button
                  className="h-2 border-0"
                  variant={timepick.set == 'pm' ? 'default' : 'outline'}
                  onClick={() => {
                    const temp = {
                      ...timepick,
                      set: 'pm',
                    };
                    setTimepick(temp);
                  }}
                >
                  {' '}
                  Pm
                </Button>
              </div>
            </div>
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

export default AddressEdit;
