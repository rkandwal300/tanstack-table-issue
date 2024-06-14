'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineUser } from 'react-icons/ai';
import { CustomInputLable } from './CustomInputLable';
import { BiFilter, BiSearch, BiSortAlt2 } from 'react-icons/bi';
import { Badge } from '@/components/ui/badge';
import { BsCalendarEvent } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

type objectB = {
  [x: string]: string;
};

const ActivityLog = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSearch = (data: objectB) => {};
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-6 self-stretch p-4">
        <div className=" text-sm font-[500]"> Activity Log</div>
        <div className=" flex flex-wrap items-center justify-between  gap-2 self-stretch">
          <div className=" flex w-fit items-center justify-center gap-2 border  p-1">
            <Button variant="default"> All</Button>
            <Button variant="outline"> Company</Button>
            <Button variant="outline"> Sellers</Button>
            <Button variant="outline">
              {' '}
              <AiOutlineArrowRight />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex w-full min-w-72 items-center">
              <BiSearch className="relative left-6 h-5 w-5" />{' '}
              <CustomInputLable
                setFunc={handleSearch}
                id={'search'}
                placeholder="Type to search..."
                disabled={false}
                type={'text'}
                className=" pl-7"
              />
            </div>
            <Button variant="outline">
              <BiFilter className="mr2 h-5 w-5" />
              Filters
            </Button>
            <Button variant="outline">
              <BiSortAlt2 className="mr2 h-5 w-5" />
              Sort
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-1.5">
          <Badge variant="default" className="bg-primary/10 text-primary">
            <AiOutlineUser className="mr-2 h-4 w-4" />
            ME
          </Badge>
          <Badge variant="default" className="bg-primary/10 text-primary">
            <BiSearch className="mr-2 h-4 w-4" />
            Name
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          </Badge>
          <Badge variant="default" className="bg-primary/10 text-primary">
            <BiSearch className="mr-2 h-4 w-4" />
            Name
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          </Badge>
          <Badge variant="default" className="bg-primary/10 text-primary">
            <BiSearch className="mr-2 h-4 w-4" />
            Name
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          </Badge>
          <Badge variant="default" className="bg-primary/10 text-primary">
            <BsCalendarEvent className="mr-2 h-4 w-4" />
            Due Date
          </Badge>
          <Badge variant="default" className="bg-primary/10 text-primary">
            <BiSearch className="mr-2 h-4 w-4" />
            Name
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 self-stretch p-6">
        {/* item1 */}
        {data.map((val, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 self-stretch border-b p-1"
          >
            <div className="flex items-start justify-between gap-3 self-stretch">
              <div className="flex items-start gap-3 self-stretch">
                <span className=" text-sm font-[500] text-primary">
                  {' '}
                  Vishal
                </span>

                <Badge
                  variant={'outline'}
                  className="bg-green-300/10 text-green-300"
                >
                  {' '}
                  Added
                </Badge>
                <span className=" text-sm font-[500] "> Announcement</span>
              </div>
              <span className=" text-sm font-normal ">
                {' '}
                12 Jan 2033 , 10:20 AM
              </span>
            </div>
            <div className=" text-sm font-normal">
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              error.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
