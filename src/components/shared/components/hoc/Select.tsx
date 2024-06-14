import * as React from 'react';

import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import Loader from '../shared/Loader';

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  options?: { label: string; value: string }[];
};

export function Select({
  className,
  value,
  onChange,
  placeholder,
  options,
}: SelectProps) {
  return (
    <SelectComponent defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className={cn('', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <React.Suspense fallback={<Loader />}>
            {options && options.length > 0 ? (
              options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <span> No Results</span>
            )}
          </React.Suspense>
        </SelectGroup>
      </SelectContent>
    </SelectComponent>
  );
}
