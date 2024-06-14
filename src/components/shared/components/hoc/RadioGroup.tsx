'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup as Radio } from '../ui/radio-group';
import { cn } from '@/lib/utils';

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  options: { label: string; value: string }[];
};

export default function RadioGroup({
  className,
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <Radio
      defaultValue={value || ''}
      onValueChange={val => {
        onChange && onChange(val);
      }}
      className={cn(' flex items-center gap-2', className)}
    >
      {options.map(val => (
        <div key={val.value} className=" flex items-center gap-1">
          <RadioGroupItem value={val.value} id={val.value} />
          <Label className="capitalize" htmlFor={val.value}>
            {val.label}
          </Label>
        </div>
      ))}
    </Radio>
  );
}
