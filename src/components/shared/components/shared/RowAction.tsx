'use client';
import React, { useRef } from 'react';
import { MdDragIndicator } from 'react-icons/md';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { IoIosRemoveCircle } from 'react-icons/io';
import { type IconType } from 'react-icons';
import {
  RemixiconComponentType,
  RiMenuLine,
  RiMoreLine,
} from '@remixicon/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export interface Action {
  title: string | React.ReactNode;
  action?: Function;
  icon?: IconType | RemixiconComponentType;
}

export default function RowAction({
  actions,
  className,
  index,
}: {
  actions: Action[];
  className?: string;
  index: number;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn(className)} variant="outline">
          <RiMoreLine />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {actions.map((action, ind) =>
          action.action ? (
            <DropdownMenuItem
              key={ind}
              className="mt-3 flex w-full  items-center justify-between text-sm"
              onClick={event => {
                action?.action ? action.action(index) : event.preventDefault();
              }}
            >
              <p className="w-full">{action.title}</p>
              {action.icon && <action.icon />}
            </DropdownMenuItem>
          ) : (
            <div
              key={ind}
              className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground',
                ' mt-3 flex w-full items-center justify-between text-sm hover:bg-muted',
              )}
            >
              <p className="w-full">{action.title}</p>
              {action.icon && <action.icon />}
            </div>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
