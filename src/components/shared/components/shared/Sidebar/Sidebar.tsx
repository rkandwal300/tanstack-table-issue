// Sidebar Reference
// https://github.com/shadcn-ui/ui/issues/667#issuecomment-1844089910

'use client';
import { cn } from '@/lib/utils';

import { usePathname, useRouter } from 'next/navigation';

import { useState } from 'react';
import CreateNew from '../CreateNew';
import SelectBusiness from '../SelectBusiness';
import { SideNav } from './Sidenav';
import { createNew, NavItems, NavItems2 } from '@/lib/data/sidebarItems';
import { ModeToggle } from '../ModeToggle';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  RiArrowLeftDoubleLine,
  RiArrowRightDoubleLine,
} from '@remixicon/react';
import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sidebar({ businessId }: { businessId: string }) {
  const sidebarOpen = useSelector(
    (state: RootState) => state.sidebar.sidebarOpen,
  );
  const dispatch = useDispatch();
  const NavBusinessItem = NavItems(businessId);
  const NavBusinessItem2 = NavItems2(businessId);
  const createNewDoc = createNew(businessId);
  return (
    <section
      className={cn(
        'group  flex-col justify-start self-stretch overflow-x-visible border-r bg-background px-2 pb-2.5',
        sidebarOpen ? 'flex  w-72' : ' hidden w-fit md:flex ',
      )}
    >
      <SelectBusiness sidebarOpen={sidebarOpen} businessId={businessId} />
      <Separator />
      <CreateNew
        sidebarOpen={sidebarOpen}
        businessId={businessId}
        createNew={createNewDoc}
      />
      <SideNav
        className="hidden text-black hover:text-background"
        items={NavBusinessItem}
        sidebarOpen={sidebarOpen}
      />

      <div className="mt-2 grid gap-1 border-t border-border/20 pt-2 ">
        <SideNav
          className="hidden text-black hover:text-background"
          items={NavBusinessItem2}
          sidebarOpen={sidebarOpen}
        />

        <ModeToggle sidebarOpen={sidebarOpen} />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={'ghost'}
                className={cn(
                  ' hidden w-full md:flex ',
                  sidebarOpen ? 'text-primary' : '',
                )}
                onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
              >
                {sidebarOpen ? (
                  <RiArrowLeftDoubleLine size={16} />
                ) : (
                  <RiArrowRightDoubleLine size={16} />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent data-side="bottom">
              <p>{`${sidebarOpen ? 'Close' : 'Open'} Sidebar`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
}
