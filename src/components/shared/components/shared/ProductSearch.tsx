//combobox from shadcn
'use client';

import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { BsSearch } from 'react-icons/bs';

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

const products = [
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

export function ProductSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-96 justify-between"
        >
          {value
            ? products.find((product) => product.value === value)?.label
            : 'Search Product ...'}
          <BsSearch className="ml-2 h-4 w-4 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <Command>
          <CommandInput placeholder="Search here..." />
          <CommandEmpty>No product found.</CommandEmpty>
          <CommandGroup>
            {products.map((product) => (
              <CommandItem
                key={product.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                {product.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === product.value ? 'opacity-100' : 'opacity-0',
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
