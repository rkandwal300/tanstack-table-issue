import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        primary:
          'border-primary bg-background text-primary hover:bg-primary hover:text-background font-semibold',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    // defaultVariants: {
    //   variant: 'default',
    // },
  },
);

const statusList = {
  draft: { start: 'bg-background', end: 'text-background-foreground' },
  pending: { start: 'bg-warning', end: 'text-warning-foreground' },
  rejected: {
    start: 'bg-destructive',
    end: 'text-destructive-foreground',
  },
  partiallyRejected: {
    start: 'bg-destructive ',
    end: 'bg-destructive/40 text-destructive-foreground',
  },
  completelyRejected: {
    start: 'bg-destructive ',
    end: 'text-destructive-foreground',
  },
  approved: { start: 'bg-blue-700', end: 'text-blue-50' },
  rfq: { start: 'bg-Fuchsia-600', end: 'text-Fuchsia-50' },

  partialQuotesReceived: {
    start: 'bg-success ',
    end: 'bg-destructive text-success/30',
  },
  allQuotesReceived: { start: 'bg-success', end: 'text-success/30' },
  auctionScheduled: {
    start: 'bg-destructive-foreground',
    end: 'text-destructive',
  },
  auctionOngoing: {
    start: 'bg-destructive',
    end: 'bg-destructive text-destructive-foreground',
  },
  auctionEnded: {
    start: 'bg-destructive ',
    end: 'text-destructive-foreground',
  },
  orderCreated: { start: 'bg-purple-400', end: 'text-purple-950' },
  partiallyOrdered: {
    start: 'bg-purple-600',
    end: 'bg-destructive  text-purple-50',
  },
  completelyOrdered: { start: 'bg-purple-600 ', end: 'text-purple-50' },
  ordered: { start: 'bg-purple-600 ', end: 'text-purple-50' },
  partiallyConfirmed: {
    start: 'bg-purple-600',
    end: 'text-purple-50',
  },
  completelyConfirmed: { start: 'bg-purple-600', end: 'text-purple-50' },
  partiallyShipped: {
    start: 'bg-Fuchsia-600 ',
    end: 'text-Fuchsia-50',
  },
  completelyShipped: { start: 'bg-Fuchsia-600 ', end: 'text-Fuchsia-50' },
  partiallyReceived: {
    start: 'bg-success ',
    end: 'bg-destructive text-success/30',
  },
  completelyReceived: { start: 'bg-success ', end: 'text-success/30' },
  cancelled: { start: 'bg-muted-600 ', end: 'text-muted-50' },
};
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  // status?: keyof typeof statusList; // Ensure status prop accepts only keys of statusList
  status?: string; // Ensure status prop accepts only keys of statusList
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

function Badge({
  className,
  variant,
  leftSection,
  rightSection,
  status,
  ...props
}: BadgeProps) {
  let statusEntry = {
    start: '',
    end: '',
  };

  if (status) {
    statusEntry = statusList[status as keyof typeof statusList] || {};
  }

  return (
    <div
      className={cn(
        badgeVariants({ variant }),

        'relative flex items-center gap-1',
        className,
        `${statusEntry.end}`,
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute bottom-0 left-0 top-0 -z-10 w-1/2',
          className,
          `${statusEntry.start}`,
        )}
      />
      {leftSection && <>{leftSection}</>}
      {props.children}
      {rightSection && <>{rightSection}</>}
    </div>
  );
}
export { Badge, badgeVariants };
