'use client';
import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AiOutlinePlus } from 'react-icons/ai';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { sign } from 'crypto';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';
import { NavItem } from '@/lib/data/sidebarItems';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {
  sidebarOpen?: boolean;
  businessId: string;
  classNameMobile?: boolean;
  createNew: NavItem[];
}

export default function CreateNew({
  className,
  classNameMobile,
  sidebarOpen,
  businessId,
  createNew,
}: TeamSwitcherProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (sidebarOpen == false) {
      setOpen(false);
    }
  }, [sidebarOpen]);
  return (
    <div className="py-4">
      {!sidebarOpen ? (
        <Button
          size="icon"
          className="w-full"
          onClick={() => {
            dispatch(setSidebarOpen(!sidebarOpen));
            setOpen(true);
          }}
        >
          <AiOutlinePlus className="h-4 w-4 " />
        </Button>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              size={classNameMobile ? 'icon' : 'default'}
              variant={'default'}
              role="combobox"
              aria-expanded={open}
              aria-label="Select a team"
              className={cn(
                'flex  items-center gap-2 rounded-md ',
                className,
                classNameMobile
                  ? 'justify-center rounded-full'
                  : ' w-full justify-start',
              )}
            >
              <AiOutlinePlus className="h-4 w-4 " />
              <p className={cn(classNameMobile ? 'hidden' : '')}>Create New</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex w-[270px] flex-col p-2">
            {createNew?.map((item, index) => (
              <Link href={item.href} key={index}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
                >
                  {<item.icon className="mr-2 h-4 w-4" />}
                  {item.title}
                </Button>
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
