'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { z } from 'zod';
import { ActivityItemSchema } from '@/lib/validation/ActivityLogSchema';
import { BsClockHistory } from 'react-icons/bs';
import ActivityFilter from './ActivityFilter';
import ActivityCard from './ActivityCard';
import { GetAllActivitiessAction } from '@/lib/actions/activityLog';
import React from 'react';
import { Button } from '@/components/ui/button';
import SheetHoc from '@/components/hoc/SheetHoc';

const ActivityLog = ({
  documentId,
  trigger,
}: {
  trigger: React.ReactNode;
  documentId: string;
}) => {
  const [activity, setActivity] = React.useState<
    z.infer<typeof ActivityItemSchema>[] | null
  >(null);

  React.useEffect(() => {
    GetAllActivitiessAction(documentId)
      .then(data => setActivity(data.activities))
      .catch(err => {
        throw new Error(err);
      });
  }, [documentId]);

  return (
    <SheetHoc
      trigger={trigger}
      content={
        <>
          <SheetHeader className="sticky z-10 bg-background px-4">
            <SheetTitle>Activity Log</SheetTitle>
          </SheetHeader>
          <ActivityFilter />
          <div className="flex flex-col gap-2 p-4">
            <ActivityCard data={{ activityType: 'created' }} />
            <ActivityCard data={{ activityType: 'lineItem' }} />
            <ActivityCard data={{ activityType: 'changed' }} />
            {/* {activity ? (
        activity?.map(
          (val: z.infer<typeof ActivityItemSchema>, index) => (
            <ActivityCard key={index} data={val} />
          ),
        )
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className=" text-xl font-semibold text-muted-foreground">
            No Activities Found
          </p>
        </div>
      )}
  */}
          </div>
        </>
      }
    />
  );
};

export default ActivityLog;
