'use client';
import React from 'react';
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
import { CheckIcon } from 'lucide-react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Items = {
  label: string;
  value: string;
};

type ComboboxHocProps = {
  label?: string;
  className?: string;
  items: Items[];
  onSelect: (item: string | null) => void;
};

export default function ComboboxHoc({
  label,
  className,
  items,
  onSelect,
}: ComboboxHocProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(className, 'justify-between')}
        >
          {value
            ? items.find(item => item.value === value)?.label
            : label || ''}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0} side="bottom" className="p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandGroup>
            {items.length > 0 ? (
              items.map(item => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={currentValue => {
                    setValue(val => {
                      if (val === currentValue) {
                        onSelect(null);
                        return '';
                      }
                      onSelect(currentValue);
                      return currentValue;
                    });
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No project found.</CommandEmpty>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
