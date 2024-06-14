'use client';

import React, { useEffect } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';

interface ComponentWrapperProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  isHeader?: boolean;
  onSave?: () => void;
  triggerClassName?: string;
  contentClassName?: string;
  headerLabel?: string;
  headerSubmit?: () => void;
  isHeaderVisible?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right' | null | undefined;
}
const SheetHoc: React.FC<ComponentWrapperProps> = ({
  trigger,
  content,
  side = 'right',
  triggerClassName,
  contentClassName,
  isHeaderVisible,
  headerSubmit,
  headerLabel,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={cn('w-fit ', triggerClassName)}>
        {trigger}
      </SheetTrigger>
      <SheetContent
        side={side}
        className={cn('p-0', side == 'bottom' ? 'h-5/6 w-full' : '')}
      >
        <ScrollArea className={cn('h-screen', contentClassName)}>
          {isHeaderVisible ? (
            <div className="section w-full flex-col gap-6 overflow-auto  p-0 ">
              <div className="sticky  z-10 flex h-12 flex-row items-center justify-between border-b bg-background px-4">
                <SheetClose>
                  <Button variant="ghost">Cancel</Button>
                </SheetClose>
                <p className="font-medium">{headerLabel}</p>
                <SheetClose>
                  <Button variant="ghost" onClick={headerSubmit}>
                    Save
                  </Button>
                </SheetClose>
              </div>
              {content}
            </div>
          ) : (
            content
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SheetHoc;
