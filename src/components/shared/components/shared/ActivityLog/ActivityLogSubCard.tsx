import React from 'react';

type ActivityLogSubCard = {
  activityType:
    | 'created'
    | 'cancelled'
    | 'sent'
    | 'name'
    | 'description'
    | 'changed'
    | 'dates'
    | 'statusChange'
    | 'lineItem'
    | 'attachment'
    | 'term'
    | 'announcement'
    | 'auction'
    | 'sellerRejectedByBuyer'
    | 'approvedBySomeone';
};
export default function ActivityLogSubCard({
  activityType,
}: ActivityLogSubCard) {
  return (
    <div className="w-full text-muted-foreground">
      {activityType === 'created' ? (
        <>{'{Requisition Name}'}</>
      ) : activityType == 'lineItem' ? (
        <LintItemActivity />
      ) : activityType == 'changed' ? (
        <ChangedActivity />
      ) : null}
    </div>
  );
}

function LintItemActivity() {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <span> {`Name : AABlock`}</span>
      <span> {`Quantity : AABlock`}</span>
      <span> {`Specification : AABlock`}</span>
    </div>
  );
}

function ChangedActivity() {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <div className="flex gap-2">
        <span className="font-semibold text-black ">To:</span>
        <span>{`Name : AABlock`}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold  text-black">From:</span>
        <span>{`Name : AABlock`}</span>
      </div>
    </div>
  );
}
