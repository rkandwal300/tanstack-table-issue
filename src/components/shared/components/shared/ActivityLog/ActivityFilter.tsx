import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaArrowRight } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { LuListFilter } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TbArrowsSort } from 'react-icons/tb';

function ActivityFilter() {
  return (
    <div className="flex flex-col gap-2 p-4 ">
      <Tabs className="w-72">
        <TabsList className="w-fit">
          <TabsTrigger
            value="all"
            className=" data-[state=active]:bg-primary   data-[state=active]:text-primary-foreground "
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className=" data-[state=active]:bg-primary   data-[state=active]:text-primary-foreground "
            value="company"
          >
            Company
          </TabsTrigger>
          <TabsTrigger
            className=" data-[state=active]:bg-primary   data-[state=active]:text-primary-foreground "
            value="seller"
          >
            Seller
          </TabsTrigger>

          <TabsTrigger
            className=" data-[state=active]:bg-primary   data-[state=active]:text-primary-foreground "
            value="arrow"
          >
            <FaArrowRight className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className=" flex justify-start gap-4">
        <div className="flex w-80 flex-col-reverse">
          <IoSearch className="relative -top-6 left-3 h-4 w-4" />
          <Input placeholder="Type to search..." className="pl-8" />
        </div>
        <div className="flex items-start gap-3">
          <Button className="flex items-center gap-2" variant="outline">
            <LuListFilter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="flex items-center gap-2" variant="outline">
            <TbArrowsSort className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ActivityFilter;
