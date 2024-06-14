'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SideNav } from './Sidebar/Sidenav';
import {
  getSettingsNavItems,
  getSettingsNavItems2,
} from '@/lib/data/sidebarItems';
import { ModeToggle } from './ModeToggle';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { RootState, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  RiArrowLeftDoubleLine,
  RiArrowRightDoubleLine,
} from '@remixicon/react';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';

export default function SettingsSideBar({
  businessId,
}: {
  businessId: string;
}) {
  const sidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarOpen,
  );
  const dispatch = useDispatch();
  const router = useRouter();
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const SettingsNavItems = getSettingsNavItems(businessId);
  const SettingsNavItems2 = getSettingsNavItems2(businessId);
  return (
    <section
      className={cn(
        'group  flex-col justify-start gap-2 self-stretch overflow-x-visible border-r bg-background px-2 py-3 pb-2.5',
        sidebarOpen ? 'flex  w-72' : ' hidden w-fit md:flex ',
      )}
    >
      <div className="flex items-center justify-between text-sm font-semibold ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant={'ghost'}
                className="flex cursor-pointer items-center gap-2 text-primary"
                onClick={() => router.push(`/${businessId}/dashboard`)}
              >
                <div>
                  <IoArrowBackSharp className="h-4 w-4" />
                  <span
                    className={cn(sidebarOpen == true ? 'block' : 'hidden')}
                  >
                    Back
                  </span>
                </div>
              </Button>
            </TooltipTrigger>
            {sidebarOpen == true ? null : (
              <TooltipContent data-side="bottom">
                <p>{`Back`}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
        <span className={cn(sidebarOpen == true ? 'block' : 'hidden')}>
          Settings
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span
          className={cn(
            'px-4 text-sm font-semibold',
            sidebarOpen == true ? 'block' : 'hidden',
          )}
        >
          Personal
        </span>
        <SideNav
          className="hidden text-black hover:text-background"
          items={SettingsNavItems}
          sidebarOpen={sidebarOpen}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span
          className={cn(
            'px-4 text-sm font-semibold',
            sidebarOpen == true ? 'block' : 'hidden',
          )}
        >
          Business
        </span>
        <SideNav
          className="hidden text-black hover:text-background"
          items={SettingsNavItems2}
          sidebarOpen={sidebarOpen}
        />
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              className={cn(
                ' mt-auto hidden w-full  md:flex',
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
    </section>
  );
}
