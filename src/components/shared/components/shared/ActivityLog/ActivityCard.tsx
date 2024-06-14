import { ActivityItemSchema } from '@/lib/validation/ActivityLogSchema';
import React from 'react';
import { z } from 'zod';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import ActivityLogSubCard from './ActivityLogSubCard';
const ActivityCard = async ({
  data,
}: {
  //   data?: z.infer<typeof ActivityItemSchema>;
  data: any;
}) => {
  return (
    <div className="flex  h-fit gap-2 py-2">
      <div className=" flex flex-col items-center justify-center gap-2 ">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Separator className="h-1/2" orientation="vertical" />
      </div>
      <div className="flex h-20 w-full flex-col gap-1 text-sm ">
        <div className="flex flex-nowrap items-center justify-start gap-2 font-medium">
          <span className="text-primary"> Vishal Shinde</span>
          <Badge className="capitalize">created</Badge>
          <span>Line Item</span>
          <span className="ml-auto font-normal text-muted-foreground">
            28 july 2023, 10:50 AM
          </span>
        </div>
        <ActivityLogSubCard activityType={data.activityType} />
      </div>
    </div>
  );
};

export default ActivityCard;
