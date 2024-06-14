//combobox from shadcn
'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { IoLocationOutline } from 'react-icons/io5';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const locations = [
  {
    value: 'Mumbai',
    label: 'Mumbai',
  },
  {
    value: 'Gujarat',
    label: 'Gujarat',
  },
  {
    value: 'Pune',
    label: 'Pune',
  },
  {
    value: 'Hyderabad',
    label: 'Hyderabad',
  },
  {
    value: 'Delhi',
    label: 'Delhi',
  },
];

export function LocationSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-48 justify-start"
        >
          <IoLocationOutline className="mr-2 h-4 w-4 " />
          {value
            ? locations.find((location) => location.value === value)?.label
            : 'Location'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="relative left-4 md:left-0 ">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                key={location.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                {location.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === location.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
