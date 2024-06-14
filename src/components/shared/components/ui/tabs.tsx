'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from './button';

const Tabs = TabsPrimitive.Root;

const TabsListVariants = cva(' inline-flex items-center justify-start h-9', {
  variants: {
    variant: {
      // primary is underline
      primary: 'rounded-none bg-background gap-2 p-0',
      //secondary is shadcn default
      secondary: 'rounded-lg bg-muted p-1',
    },
    size: {
      default: 'h-9',
      sm: 'h-8  text-xs',
      lg: 'h-10 ',
      icon: 'h-9 w-9',
    },
    width: {
      full: 'w-full',
      fit: 'w-fit',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    width: 'full',
  },
});

const TabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-normal transition-all disabled:pointer-events-none data-[state=active]:text-foreground px-3',
  {
    variants: {
      variant: {
        // primary is underline
        primary:
          'bg-background border-background focus:border-primary ring-0 outline-none shadow-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary disabled:opacity-100 data-[state=active]:shadow-none rounded-none m-0 pt-1.5 pb-2 hover:bg-background-muted pb-3 px-0',
        // secondary is shadcn default
        secondary:
          'data-[state=active]:bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:shadow disabled:opacity-50 rounded-md py-1',
      },
      size: {
        default: 'h-fit',
        sm: ' text-xs',
        lg: '',
        icon: 'h-9 w-9',
      },
      width: {
        fit: 'w-fit',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      width: 'fit',
    },
  },
);

export interface TabsListProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof TabsListVariants> {
  asChild?: boolean;
}

export type TabListType = TabsListProps &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabListType
>(({ className, variant, size, width, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(TabsListVariants({ variant, size, width, className }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof TabsTriggerVariants> {
  asChild?: boolean;
}

export type TabsTriggerType = TabsListProps &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerType
>(({ className, variant, size, width, ...props }, ref) => (
  <TabsPrimitive.Trigger
    asChild={false}
    ref={ref}
    className={cn(TabsTriggerVariants({ variant, size, width, className }))}
    {...props}
  >
    {variant == 'primary' ? (
      <span className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
        {props.children}
      </span>
    ) : (
      props.children
    )}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//     ({ className, variant, size, asChild = false, ...props }, ref) => {
//       const Comp = asChild ? Slot : "button"
//       return (
//         <Comp
//           className={cn(buttonVariants({ variant, size, className }))}
//           ref={ref}
//           {...props}
//         />
//       )
//     }
//   )
//   Button.displayName = "Button"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
