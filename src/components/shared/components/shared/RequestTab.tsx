import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type PageProps = {
  BusinessId: string;
  selectedPage: 'requisitions' | 'rfqs' | 'orders';
};
export default function RequestTab({ BusinessId, selectedPage }: PageProps) {
  return (
    <div className="#border-b inline-flex items-center justify-start gap-2 rounded-none bg-background">
      <Link
        href={`/${BusinessId}/requisitions`}
        className={cn(
          'hover:bg-background-muted m-0 inline-flex items-center justify-center whitespace-nowrap rounded-none  bg-background px-3 pb-3 pt-1.5 text-sm font-normal shadow-none outline-none ring-0 transition-all data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none focus:border-primary disabled:pointer-events-none disabled:opacity-100 ',
          selectedPage === 'requisitions' &&
            'border-b-2 border-primary text-foreground shadow-none',
        )}
      >
        Requisition
      </Link>
      <Link
        href={`/${BusinessId}/rfqs`}
        className={cn(
          'hover:bg-background-muted m-0 inline-flex items-center justify-center whitespace-nowrap rounded-none  bg-background px-3 pb-3 pt-1.5 text-sm font-normal shadow-none outline-none ring-0 transition-all data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none focus:border-primary disabled:pointer-events-none disabled:opacity-100 ',
          selectedPage === 'rfqs' &&
            'border-b-2 border-primary text-foreground shadow-none',
        )}
      >
        RFQ
      </Link>
      <Link
        href={`/${BusinessId}/orders`}
        className={cn(
          'hover:bg-background-muted m-0 inline-flex items-center justify-center whitespace-nowrap rounded-none  bg-background px-3 pb-3 pt-1.5 text-sm font-normal shadow-none outline-none ring-0 transition-all data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none focus:border-primary disabled:pointer-events-none disabled:opacity-100 ',
          selectedPage === 'orders' &&
            'border-b-2 border-primary text-foreground shadow-none',
        )}
      >
        Orders
      </Link>
    </div>
  );
}
